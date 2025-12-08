"use client"

import React from "react"
import HolookorLogo from "@/components/Logo"
import { CheckCircle } from "lucide-react"

export function SuccessScreen({ onContinue }) {
  return (
    <div className="w-full max-w-md mx-auto p-8 md:p-10">
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <HolookorLogo />
      </div>

      {/* Success Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle className="w-12 h-12 text-[#1e8e3e]" />
        </div>
      </div>

      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-[#1a1a1a] mb-2">Verification Successful!</h1>
        <p className="text-sm text-gray-500">
          Your email has been verified successfully. You can now proceed to reset your password.
        </p>
      </div>

      {/* Continue Button */}
      <button
        onClick={onContinue}
        className="w-full py-3.5 rounded-lg font-medium text-base transition-all bg-[#1e8e3e] hover:bg-[#177432] text-white shadow-md hover:shadow-lg"
      >
        Continue to Dashboard
      </button>

      {/* Terms */}
      <p className="text-xs text-center text-gray-500 leading-relaxed mt-6">
        By signing in, you agree to our{" "}
        <a href="#" className="text-[#1a1a1a] hover:underline">
          Terms of Service
        </a>
        , confirm that all information provided is accurate, and acknowledge our{" "}
        <a href="#" className="text-[#1a1a1a] hover:underline">
          Privacy Policy
        </a>
      </p>

      {/* Sign Up Link */}
      <p className="text-center text-sm text-[#1a1a1a] mt-4">
        {"Don't have an account yet? "}
        <a href="#" className="text-green-600 hover:text-green-700 font-semibold transition-colors">
          Sign Up
        </a>
      </p>
    </div>
  )
}
