import { Clock, ExternalLink } from 'lucide-react';
import Button from '../ui/Button';
import { formatTime, formatDuration } from '@/utils/formatters';

/**
 * Session List Item component
 */
export default function SessionListItem({ session, onJoinClass }) {
  const subjectColors = {
    Mathematics: 'bg-blue-50 text-blue-700 border-blue-200',
    Chemistry: 'bg-purple-50 text-purple-700 border-purple-200',
    Physics: 'bg-orange-50 text-orange-700 border-orange-200',
    Biology: 'bg-green-50 text-green-700 border-green-200',
  };
  
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between p-4 sm:p-5 hover:bg-[var(--color-neutral-50)] rounded-xl transition-all duration-200 gap-4 border border-transparent hover:border-[var(--color-border)]">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 flex-1 min-w-0">
        <div className={`px-3 py-1.5 rounded-lg border self-start flex-shrink-0 ${subjectColors[session.subject] || 'bg-gray-50 text-gray-700 border-gray-200'}`}>
          <span className="text-xs sm:text-sm font-semibold">{session.subject}</span>
        </div>
        
        <div className="flex-1 min-w-0">
          <p className="text-sm sm:text-base font-semibold mb-1 text-[var(--color-foreground)]">{session.tutorName}</p>
          <p className="text-xs sm:text-sm text-[var(--color-muted-foreground)] truncate">{session.topic}</p>
        </div>
        
        <div className="flex items-center gap-3 sm:gap-4 text-[var(--color-muted-foreground)] flex-shrink-0">
          <div className="flex items-center gap-1.5 bg-[var(--color-neutral-100)] px-2.5 py-1 rounded-lg">
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm font-medium">{formatTime(session.scheduledTime)}</span>
          </div>
          <span className="text-xs sm:text-sm font-medium bg-[var(--color-neutral-100)] px-2.5 py-1 rounded-lg">{formatDuration(session.duration)}</span>
        </div>
      </div>
      
      <Button
        variant="primary"
        size="sm"
        onClick={() => onJoinClass(session.id)}
        icon={<ExternalLink className="w-4 h-4" />}
        className="w-full sm:w-auto lg:w-auto flex-shrink-0"
      >
        Join Class
      </Button>
    </div>
  );
}