import Dashboard from '@/components/Dashboard';
import { mockStore, mockQuery } from '@/data/dashboardMockData';

/**
 * Home page - Dashboard
 * TODO: API Integration - Replace mock data with server-side data fetching or client-side hooks
 */
export default function Home() {
  // Combine all mock data for the dashboard
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
  
  return <div className='bg-[#f3fff1]'>
    <Dashboard data={dashboardData} />
  </div>
}