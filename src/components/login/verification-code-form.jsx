"use client"

import React, { useState, useRef, useEffect } from "react"
import HolookorLogo from "@/components/Logo"

export function VerificationCodeForm({ email, onVerify, onResend }) {
  const [code, setCode] = useState(["", "", "", "", "", ""])
  const [isLoading, setIsLoading] = useState(false)
  const inputRefs = useRef([])

  const isFormValid = code.every((digit) => digit !== "")

  useEffect(() => {
    inputRefs.current[0]?.focus()
  }, [])

  const handleChange = (index, value) => {
    if (value.length > 1) {
      // Handle paste
      const digits = value.slice(0, 6).split("")
      const newCode = [...code]
      digits.forEach((digit, i) => {
        if (index + i < 6 && /^\d$/.test(digit)) {
          newCode[index + i] = digit
        }
      })
      setCode(newCode)
      const nextIndex = Math.min(index + digits.length, 5)
      inputRefs.current[nextIndex]?.focus()
      return
    }

    if (!/^\d*$/.test(value)) return

    const newCode = [...code]
    newCode[index] = value
    setCode(newCode)

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isFormValid) {
      setIsLoading(true)
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setIsLoading(false)
      onVerify()
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
        <h1 className="text-2xl font-bold text-[#1a1a1a] mb-2">Verification</h1>
        <p className="text-sm text-gray-500">
          A 6 digit code was sent to your mail, enter the code to continue
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Code Input */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-[#1a1a1a]">Enter Code</label>
          <div className="flex gap-2 md:gap-3 justify-center">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el
                }}
                type="text"
                inputMode="numeric"
                maxLength={6}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-11 h-12 md:w-12 md:h-14 text-center text-lg font-semibold border border-gray-200 rounded-lg bg-white text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              />
            ))}
          </div>
        </div>

        {/* Resend Code */}
        <div className="text-sm text-gray-500">
          {"Didn't get code? "}
          <button
            type="button"
            onClick={onResend}
            className="text-green-600 hover:text-green-700 font-medium transition-colors"
          >
            Resend Code
          </button>
        </div>

        {/* Verify Button */}
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
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            "Verify"
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
          <a href="#" className="text-green-600 hover:text-green-700 font-semibold transition-colors">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  )
}
