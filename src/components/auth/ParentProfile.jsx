"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";

/**
 * ParentProfile Component - Parent-specific profile setup
 * Collects: Date of Birth, Gender, School Level, Subjects, Preferred Time, Availability
 * Single Responsibility: Handle parent profile data collection only
 */
export default function ParentProfile({ onSubmit, isLoading = false, onBack }) {
  const [formData, setFormData] = useState({
    dateOfBirth: "",
    gender: "",
    schoolLevel: "",
    subjects: [],
    preferredTime: "",
    availability: "",
  });

  const [errors, setErrors] = useState({});

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
  const genderOptions = ["Male", "Female"];
  const timeOptions = ["Morning", "Afternoon", "Evening", "Night"];
  const availabilityOptions = [
    "1-2 times per week",
    "3-4 times per week",
    "Daily",
  ];

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubjectToggle = (subject) => {
    setFormData((prev) => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter((s) => s !== subject)
        : [...prev.subjects, subject],
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.dateOfBirth)
      newErrors.dateOfBirth = "Date of birth is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.schoolLevel)
      newErrors.schoolLevel = "School level is required";
    if (formData.subjects.length === 0)
      newErrors.subjects = "Select at least one subject";
    if (!formData.preferredTime)
      newErrors.preferredTime = "Preferred time is required";
    if (!formData.availability)
      newErrors.availability = "Availability is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onSubmit(formData);
    }
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
          Create Your Account
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          Set up your profile
        </p>
      </div>

      {/* Date of Birth */}
      <div className="mb-4 sm:mb-5">
        <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
          Date of Birth
        </label>
        <input
          type="date"
          value={formData.dateOfBirth}
          onChange={(e) => handleChange("dateOfBirth", e.target.value)}
          className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
        />
        {errors.dateOfBirth && (
          <p className="text-red-500 text-xs sm:text-sm mt-1">
            {errors.dateOfBirth}
          </p>
        )}
      </div>

      {/* Gender */}
      <div className="mb-4 sm:mb-5">
        <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
          Gender
        </label>
        <select
          value={formData.gender}
          onChange={(e) => handleChange("gender", e.target.value)}
          className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base bg-white"
        >
          <option value="">Select gender</option>
          {genderOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.gender && (
          <p className="text-red-500 text-xs sm:text-sm mt-1">
            {errors.gender}
          </p>
        )}
      </div>

      {/* School Level */}
      <div className="mb-4 sm:mb-5">
        <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
          School Level
        </label>
        <select
          value={formData.schoolLevel}
          onChange={(e) => handleChange("schoolLevel", e.target.value)}
          className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base bg-white"
        >
          <option value="">Select school level</option>
          {schoolLevels.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
        {errors.schoolLevel && (
          <p className="text-red-500 text-xs sm:text-sm mt-1">
            {errors.schoolLevel}
          </p>
        )}
      </div>

      {/* Subjects of Interest */}
      <div className="mb-4 sm:mb-5">
        <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-3">
          Subjects of Interest
        </label>
        <div className="flex flex-wrap gap-2">
          {subjectOptions.map((subject) => (
            <button
              key={subject}
              onClick={() => handleSubjectToggle(subject)}
              className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                formData.subjects.includes(subject)
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              + {subject}
            </button>
          ))}
        </div>
        {errors.subjects && (
          <p className="text-red-500 text-xs sm:text-sm mt-2">
            {errors.subjects}
          </p>
        )}
      </div>

      {/* Preferred Study Time */}
      <div className="mb-4 sm:mb-5">
        <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
          Preferred Study Time
        </label>
        <select
          value={formData.preferredTime}
          onChange={(e) => handleChange("preferredTime", e.target.value)}
          className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base bg-white"
        >
          <option value="">Select preferred time</option>
          {timeOptions.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        {errors.preferredTime && (
          <p className="text-red-500 text-xs sm:text-sm mt-1">
            {errors.preferredTime}
          </p>
        )}
      </div>

      {/* Weekly Availability */}
      <div className="mb-6 sm:mb-7">
        <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
          Weekly Availability
        </label>
        <select
          value={formData.availability}
          onChange={(e) => handleChange("availability", e.target.value)}
          className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base bg-white"
        >
          <option value="">Select availability</option>
          {availabilityOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.availability && (
          <p className="text-red-500 text-xs sm:text-sm mt-1">
            {errors.availability}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className="w-full px-6 py-3 sm:py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 disabled:bg-gray-400 transition-colors text-sm sm:text-base"
      >
        {isLoading ? "Completing..." : "Complete Profile"}
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
