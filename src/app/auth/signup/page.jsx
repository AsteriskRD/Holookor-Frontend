"use client";

import { useState } from "react";
import RoleSelection from "@/components/auth/RoleSelection";
import AccountForm from "@/components/auth/AccountForm";
import EmailVerification from "@/components/auth/EmailVerification";
import SuccessConfirmation from "@/components/auth/SuccessConfirmation";
import ParentProfile from "@/components/auth/ParentProfile";
import LinkChildScreen from "@/components/auth/LinkChildScreen";
import ChildAccountForm from "@/components/auth/ChildAccountForm";
import StudyPreferences from "@/components/auth/StudyPreferences";
import NotificationSettings from "@/components/auth/NotificationSettings";
import WelcomeChild from "@/components/auth/WelcomeChild";
import AuthBackground from "@/components/auth/AuthBackground";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/**
 * Signup Page - Main orchestrator for the signup flow
 * Manages steps: Role -> Account -> Verification -> ParentProfile/ChildSetup/Success
 */
export default function SignupPage() {
  const [step, setStep] = useState("role");
  // role, account, verify, parent-profile, link-child, child-account, study-prefs, notifications, welcome, success
  const [role, setRole] = useState(null); // "student" or "parent"
  const [accountData, setAccountData] = useState(null);
  const [childData, setChildData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Step 1: Role Selection
  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    setStep("account");
  };

  // Step 2: Account Creation
  const handleAccountSubmit = async (data) => {
    setIsLoading(true);
    try {
      // TODO: API call to create account
      // const response = await fetch("/api/auth/signup", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ ...data, role }),
      // });
      // For now, simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setAccountData(data);
      setStep("verify");
    } catch (error) {
      console.error("Signup error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Step 3: Email Verification
  const handleEmailVerify = async (otp) => {
    setIsLoading(true);
    try {
      // TODO: API call to verify OTP
      // const response = await fetch("/api/auth/verify-otp", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email: accountData.email, otp }),
      // });
      // For now, simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      if (role === "parent") {
        setStep("link-child");
      } else {
        setStep("success");
      }
    } catch (error) {
      console.error("Verification error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Step 4: Parent - Link Child
  const handleLinkChild = async (data) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setChildData(data);
      setStep("child-account");
    } catch (error) {
      console.error("Link child error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Step 5: Parent - Child Account Setup
  const handleChildAccountSubmit = async (data) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setChildData((prev) => ({ ...prev, ...data }));
      setStep("study-prefs");
    } catch (error) {
      console.error("Child account error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Step 6: Parent - Study Preferences
  const handleStudyPreferencesSubmit = async (data) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setChildData((prev) => ({ ...prev, ...data }));
      setStep("notifications");
    } catch (error) {
      console.error("Study prefs error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Step 7: Parent - Notification Settings
  const handleNotificationSettingsSubmit = async (data) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setChildData((prev) => ({ ...prev, notifications: data }));
      setStep("welcome");
    } catch (error) {
      console.error("Notification settings error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Step 8: Welcome (Parent flow only)
  const handleWelcomeComplete = async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStep("success");
    } catch (error) {
      console.error("Welcome error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Parent Profile (alternative path - kept for compatibility)
  const handleParentProfileSubmit = async (profileData) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStep("success");
    } catch (error) {
      console.error("Profile setup error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Resend OTP handler
  const handleResendOtp = async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("OTP resent successfully!");
    } catch (error) {
      console.error("Resend OTP error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Back handlers for navigation
  const handleBackFromAccount = () => {
    setStep("role");
  };

  const handleBackFromVerify = () => {
    setStep("account");
  };

  const handleBackFromLinkChild = () => {
    setStep("verify");
  };

  const handleBackFromChildAccount = () => {
    setStep("link-child");
  };

  const handleBackFromStudyPrefs = () => {
    setStep("child-account");
  };

  const handleBackFromNotifications = () => {
    setStep("study-prefs");
  };

  return (
    <main className="min-h-screen  px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex items-center justify-center">
      <AuthBackground />
      <div className="w-full max-w-md relative z-10 bg-white rounded-2xl shadow-md p-8 sm:p-10">
         
        {/* Logo */}
        {step !== "role" ? (
          <>
          
          <div className="mb-8 text-center">
            <img
              src="/Logo.png"
              alt="HOLOOKOR"
              className="w-auto h-8 sm:w-28 sm:h-10 mx-auto"
            />
          </div>
          </>
        ): <Link href="/" className="inline-block mb-6">
          <button className="flex items-center gap-2 text-green-600 hover:text-green-700 text-sm sm:text-base font-medium">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
        </Link>}

        {/* Step Indicator */}
        {step !== "role" && step !== "success" && step !== "welcome" && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {role === "parent"
                ? [
                    "account",
                    "verify",
                    "link-child",
                    "child-account",
                    "study-prefs",
                    "notifications",
                  ].map((s, idx) => (
                    <div
                      key={s}
                      className={`h-2 flex-1 rounded-full mx-1 transition-colors ${
                        [
                          "account",
                          "verify",
                          "link-child",
                          "child-account",
                          "study-prefs",
                          "notifications",
                        ].indexOf(step) >= idx
                          ? "bg-green-600"
                          : "bg-gray-200"
                      }`}
                    />
                  ))
                : ["account", "verify"].map((s, idx) => (
                    <div
                      key={s}
                      className={`h-2 flex-1 rounded-full mx-1 transition-colors ${
                        step === s ? "bg-green-600" : "bg-gray-200"
                      }`}
                    />
                  ))}
            </div>
            <p className="text-xs sm:text-sm text-gray-500 text-center">
              {role === "parent"
                ? `Step ${
                    [
                      "account",
                      "verify",
                      "link-child",
                      "child-account",
                      "study-prefs",
                      "notifications",
                    ].indexOf(step) + 1
                  } of 6`
                : `Step ${["account", "verify"].indexOf(step) + 1} of 2`}
            </p>
          </div>
        )}

        {/* Step Content */}
        {step === "role" && <RoleSelection onSelectRole={handleRoleSelect} />}

        {step === "account" && (
          <>
            <div className="mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Let's Create Your Account
              </h1>
              <p className="text-sm sm:text-base text-gray-600">
                {role === "parent"
                  ? "Sign up as a parent to find the best tutors for your child."
                  : "Sign up to start learning with the best tutors."}
              </p>
            </div>
            <AccountForm
              onSubmit={handleAccountSubmit}
              isLoading={isLoading}
              onBack={handleBackFromAccount}
            />
          </>
        )}

        {step === "verify" && accountData && (
          <>
            <div className="mb-6 sm:mb-8"></div>
            <EmailVerification
              email={accountData.email}
              onVerify={handleEmailVerify}
              isLoading={isLoading}
              onResend={handleResendOtp}
              onBack={handleBackFromVerify}
            />
          </>
        )}

        {step === "parent-profile" && (
          <ParentProfile
            onSubmit={handleParentProfileSubmit}
            isLoading={isLoading}
            onBack={handleBackFromVerify}
          />
        )}

        {/* New Parent Flow Steps */}
        {step === "link-child" && (
          <LinkChildScreen
            onSubmit={handleLinkChild}
            isLoading={isLoading}
            onBack={handleBackFromLinkChild}
          />
        )}

        {step === "child-account" && (
          <ChildAccountForm
            onSubmit={handleChildAccountSubmit}
            isLoading={isLoading}
            onBack={handleBackFromChildAccount}
          />
        )}

        {step === "study-prefs" && (
          <StudyPreferences
            onSubmit={handleStudyPreferencesSubmit}
            isLoading={isLoading}
            onBack={handleBackFromStudyPrefs}
          />
        )}

        {step === "notifications" && (
          <NotificationSettings
            onSubmit={handleNotificationSettingsSubmit}
            isLoading={isLoading}
            onBack={handleBackFromNotifications}
          />
        )}

        {step === "welcome" && childData && (
          <>
            <div className="mb-6 sm:mb-8"></div>
            <WelcomeChild
              childName={childData.childName || "Child"}
              onContinue={handleWelcomeComplete}
            />
          </>
        )}

        {step === "success" && accountData && (
          <>
            <div className="mb-6 sm:mb-8"></div>
            <SuccessConfirmation
              email={accountData.email}
              role={role}
              onContinue={() => {
                // Navigate to dashboard after success
              }}
            />
          </>
        )}
      </div>
    </main>
  );
}
