'use client';

import NavBar from './navigation/NavBar';
import WelcomeBanner from './dashboard/WelcomeBanner';
import StatsGrid from './dashboard/StatsGrid';
import UpcomingSessionCard from './dashboard/UpcomingSessionCard';
import QuickActionsGrid from './dashboard/QuickActionsGrid';
import DailyStreakTracker from './dashboard/DailyStreakTracker';
import SessionsList from './dashboard/SessionsList';
import PerformanceOverview from './dashboard/PerformanceOverview';
import AIRecommendationCard from './dashboard/AIRecommendationCard';

/**
 * Main Dashboard component
 * Orchestrates all dashboard sections and handles data flow
 * 
 * TODO: API Integration Points:
 * - Replace mock data with actual API calls using hooks from api.js
 * - Implement error handling and loading states
 * - Add real-time updates for notifications and sessions
 */
export default function Dashboard({ data }) {
  const { user, notifications, dashboardStats, upcomingSession, todaySessions, weeklyPerformance, aiRecommendations, dailyStreak } = data;
  
  // TODO: API Integration - Implement actual join session logic
  const handleJoinClass = (sessionId) => {
    console.log('Joining session:', sessionId);
    // Will call: POST /api/sessions/:id/join
  };
  
  // TODO: API Integration - Implement book session navigation
  const handleBookSession = () => {
    console.log('Opening book session modal/page');
    // Will navigate to booking page or open modal
  };
  
  // TODO: API Integration - Implement start quiz logic
  const handleStartQuiz = (quizId) => {
    console.log('Starting quiz:', quizId);
    // Will call: POST /api/quiz/:id/start
  };
  
  return (
    <div className="min-h-screen bg-[var(--color-neutral-50)] flex flex-col">
      <NavBar user={user} notificationCount={notifications.unreadCount} />
      
      <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 lg:py-10 overflow-y-auto">
        <div className="max-w-[1600px] mx-auto">
          <WelcomeBanner userName={user.name} />
          
          <StatsGrid stats={dashboardStats} />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="lg:col-span-8">
              <UpcomingSessionCard session={upcomingSession} onJoinClass={handleJoinClass} />
            </div>
            <div className="lg:col-span-4 space-y-4 sm:space-y-6">
              <div>
                <h3 className="heading-sm mb-3 sm:mb-4 px-1">Quick Actions</h3>
                <QuickActionsGrid />
              </div>
              <DailyStreakTracker streak={dailyStreak} />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 pb-6">
            <div className="lg:col-span-8">
              <SessionsList
                sessions={todaySessions}
                onJoinClass={handleJoinClass}
                onBookSession={handleBookSession}
              />
            </div>
            <div className="lg:col-span-4 space-y-4 sm:space-y-6">
              <PerformanceOverview performances={weeklyPerformance} />
              <AIRecommendationCard
                recommendations={aiRecommendations}
                onStartQuiz={handleStartQuiz}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}