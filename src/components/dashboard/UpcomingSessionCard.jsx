import { Clock, ExternalLink } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { formatTime, formatDuration } from '@/utils/formatters';

/**
 * Upcoming Session Card component with decorative pattern
 * TODO: API Integration - Fetch upcoming session from GET /api/sessions/upcoming
 * TODO: API Integration - Handle Join Class action via POST /api/sessions/:id/join
 */
export default function UpcomingSessionCard({ session, onJoinClass }) {
  if (!session) return null;
  
  return (
    <Card className="p-5 sm:p-6 lg:p-8 bg-gradient-to-br from-[var(--color-primary-50)] to-[var(--color-primary-100)] border-[var(--color-primary-200)] relative overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Decorative Pattern */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 20 L20 0 L40 20 L20 40 Z" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--color-primary-600)]"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>
      
      <div className="relative z-10">
        <div className="flex flex-col gap-4 mb-5 sm:mb-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-[var(--color-primary-700)] font-medium mb-2">Upcoming Session</p>
              <h3 className="text-xl sm:text-2xl font-bold mb-1.5 text-[var(--color-foreground)]">{session.subject}</h3>
              <h4 className="text-base sm:text-lg font-semibold text-[var(--color-foreground)] mb-2">{session.topic}</h4>
              <p className="text-sm text-[var(--color-muted-foreground)]">By {session.tutorName}</p>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[var(--color-primary-700)]">
            <div className="flex items-center gap-1.5 bg-white/50 px-3 py-1.5 rounded-lg">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">{formatTime(session.scheduledTime)}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/50 px-3 py-1.5 rounded-lg">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">{formatDuration(session.duration)}</span>
            </div>
          </div>
        </div>
        
        <Button
          variant="primary"
          size="md"
          onClick={() => onJoinClass(session.id)}
          icon={<ExternalLink className="w-4 h-4" />}
          className="w-full sm:w-auto shadow-md hover:shadow-lg"
        >
          Join Class
        </Button>
      </div>
    </Card>
  );
}