"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { EducationBackground } from "@/components/login/education-background"
import { LoginForm } from "@/components/login/login-form"
import { ForgotPasswordForm } from "@/components/login/forgot-password-form"
import { VerificationCodeForm } from "@/components/login/verification-code-form"
import { VerifiedModal } from "@/components/login/verified-modal"
import { CreateNewPasswordForm } from "@/components/login/create-new-password-form"
import { PasswordChangedModal } from "@/components/login/password-changed-modal"
import { SuccessScreen } from "@/components/login/success-screen"

export default function LoginPage() {
  const [view, setView] = useState("login")
  const [email, setEmail] = useState("")
  const router = useRouter()

  const handleForgotPasswordNext = (userEmail) => {
    setEmail(userEmail)
    setView("verification")
  }

  const handleVerify = () => {
    setView("verified")
  }

  const handleVerifiedContinue = () => {
    setView("create-password")
  }

  const handleCreatePasswordNext = () => {
    setView("password-changed")
  }

  const handlePasswordChangedDone = () => {
    setView("login")
    setEmail("")
  }

  const handleResendCode = () => {
    alert("Verification code resent to " + email)
  }

  const handleContinue = () => {
    router.push("/dashboard")
  }

  const handleLogin = () => {
    router.push("/dashboard")
  }

  return (
    <main className="min-h-screen relative flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/login_background.png')",
          opacity: 0.1, // Only the background fades
          zIndex: 0,
        }}
      ></div>
      {/* Card Container and Modals */}
      <div className="relative z-10 w-full max-w-lg">
        <div className="bg-white rounded-2xl shadow-xl">
          {view === "login" && (
            <LoginForm
              onForgotPassword={() => setView("forgot-password")}
              onLogin={handleLogin}
            />
          )}
          {view === "forgot-password" && (
            <ForgotPasswordForm
              onBack={() => setView("login")}
              onNext={handleForgotPasswordNext}
            />
          )}
          {view === "verification" && (
            <VerificationCodeForm
              email={email}
              onVerify={handleVerify}
              onResend={handleResendCode}
            />
          )}
          {view === "success" && <SuccessScreen onContinue={handleContinue} />}
        </div>

        {/* Modals */}
        {view === "verified" && <VerifiedModal onContinue={handleVerifiedContinue} />}

        {view === "create-password" && (
          <div className="bg-white rounded-2xl shadow-xl">
            <CreateNewPasswordForm
              onNext={handleCreatePasswordNext}
              onBack={() => setView("login")}
            />
          </div>
        )}

        {view === "password-changed" && (
          <PasswordChangedModal onContinue={handlePasswordChangedDone} />
        )}
      </div>
    </main>
  )
}
