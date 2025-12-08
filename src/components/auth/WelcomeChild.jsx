"use client";

import { CheckCircle } from "lucide-react";
import Link from "next/link";

/**
 * WelcomeChild Component - Welcome screen showing child setup complete
 * Shows child's name and onboarding complete with dashboard link
 * Single Responsibility: Display welcome and final CTA
 */
export default function WelcomeChild({ childName = "John Doe", onContinue }) {
  return (
    <div className="w-full text-center">
      {/* Welcome Icon */}
      <div className="mb-6 sm:mb-8 flex justify-center">
        <div className="text-5xl sm:text-6xl">👋</div>
      </div>

      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
          Welcome {childName}!
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          Your profile is all set. You're ready to start your learning journey.
        </p>
      </div>

      {/* Stats Preview */}
      <div className="bg-green-50 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
        <p className="text-xs sm:text-sm text-gray-600 mb-2">Profile Status</p>
        <p className="text-lg sm:text-xl font-bold text-green-600">
          100% Complete
        </p>
      </div>

      {/* Dashboard Button */}
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
