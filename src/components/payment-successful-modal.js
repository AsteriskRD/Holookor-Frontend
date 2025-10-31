"use client"

export default function PaymentSuccessfulModal({ onStartLiveSession }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4 sm:px-6">
      <div className="bg-white rounded-xl p-6 sm:p-8 max-w-sm sm:max-w-md w-full text-center shadow-lg">
        {/* Success Icon */}
        <div className="mb-6">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">
            Payment Successful
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Your booking has been confirmed. You’re all set to start your session!
          </p>
        </div>

        {/* Button */}
        <button
          onClick={onStartLiveSession}
          className="w-full py-3 px-4 rounded-lg font-semibold text-white flex items-center justify-center gap-2 text-sm sm:text-base transition-all duration-200 hover:opacity-90"
          style={{ backgroundColor: "#3cb027" }}
        >
          Start Live Session
          <span className="text-lg">→</span>
        </button>
      </div>
    </div>
  )
}
