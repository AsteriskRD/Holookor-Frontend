"use client"

export default function CancelBookingModal({ isOpen, onConfirm, onCancel }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4 shadow-lg" style={{ backgroundColor: "#ffffff" }}>
        <h2 className="text-lg font-bold mb-3 text-center" style={{ color: "#0a0a0a" }}>
          Cancel Booking
        </h2>
        <p className="text-sm mb-6" style={{ color: "#6d717f" }}>
          Are you sure that you want to cancel this session. Changes made will be discarded
        </p>

        {/* Action Buttons */}
        <div className="flex gap-3 justify-center">
          <button
            onClick={onCancel}
            className="px-6 py-2 rounded-lg border font-semibold"
            style={{
              borderColor: "#3da755",
              color: "#3da755",
              backgroundColor: "#ffffff",
            }}
          >
            Don&#39;t Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-6 py-2 rounded-lg font-semibold"
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
  )
}
