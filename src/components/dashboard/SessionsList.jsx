import { Calendar } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import SessionListItem from './SessionListItem';

/**
 * Sessions List component
 * TODO: API Integration - Fetch today's sessions from GET /api/sessions/today
 * TODO: API Integration - Handle Join Class action via POST /api/sessions/:id/join
 * TODO: API Integration - Handle Book Session navigation
 */
export default function SessionsList({ sessions, onJoinClass, onBookSession }) {
  return (
    <Card className="p-5 sm:p-6 lg:p-7 hover:shadow-md transition-all duration-200">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-5 sm:mb-6">
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-bold mb-1.5 text-[var(--color-foreground)]">My Sessions</h3>
          <p className="text-xs sm:text-sm text-[var(--color-muted-foreground)]">See all sessions booked by you</p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={onBookSession}
          icon={<Calendar className="w-4 h-4" />}
          className="w-full sm:w-auto flex-shrink-0"
        >
          Book Session
        </Button>
      </div>
      
      <div>
        <h4 className="text-sm font-semibold text-[var(--color-muted-foreground)] mb-3 sm:mb-4 px-1">Today</h4>
        <div className="space-y-2 sm:space-y-3">
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