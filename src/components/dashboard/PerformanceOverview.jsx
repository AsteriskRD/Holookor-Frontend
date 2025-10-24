import { BarChart2 } from 'lucide-react';
import Card from '../ui/Card';
import PerformanceCard from './PerformanceCard';

/**
 * Performance Overview component
 * TODO: API Integration - Fetch weekly performance from GET /api/performance/weekly
 */
export default function PerformanceOverview({ performances }) {
  return (
    <Card className="p-5 sm:p-6 hover:shadow-md transition-all duration-200">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5 sm:mb-6">
        <div className="flex-1">
          <h3 className="text-base sm:text-lg font-bold mb-1.5 text-[var(--color-foreground)]">Performance Overview</h3>
          <p className="text-xs sm:text-sm text-[var(--color-muted-foreground)]">Track your progress across subjects</p>
        </div>
        <button className="flex items-center gap-1.5 text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)] text-xs sm:text-sm font-semibold hover:bg-[var(--color-primary-50)] px-3 py-1.5 rounded-lg transition-all duration-200 self-start">
          <BarChart2 className="w-4 h-4" />
          View Analysis
        </button>
      </div>
      
      <div>
        <h4 className="text-sm font-semibold text-[var(--color-muted-foreground)] mb-4 px-1">This Week</h4>
        <div className="space-y-4 sm:space-y-5">
          {performances.map((performance) => (
            <PerformanceCard key={performance.subject} performance={performance} />
          ))}
        </div>
      </div>
    </Card>
  );
}