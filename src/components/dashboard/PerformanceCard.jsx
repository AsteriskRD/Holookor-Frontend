import { TrendingUp } from "lucide-react";
import ProgressBar from "../ui/ProgressBar";
import { formatPercentage, formatPercentageChange } from "@/utils/formatters";

/**
 * Performance Card component for individual subject
 */
export default function PerformanceCard({ performance }) {
  const colorMap = {
    Mathematics: "orange",
    Physics: "olive",
    Chemistry: "orange",
    Biology: "olive",
  };

  return (
    <div className="space-y-2.5 sm:space-y-3">
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm sm:text-base font-semibold text-[var(--color-foreground)] truncate">
          {performance.subject}
        </span>
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <span className="text-xs sm:text-sm text-[var(--color-success)] flex items-center gap-1 font-medium bg-green-50 px-0.5rem py-0.125rem rounded-md">
            <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            {formatPercentageChange(performance.change, performance.trend)}
          </span>
          <span className="text-sm sm:text-base font-bold text-[var(--color-foreground)]">
            {formatPercentage(performance.percentage)}
          </span>
        </div>
      </div>
      <ProgressBar
        value={performance.percentage}
        max={100}
        color={colorMap[performance.subject] || "primary"}
        className="h-2.5 sm:h-3"
      />
    </div>
  );
}
