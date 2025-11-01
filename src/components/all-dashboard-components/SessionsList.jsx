import { Calendar } from "lucide-react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import SessionListItem from "./SessionListItem";

/**
 * Sessions List component
 * TODO: API Integration - Fetch today's sessions from GET /api/sessions/today
 * TODO: API Integration - Handle Join Class action via POST /api/sessions/:id/join
 * TODO: API Integration - Handle Book Session navigation
 */
export default function SessionsList({ sessions, onJoinClass, onBookSession }) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-1 text-[var(--color-foreground)]">
            My Sessions
          </h3>
          <p className="text-sm text-[var(--color-muted-foreground)]">
            See all sessions booked by you
          </p>
        </div>
          {/* <Button
                  variant="primary"
                  className="flex items-center gap-2"
                  onClick={() => onJoinClass(session.id)}
                >
                  <span>Join Class</span>
                  <ExternalLink className="w-4 h-4" />
                </Button> */}
        <Button
          variant="outline"
          onClick={onBookSession}
          className="flex items-center gap-2 bg-[#E5E4E2]  hover:text-white hover:bg-[#0c5b29] p-3"
        >
          <Calendar className="w-4 h-4" />
          Book Session
        </Button>
      </div>

      <div>
        <h4 className="text-sm font-medium text-[var(--color-muted-foreground)] mb-4">
          Today
        </h4>
        <div className="space-y-10">
          {sessions.map((session) => (
            <SessionListItem
              key={session.id}
              session={session}
              onJoinClass={onJoinClass}
            />
          ))}
        </div>
      </div>
    </Card>
  );
}
