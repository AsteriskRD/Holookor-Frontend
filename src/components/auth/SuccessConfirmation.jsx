"use client";

import { CheckCircle } from "lucide-react";
import Link from "next/link";

/**
 * SuccessConfirmation Component - Success step after verification
 * Shows email verified status and welcome message
 * Single Responsibility: Display success state only
 */
export default function SuccessConfirmation({ email, role, onContinue }) {
  return (
    <div className="w-full text-center">
      {/* Success Icon */}
      <div className="mb-6 sm:mb-8 flex justify-center">
        <div className="relative">
          <CheckCircle className="w-16 h-16 sm:w-20 sm:h-20 text-green-500" />
        </div>
      </div>

      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
          Email Verified
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          You can now confirm your new account registered with
        </p>
        <p className="text-sm sm:text-base text-gray-900 font-semibold mt-2 break-all">
          {email}
        </p>
      </div>

      {/* Continue Button */}
      <Link href="/dashboard">
        <button
          onClick={onContinue}
          className="w-full px-6 py-3 sm:py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base"
        >
          Go to Dashboard
        </button>
      </Link>

      {/* Secondary Info */}
      <p className="text-xs sm:text-sm text-gray-500 text-center mt-6 sm:mt-8">
        By signing up, you agree to our Terms of Service, confirm that all
        information you provided is accurate, and acknowledge our Privacy
        Policy.
      </p>
    </div>
  );
}
