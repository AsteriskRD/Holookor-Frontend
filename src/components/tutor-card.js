import { CheckCircle, Star } from "lucide-react"

export default function TutorCard() {
  return (
    <div className="p-6 rounded-lg mb-8 border" style={{ borderColor: "#e5e7ea", backgroundColor: "#ffffff" }}>
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0"
          style={{ backgroundColor: "#394050" }}
        >
          DS
        </div>

        {/* Info */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-bold" style={{ color: "#0a0a0a" }}>
              Dr. Sarah Johnson
            </h3>
            <CheckCircle size={16} style={{ color: "#3da755" }} />
            <span className="text-xs font-semibold" style={{ color: "#3da755" }}>
              Verified
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span
              className="text-xs font-semibold px-2 py-1 rounded"
              style={{ backgroundColor: "#0a0a0a", color: "#ffffff" }}
            >
              Mathematics
            </span>
            <div className="flex items-center gap-1">
              <Star size={16} style={{ color: "#fdc700", fill: "#fdc700" }} />
              <span className="text-sm font-semibold" style={{ color: "#0a0a0a" }}>
                4.9 (156)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
