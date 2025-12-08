"use client";

import { ArrowLeft, User, Calendar } from "lucide-react";

/**
 * LinkChildScreen Component - Parent enters child's info to link account
 * Single Responsibility: Collect parent's child information
 */
export default function LinkChildScreen({
  onSubmit,
  isLoading = false,
  onBack,
}) {
  const handleSubmit = async () => {
    onSubmit({
      childFullName: "",
      childDateOfBirth: "",
    });
  };

  return (
    <div className="w-full">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-green-600 hover:text-green-700 text-sm sm:text-base font-medium mb-6"
      >
        <ArrowLeft className="w-4 h-4" /> Back
      </button>

      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
          Link Your Child
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          Start by entering your child information
        </p>
      </div>

      {/* Child Full Name */}
      <div className="mb-4 sm:mb-5">
        <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
          Child's Full Name
        </label>
        <div className="relative">
          <User className="absolute left-3 top-3 sm:top-3.5 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="John Doe"
            className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
          />
        </div>
      </div>

      {/* Child Date of Birth */}
      <div className="mb-6 sm:mb-7">
        <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
          Child's Date of Birth
        </label>
        <div className="relative">
          <Calendar className="absolute left-3 top-3 sm:top-3.5 w-5 h-5 text-gray-400" />
          <input
            type="date"
            className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
          />
        </div>
      </div>

      {/* Continue Button */}
      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className="w-full px-6 py-3 sm:py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 disabled:bg-gray-400 transition-colors text-sm sm:text-base"
      >
        {isLoading ? "Processing..." : "Create Child Account"}
      </button>

      {/* Info Text */}
      <p className="text-xs sm:text-sm text-gray-500 text-center mt-4">
        We'll use this information to set up your child's personalized learning
        profile.
      </p>
    </div>
  );
}
