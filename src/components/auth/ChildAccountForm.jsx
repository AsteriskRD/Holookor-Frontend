"use client";

import { ArrowLeft } from "lucide-react";

/**
 * ChildAccountForm Component - Collect child's account details
 * Single Responsibility: Collect child's name, DOB, and gender
 */
export default function ChildAccountForm({
  onSubmit,
  isLoading = false,
  onBack,
}) {
  const genderOptions = ["Male", "Female"];

  const handleSubmit = () => {
    onSubmit({
      childName: "",
      childDOB: "",
      childGender: "",
    });
  };

  return (
    <div className="w-full">
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
      <div className="mb-6 sm:mb-8 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
          Create Child's Account
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          Set up your child's learning profile
        </p>
      </div>

      {/* Child Full Name */}
      <div className="mb-4 sm:mb-5">
        <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
          Child's Full Name
        </label>
        <input
          type="text"
          placeholder="John Doe"
          className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
        />
      </div>

      {/* Date of Birth */}
      <div className="mb-4 sm:mb-5">
        <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
          Date of Birth
        </label>
        <input
          type="date"
          className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
        />
      </div>

      {/* Gender */}
      <div className="mb-6 sm:mb-7">
        <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
          Gender
        </label>
        <select className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base bg-white">
          <option value="">Select gender</option>
          {genderOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Continue Button */}
      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className="w-full px-6 py-3 sm:py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 disabled:bg-gray-400 transition-colors text-sm sm:text-base"
      >
        {isLoading ? "Processing..." : "Continue"}
      </button>
    </div>
  );
}
