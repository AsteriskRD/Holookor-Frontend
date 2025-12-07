"use client"

import React from "react"

export function PasswordChangedModal({ onContinue }) {
  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full mx-auto">
        {/* Checkmark Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-green-100 rounded-full animate-pulse"></div>
            <svg className="relative w-16 h-16 text-[#1e8e3e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-center text-[#1a1a1a] mb-2">Password Changed</h2>

        {/* Description */}
        <p className="text-center text-gray-600 text-sm mb-6">
          You can now log into your account with your new password.
        </p>

        {/* Done Button */}
        <button
          onClick={onContinue}
          className="w-full bg-[#1e8e3e] hover:bg-[#177432] text-white font-medium py-3 rounded-lg transition-all shadow-md hover:shadow-lg mb-4"
        >
          Done
        </button>

        {/* Terms */}
        <p className="text-xs text-center text-gray-500 leading-relaxed">
          By signing in, you agree to our{" "}
          <a href="#" className="text-[#1a1a1a] hover:underline">
            Terms of Service
          </a>
        </p>
      </div>
    </div>
  )
}
