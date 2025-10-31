import { CheckCircle, Star } from "lucide-react"

export default function TutorCard() {
  return (
    <div 
      className="p-4 sm:p-6 rounded-lg mb-4 sm:mb-8 border transition-shadow hover:shadow-md"
      style={{ borderColor: "#e5e7ea", backgroundColor: "#ffffff" }}
    >
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
        {/* Avatar - Smaller on mobile, larger on desktop */}
        <div
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center 
                     text-white font-bold text-lg sm:text-xl flex-shrink-0"
          style={{ backgroundColor: "#394050" }}
        >
          DS
        </div>

        {/* Info - Center aligned on mobile, left aligned on desktop */}
        <div className="flex-1 w-full text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 mb-2">
            <h3 className="text-base sm:text-lg font-bold" style={{ color: "#0a0a0a" }}>
              Dr. Sarah Johnson
            </h3>
            <div className="flex items-center gap-1">
              <CheckCircle size={16} style={{ color: "#3da755" }} />
              <span className="text-xs font-semibold" style={{ color: "#3da755" }}>
                Verified
              </span>
            </div>
          </div>

          {/* Tags and Rating - Stack on mobile, inline on desktop */}
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <span
              className="text-xs font-semibold px-3 py-1.5 rounded-full w-fit"
              style={{ backgroundColor: "#0a0a0a", color: "#ffffff" }}
            >
              Mathematics
            </span>
            <div className="flex items-center gap-1">
              <Star size={16} style={{ color: "#fdc700", fill: "#fdc700" }} />
              <span className="text-sm font-semibold" style={{ color: "#0a0a0a" }}>
                4.9
              </span>
              <span className="text-sm text-gray-500">
                (156)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}