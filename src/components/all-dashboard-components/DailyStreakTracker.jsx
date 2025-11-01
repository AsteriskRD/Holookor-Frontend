import { Flame, CheckCircle } from 'lucide-react';
import Card from '../ui/Card';

/**
 * Daily Streak Tracker component
 * TODO: API Integration - Fetch streak data from GET /api/user/streak
 */
export default function DailyStreakTracker({ streak }) {
  return (
    <Card className="p-5  sm:p-6 hover:shadow-md transition-all duration-200">
      <h3 className="text-base sm:text-lg font-semibold mb-4 text-[var(--color-foreground)]">Daily Streak</h3>
      
      <div className="flex items-center gap-3 sm:gap-4 mb-5">
        <div className="p-3 sm:p-3.5 bg-orange-50 rounded-xl flex-shrink-0">
          <Flame className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-2xl sm:text-3xl font-bold text-orange-500 leading-tight">{streak.currentStreak} Days</p>
          <p className="text-xs sm:text-sm text-[var(--color-muted-foreground)] mt-0.5">Keep it up! You are on fire!</p>
        </div>
      </div>
      
      <div className="flex items-center gap-1.5 sm:gap-2">
        {streak.streakDays.map((day, index) => (
          <div
            key={index}
            className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
              day ? 'bg-[var(--color-primary-500)] shadow-sm' : 'bg-[var(--color-neutral-200)]'
            }`}
          >
            {day && <CheckCircle className="w-5 h-5 sm:w-5 sm:h-5 text-white" />}
          </div>
        ))}
      </div>
    </Card>
  );
}