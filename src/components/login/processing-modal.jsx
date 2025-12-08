"use client"

import React from "react"

export function ProcessingModal() {
  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full mx-auto">
        {/* Spinner */}
        <div className="flex justify-center mb-6">
          <svg
            className="animate-spin h-16 w-16 text-[#1e8e3e]"
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
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-center text-[#1a1a1a] mb-2">Processing</h2>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6 overflow-hidden">
          <div
            className="bg-[#1e8e3e] h-full rounded-full animate-pulse"
            style={{
              width: "65%",
              animation: "pulse 1.5s ease-in-out infinite",
            }}
          ></div>
        </div>

        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}</style>
      </div>
    </div>
  )
}
