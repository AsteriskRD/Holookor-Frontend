"use client";

import { useState, useRef } from "react";
import { ArrowLeft } from "lucide-react";

/**
 * EmailVerification Component - Email OTP verification step
 * Single Responsibility: Handle email verification via OTP
 */
export default function EmailVerification({
  email,
  onVerify,
  isLoading = false,
  onResend,
  onBack,
}) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const inputRefs = useRef([]);

  const handleOtpChange = (index, value) => {
    // Only allow numbers
    const numValue = value.replace(/\D/g, "");

    if (numValue) {
      const newOtp = [...otp];
      newOtp[index] = numValue.slice(-1); // Take only last digit
      setOtp(newOtp);
      setError("");

      // Auto-focus to next input
      if (index < 5 && numValue) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === "Backspace") {
      if (otp[index] === "" && index > 0) {
        inputRefs.current[index - 1]?.focus();
      } else {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      }
    }
    // Handle arrow keys
    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === "ArrowRight" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleVerify = () => {
    const otpString = otp.join("");
    if (otpString.length !== 6) {
      setError("Please enter a 6-digit code");
      return;
    }
    onVerify(otpString);
  };

  return (
    <div className="w-full text-center">
      {/* Back Button */}
      {onBack && (
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-green-600 hover:text-green-700 text-sm sm:text-base font-medium mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
      )}

      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
          Verify your email
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          A 6-digit code was sent to your email. Enter the code to continue.
        </p>
      </div>

      {/* Email Display */}
      <p className="text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8 break-all">
        {email}
      </p>

      {/* OTP Input */}
      <div className="mb-6 sm:mb-8">
        <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-3">
          Enter 6 Digit Code
        </label>
        <div className="flex gap-2 sm:gap-3 justify-center mb-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <input
              key={i}
              ref={(el) => (inputRefs.current[i] = el)}
              type="text"
              maxLength="1"
              inputMode="numeric"
              value={otp[i]}
              onChange={(e) => handleOtpChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              className="w-12 h-12 sm:w-14 sm:h-14 border-2 border-gray-300 rounded-lg text-center text-lg sm:text-xl font-semibold focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-300 transition-colors text-sm sm:text-base"
            />
          ))}
        </div>
        {error && <p className="text-red-500 text-xs sm:text-sm">{error}</p>}
      </div>

      {/* Verify Button */}
      <button
        onClick={handleVerify}
        disabled={isLoading}
        className="w-full px-6 py-3 sm:py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 disabled:bg-gray-400 transition-colors text-sm sm:text-base"
      >
        {isLoading ? "Verifying..." : "Verify Email"}
      </button>

      {/* Resend Link */}
      <div className="mt-6 sm:mt-8">
        <p className="text-xs sm:text-sm text-gray-600 mb-2">
          Don't get code?{" "}
          <button
            onClick={onResend}
            className="text-green-600 hover:underline font-medium"
          >
            Resend Code
          </button>
        </p>
      </div>
    </div>
  );
}
