import { Clock, ExternalLink } from "lucide-react";
import Button from "../ui/Button";
import { formatTime, formatDuration } from "@/utils/formatters";

/**
 * Session List Item component
 */
export default function SessionListItem({ session, onJoinClass }) {
  return (
    <div className="w-full ">
      <div className="flex items-center justify-between bg-[#F9FAFB] p-4 rounded-lg transition-colors duration-150">
        <div className="flex items-start  gap-4 min-w-0 py-7">
          <div className="min-w-0 py-4">
            <span className="text-xs sm:text-sm font-semibold">
              {session.subject}
            </span>
            <p className="text-sm font-semibold text-[#737373] truncate">
              {session.tutorName}
            </p>
            <p className="text-xs text-[var(--color-muted-foreground)] truncate">
              {session.topic}
            </p>
            <span className="flex mr-2 gap-3  text-xs text-[var(--color-muted-foreground)]">
              <Clock className="w-4 h-4" />
              {formatTime(session.scheduledTime)}
              {formatDuration(session.duration)}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="primary"
            size="sm"
            onClick={() => onJoinClass(session.id)}
            icon={<ExternalLink className="w-4 h-4" />}
            className="flex-shrink-0 p-3 bg-green-600 text-white hover:shadow-md  hover:bg-green-800 transition-all duration-200"
          >
            Join Class
          </Button>
        </div>
      </div>
    </div>
  );
}
