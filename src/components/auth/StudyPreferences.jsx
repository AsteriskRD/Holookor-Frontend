"use client";

import { Clock, ArrowLeft } from "lucide-react";

/**
 * StudyPreferences Component - Set child's study time and availability
 * Single Responsibility: Collect study time and weekly availability preferences
 */
export default function StudyPreferences({
  onSubmit,
  isLoading = false,
  onBack,
}) {
  const schoolLevels = [
    "High School",
    "Primary School",
    "Junior Secondary",
    "Senior Secondary",
  ];
  const subjectOptions = [
    "Mathematics",
    "English",
    "Science",
    "Physics",
    "Chemistry",
    "Biology",
  ];
  const timeOptions = ["Morning", "Afternoon", "Evening", "Night"];
  const availabilityOptions = [
    "1-2 times per week",
    "3-4 times per week",
    "Daily",
  ];

  const handleSubmit = () => {
    onSubmit({
      schoolLevel: "",
      subjects: [],
      preferredTime: "",
      availability: "",
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
      <div className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
          Create Child's Account
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          Set up your child's learning profile
        </p>
      </div>

      {/* School Level */}
      <div className="mb-4 sm:mb-5">
        <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
          School Level
        </label>
        <select className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base bg-white">
          <option value="">Select school level</option>
          {schoolLevels.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
      </div>

      {/* Subjects */}
      <div className="mb-4 sm:mb-5">
        <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-3">
          Subjects
        </label>
        <div className="flex flex-wrap gap-2">
          {subjectOptions.map((subject) => (
            <button
              key={subject}
              className="px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium border-2 border-green-600 text-green-600 hover:bg-green-50 transition-colors"
            >
              + {subject}
            </button>
          ))}
        </div>
      </div>

      {/* Preferred Study Time */}
      <div className="mb-4 sm:mb-5">
        <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
          Preferred Study Time
        </label>
        <select className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base bg-white">
          <option value="">Select preferred time</option>
          {timeOptions.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>

      {/* Weekly Availability */}
      <div className="mb-6 sm:mb-7">
        <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
          Weekly Availability
        </label>
        <select className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base bg-white">
          <option value="">Select availability</option>
          {availabilityOptions.map((opt) => (
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
        {isLoading ? "Processing..." : "Complete Child Profile"}
      </button>
    </div>
  );
}
