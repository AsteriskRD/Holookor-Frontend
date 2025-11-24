import { Calendar, Clock, Trophy, Award } from "lucide-react";
import StatCard from "./StatCard";

/**
 * Statistics Grid component
 * TODO: API Integration - Fetch dashboard stats from GET /api/dashboard/stats
 */
export default function StatsGrid({ stats }) {
  return (
    // Responsive stats: two-per-row on very small, three on small, single-row (no-wrap) on md+
    // <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-4 py-4">
    //   <div className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-auto px-2">
    //     <StatCard
    //       icon={Calendar}
    //       label="Total Sessions"
    //       value={stats.totalSessions}
    //       iconColor="text-blue-500"
    //     />
    //   </div>

    //   <div className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-auto px-2">
    //     <StatCard
    //       icon={Clock}
    //       label="Hours Learned"
    //       value={stats.hoursLearned}
    //       iconColor="text-purple-500"
    //     />
    //   </div>

    //   <div className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-auto px-2">
    //     <StatCard
    //       icon={Trophy}
    //       label="Average Score"
    //       value={`${stats.averageScore}%`}
    //       iconColor="text-green-500"
    //     />
    //   </div>

    //   <div className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-auto px-2">
    //     <StatCard
    //       icon={Award}
    //       label="Certificates"
    //       value={stats.certificates}
    //       iconColor="text-orange-500"
    //     />
    //   </div>
    // </div>
<div className="flex items-center justify-between gap-4 px-2 py-4  md:flex-nowrap  ">
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
    iconColor="text-yellow-600"
  />

  <StatCard
    icon={Trophy}
    label="Average Score"
    value={`${stats.averageScore}%`}
    iconColor="text-green-600"
  />

  <StatCard
    icon={Award}
    label="Daily Streak"
    value={stats.certificates}
    iconColor="text-pink-500"
  />
</div>


  );
}
