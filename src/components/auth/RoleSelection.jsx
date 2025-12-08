"use client";

import { Logo } from "lucide-react";
import Link from "next/link";


/**
 * RoleSelection Component - First step of signup
 * Allows user to choose between Student or Parent role
 * Single Responsibility: Handle role selection only
 */
export default function RoleSelection({ onSelectRole }) {
  return (
    <div className=" bg-white   flex items-center justify-center">
     
      <div className="w-full max-w-md relative z-10 bg-white rounded-2xl  p-8 sm:p-10">
        {/* Logo */}
        <div className="mb-8 text-center">
          <img
            src="/Logo.png"
            alt="HOLOOKOR"
            className="w-20 h-8 sm:w-28 sm:h-10 mx-auto"
          />
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Create Account
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Who are you signing up as?
          </p>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">
            We'll tailor your dashboard based on your selection.
          </p>
        </div>

        {/* Role Selection Buttons */}
        <div className="space-y-3 mb-8">
          {/* Student Button */}
          <button
            onClick={() => onSelectRole("student")}
            className="w-full px-6 py-3 sm:py-4 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors text-sm sm:text-base"
          >
            Student
          </button>

          {/* Parent Button */}
          <button
            onClick={() => onSelectRole("parent")}
            className="w-full px-6 py-3 sm:py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-green-600 hover:text-green-600 transition-colors text-sm sm:text-base"
          >
            Parent
          </button>
        </div>

        {/* Tutor CTA */}
        <div className="text-center mb-8 border-t pt-6">
          <p className="text-xs sm:text-sm text-gray-600 mb-2">
            Want to become a tutor?{" "}
            <Link
              href="#"
              className="text-green-600 hover:underline font-medium"
            >
              Sign up here
            </Link>
            .
          </p>
        </div>

        {/* Next Button */}
        <button
          onClick={() => onSelectRole("student")} // Default to student on next
          className="w-full px-6 py-3 sm:py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base"
        >
          Next
        </button>

        {/* Login Link */}
        <div className="text-center mt-6">
          <p className="text-xs sm:text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/auth/signin"
              className="text-green-600 hover:underline font-medium"
            >
              LOGIN
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
