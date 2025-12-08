"use client";

import { User, Mail, Phone, Lock, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { useState } from "react";

/**
 * AccountForm Component - Account creation step
 * Collects: Full Name, Email, Phone, Password
 * Single Responsibility: Handle account data collection and form validation
 */
export default function AccountForm({ onSubmit, isLoading = false, onBack }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    else if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="w-full bg-white ">
      {/* Back Button */}
      {onBack && (
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-green-600 hover:text-green-700 text-sm sm:text-base font-medium mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
      )}
      {/* Full Name */}
      <div className="mb-4 sm:mb-5">
        <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
          Full Name
        </label>
        <div className="relative">
          <User className="absolute left-3 top-3 sm:top-3.5 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
          />
        </div>
        {errors.fullName && (
          <p className="text-red-500 text-xs sm:text-sm mt-1">
            {errors.fullName}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="mb-4 sm:mb-5">
        <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
          Email
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 sm:top-3.5 w-5 h-5 text-gray-400" />
          <input
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
          />
        </div>
        {errors.email && (
          <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>
        )}
      </div>

      {/* Phone Number */}
      <div className="mb-4 sm:mb-5">
        <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
          Phone Number
        </label>
        <div className="relative flex">
          <Phone className="absolute left-3 top-3 sm:top-3.5 w-5 h-5 text-gray-400" />
          <input
            type="tel"
            placeholder="+234 802 345 6790"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
          />
        </div>
        {errors.phone && (
          <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.phone}</p>
        )}
      </div>

      {/* Password */}
      <div className="mb-6 sm:mb-7">
        <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 sm:top-3.5 w-5 h-5 text-gray-400" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="••••••••••••••••"
            value={formData.password}
            onChange={(e) => handleChange("password", e.target.value)}
            className="w-full pl-10 pr-10 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 sm:top-3.5 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Min 8 characters, 1 upper, number and special character.
        </p>
        {errors.password && (
          <p className="text-red-500 text-xs sm:text-sm mt-1">
            {errors.password}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className="w-full px-6 py-3 sm:py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 disabled:bg-gray-400 transition-colors text-sm sm:text-base"
      >
        {isLoading ? "Creating Account..." : "Continue"}
      </button>

      {/* Terms */}
      <p className="text-xs text-gray-500 text-center mt-4">
        By signing up, you agree to our Terms of Service, confirm that an
        information you provided is accurate, and acknowledge our Privacy
        Policy.
      </p>
    </div>
  );
}
