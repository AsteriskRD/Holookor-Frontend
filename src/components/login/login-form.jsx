"use client"

import React, { useState } from "react"
import { Mail, Lock, Check } from "lucide-react" // Removed Checkbox import
import HolookorLogo from "@/components/Logo"

export function LoginForm({ onForgotPassword, onLogin }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const isFormValid = email.length > 0 && password.length > 0

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isFormValid) {
      setIsLoading(true)
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setIsLoading(false)
      onLogin({ email, password, rememberMe }) // pass rememberMe
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
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Welcome Back</h1>
        <h2 className="text-lg font-semibold text-gray-700 mb-1">Login to your Dashboard</h2>
        <p className="text-sm text-gray-500">Enter your details to continue your learning progress</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email Field */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-500">Email</label>
          <div className="relative">
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 pr-12 border border-gray-200 rounded-lg bg-gray-100 text-gray-500 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
            />
            <Mail className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
          </div>
        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-medium text-gray-500">Password</label>
          <div className="relative">
            <input
              id="password"
              type="password"
              placeholder="••••••••••••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 pr-12 border border-gray-200 rounded-lg bg-gray-100 text-gray-500 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
            />
            <Lock className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
          </div>
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 border-gray-300 "
            />
            <span className="text-sm text-gray-500">Remember me</span>
          </label>

          <button
            type="button"
            onClick={onForgotPassword}
            className="text-sm text-green-700 hover:text-green-800 font-medium transition-colors"
          >
            Forgot Password?
          </button>
        </div>

        {/* Login Button */}
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
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            "Login"
          )}
        </button>

        {/* Terms */}
        <p className="text-xs text-center text-gray-500 leading-relaxed">
          By signing in, you agree to our{" "}
          <a href="#" className="text-gray-600 hover:underline">Terms of Service</a>, confirm that all information provided is accurate, and acknowledge our{" "}
          <a href="#" className="text-gray-600 hover:underline">Privacy Policy</a>
        </p>

                {/* Sign Up Link */}
                <p className="text-center text-sm text-[#1a1a1a]">
                  {"Don't have an account yet? "}
                  <a href="#" className="text-green-700 hover:underline font-medium">Sign Up</a>
                </p>
              </form>
            </div>
          )
        }
