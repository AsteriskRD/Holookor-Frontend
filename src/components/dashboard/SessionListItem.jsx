import { Clock, ExternalLink } from "lucide-react";
import Button from "../ui/Button";
import { formatTime, formatDuration } from "@/utils/formatters";

/**
 * Session List Item component
 */
export default function SessionListItem({ session, onJoinClass }) {
  const subjectColors = {
    Mathematics: "bg-blue-50 text-blue-700 border-blue-200",
    Chemistry: "bg-purple-50 text-purple-700 border-purple-200",
    Physics: "bg-orange-50 text-orange-700 border-orange-200",
    Biology: "bg-green-50 text-green-700 border-green-200",
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between bg-[var(--background)] p-4 rounded-lg transition-colors duration-150">
        <div className="flex items-start gap-4 min-w-0">
          <div
            className={`px-3 py-1.5 rounded-lg border flex-shrink-0 ${
              subjectColors[session.subject] ||
              "bg-gray-50 text-gray-700 border-gray-200"
            }`}
          >
            <span className="text-xs sm:text-sm font-semibold">
              {session.subject}
            </span>
          </div>

          <div className="min-w-0">
            <p className="text-sm font-semibold text-[var(--color-foreground)] truncate">
              {session.tutorName}
            </p>
            <p className="text-xs text-[var(--color-muted-foreground)] truncate">
              {session.topic}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end mr-2">
            <div className="flex items-center gap-2 text-[var(--color-muted-foreground)]">
              <Clock className="w-4 h-4" />
              <span className="text-xs">
                {formatTime(session.scheduledTime)}
              </span>
            </div>
            <div className="text-xs text-[var(--color-muted-foreground)]">
              {formatDuration(session.duration)}
            </div>
          </div>

          <Button
            variant="primary"
            size="sm"
            onClick={() => onJoinClass(session.id)}
            icon={<ExternalLink className="w-4 h-4" />}
            className="flex-shrink-0"
          >
            Join Class
          </Button>
        </div>
      </div>
    </div>
  );
}
