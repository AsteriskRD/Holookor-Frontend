"use client"

export default function CancelBookingModal({ isOpen, onConfirm, onCancel }) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Cancel booking confirmation"
    >
      <div
        className="bg-white rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="p-4 sm:p-6">
          <h2 className="text-base sm:text-lg font-bold mb-2 text-center" style={{ color: "#0a0a0a" }}>
            Cancel Booking
          </h2>
          <p className="text-sm sm:text-base mb-4" style={{ color: "#6d717f" }}>
            Are you sure that you want to cancel this session? Changes made will be discarded.
          </p>

          {/* Action Buttons: stacked on small screens, inline on sm+ */}
          <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
            <button
              onClick={onCancel}
              className="w-full sm:w-auto px-4 py-2 rounded-lg border font-semibold"
              style={{
                borderColor: "#3da755",
                color: "#3da755",
                backgroundColor: "#ffffff",
              }}
            >
              Don&apos;t Cancel
            </button>
            <button
              onClick={onConfirm}
              className="w-full sm:w-auto px-4 py-2 rounded-lg font-semibold"
              style={{
                backgroundColor: "#3da755",
                color: "#ffffff",
              }}
            >
              Yes, Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}