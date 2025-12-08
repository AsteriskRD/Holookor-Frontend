"use client"

import React, { useState } from "react"
import HolookorLogo from "@/components/Logo"

export function CreateNewPasswordForm({ onNext, onBack }) {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const isPasswordValid =
    formData.newPassword.length >= 8 &&
    /[A-Z]/.test(formData.newPassword) &&
    /[0-9]/.test(formData.newPassword) &&
    /[!@#$%^&*(),.?":{}|<>]/.test(formData.newPassword)

  const isFormValid = isPasswordValid && formData.newPassword === formData.confirmPassword

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isFormValid) {
      setIsLoading(true)
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 3000))
      setIsLoading(false)
      onNext()
    }
  }

  return (
    <div className="w-full max-w-md mx-auto p-8 md:p-10">
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <HolookorLogo />
      </div>

      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-[#1a1a1a] mb-2">Create New Password</h1>
        <p className="text-sm text-gray-500">Enter new password for your account</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* New Password */}
        <div className="space-y-2">
          <label htmlFor="newPassword" className="text-sm font-medium text-[#1a1a1a]">
            New Password
          </label>
          <div className="relative">
            <input
              id="newPassword"
              name="newPassword"
              type={showPassword ? "text" : "password"}
              value={formData.newPassword}
              onChange={handleChange}
              placeholder="••••••••••••••••••"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 text-[#1a1a1a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Min 8 Characters, 1 Upper Case, number and special character
          </p>
        </div>

        {/* Confirm Password */}
        <div className="space-y-2">
          <label htmlFor="confirmPassword" className="text-sm font-medium text-[#1a1a1a]">
            Confirm Password
          </label>
          <div className="relative">
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••••••••••••"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 text-[#1a1a1a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Next Button */}
        <button
          type="submit"
          disabled={!isFormValid || isLoading}
          className={`w-full py-3.5 rounded-lg font-medium text-base transition-all flex items-center justify-center ${
            isFormValid && !isLoading
              ? "bg-[#1e8e3e] hover:bg-[#177432] text-white shadow-md hover:shadow-lg"
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
          <a href="#" className="text-[#1a1a1a] hover:underline">
            Terms of Service
          </a>
          , confirm that all information provided is accurate, and acknowledge our{" "}
          <a href="#" className="text-[#1a1a1a] hover:underline">
            Privacy Policy
          </a>
        </p>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-[#1a1a1a]">
          {"Don't have an account yet? "}
          <a
            href="#"
            className="text-green-600 hover:text-green-700 font-semibold transition-colors"
          >
            Sign Up
          </a>
        </p>
      </form>
    </div>
  )
}
