
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Dashboard from '@/components/StudentDashboard';
import { mockStore, mockQuery } from '@/data/dashboardMockData';

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/login"); // redirect to login if not logged in
    }
  }, []);

  const dashboardData = {
    user: mockStore.user,
    notifications: mockStore.notifications,
    dashboardStats: mockQuery.dashboardStats,
    upcomingSession: mockQuery.upcomingSession,
    todaySessions: mockQuery.todaySessions,
    weeklyPerformance: mockQuery.weeklyPerformance,
    aiRecommendations: mockQuery.aiRecommendations,
    dailyStreak: mockQuery.dailyStreak,
  };

  return (
    <div className='bg-[#ffffff]'>
      <Dashboard data={dashboardData} />
    </div>
  );
}
