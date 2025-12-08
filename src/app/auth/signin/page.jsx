"use client";

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowLeft } from "lucide-react";
import Link from "next/link";
import AuthBackground from "@/components/auth/AuthBackground";

/**
 * SignIn Page - Basic email/password authentication
 */
export default function SigninPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      setIsLoading(true);
      try {
        // TODO: API call to authenticate
        // const response = await fetch("/api/auth/signin", {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify(formData),
        // });
        await new Promise((resolve) => setTimeout(resolve, 1500));
        // On success, redirect to dashboard
        window.location.href = "/dashboard";
      } catch (error) {
        console.error("Sign in error:", error);
        setErrors({ form: "Invalid credentials. Please try again." });
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <main className="min-h-screen bg-white relative overflow-hidden px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex items-center justify-center">
      <AuthBackground />
      <div className="w-full max-w-md relative z-10">
        {/* Back Button */}
        <Link href="/" className="inline-block mb-6">
          <button className="flex items-center gap-2 text-green-600 hover:text-green-700 text-sm sm:text-base font-medium">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
        </Link>

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
            Welcome Back
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Sign in to your account to continue
          </p>
        </div>

        {/* Error Message */}
        {errors.form && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-600">{errors.form}</p>
          </div>
        )}

        {/* Email */}
        <div className="mb-4 sm:mb-5">
          <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 sm:top-3.5 w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-xs sm:text-sm mt-1">
              {errors.email}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="mb-2">
          <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 sm:top-3.5 w-5 h-5 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••••••••••"
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
              className="w-full pl-10 pr-10 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 sm:top-3.5 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs sm:text-sm mt-1">
              {errors.password}
            </p>
          )}
        </div>

        {/* Forgot Password Link */}
        <div className="text-right mb-6">
          <Link
            href="#"
            className="text-xs sm:text-sm text-green-600 hover:underline font-medium"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full px-6 py-3 sm:py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 disabled:bg-gray-400 transition-colors text-sm sm:text-base"
        >
          {isLoading ? "Signing in..." : "Sign In"}
        </button>

        {/* Sign Up Link */}
        <div className="text-center mt-6">
          <p className="text-xs sm:text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              href="/auth/signup"
              className="text-green-600 hover:underline font-medium"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
