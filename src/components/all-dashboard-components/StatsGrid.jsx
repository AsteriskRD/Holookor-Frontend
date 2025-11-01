import { Calendar, Clock, Trophy, Award } from "lucide-react";
import StatCard from "./StatCard";

/**
 * Statistics Grid component
 * TODO: API Integration - Fetch dashboard stats from GET /api/dashboard/stats
 */
export default function StatsGrid({ stats }) {
  return (
    <div className="flex items-center justify-end gap-4">
      <StatCard
        icon={Calendar}
        label="Total Sessions"
        value={stats.totalSessions}
        iconColor="text-blue-500"
      />
      <StatCard
        icon={Clock}
        label="Hours Learned"
        value={stats.hoursLearned}
        iconColor="text-purple-500"
      />
      <StatCard
        icon={Trophy}
        label="Average Score"
        value={`${stats.averageScore}%`}
        iconColor="text-green-500"
      />
      <StatCard
        icon={Award}
        label="Certificates"
        value={stats.certificates}
        iconColor="text-orange-500"
      />
    </div>
  );
}
