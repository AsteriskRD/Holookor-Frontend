"use client"

import React, { useState } from "react"
import { Mail } from "lucide-react"
import HolookorLogo from "@/components/Logo"

export function ForgotPasswordForm({ onBack, onNext }) {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const isFormValid = email.length > 0 && email.includes("@")

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isFormValid) {
      setIsLoading(true)
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsLoading(false)
      onNext(email)
    }
  }

  return (
    <div className="w-full max-w-sm mx-auto p-2 md:p-4">
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <HolookorLogo />
      </div>

      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-700 mb-2">Forgot Password</h1>
        <p className="text-sm font-normal text-gray-500">Enter the email associated with your account</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Field */}
        <div className="space-y-2">
          <label htmlFor="forgot-email" className="text-sm font-medium text-gray-500">
            Email
          </label>
          <div className="relative">
            <input
              id="forgot-email"
              type="email"
              placeholder="Johndoe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 pr-12 border border-gray-200 rounded-lg bg-gray-100 text-gray-500 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
            />
            <Mail className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
          </div>
        </div>

        {/* Next Button */}
        <button
          type="submit"
          disabled={!isFormValid || isLoading}
          className={`w-full py-2.5 rounded-lg font-medium text-base transition-all flex items-center justify-center ${
            isFormValid && !isLoading
              ? "bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          {isLoading ? (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            "Next"
          )}
        </button>

        {/* Terms */}
        <p className="text-xs text-center text-gray-500 leading-relaxed">
          By signing in, you agree to our{" "}
          <a href="#" className="text-gray-600 hover:underline">
            Terms of Service
          </a>
          , confirm that all information provided is accurate, and acknowledge our{" "}
          <a href="#" className="text-gray-600 hover:underline">
            Privacy Policy
          </a>
        </p>

        {/* Sign Up Link */}
        <p className="text-center text-sm font-bold text-gray-600">
          {"Don't have an account yet? "}
          <a href="#" className="text-green-600 hover:text-green-700 font-semibold transition-colors">
            Sign Up
          </a>
        </p>

        {/* Back to Login */}
        <button
          type="button"
          onClick={onBack}
          className="w-full text-center text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
          ← Back to Login
        </button>
      </form>
    </div>
  )
}
