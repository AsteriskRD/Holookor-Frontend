"use client";

import NavBar from "./navigation/NavBar";
import WelcomeBanner from "./all-dashboard-components/WelcomeBanner";
import StatsGrid from "./all-dashboard-components/StatsGrid";
import UpcomingSessionCard from "./all-dashboard-components/UpcomingSessionCard";
import QuickActionsGrid from "./all-dashboard-components/QuickActionsGrid";
import DailyStreakTracker from "./all-dashboard-components/DailyStreakTracker";
import SessionsList from "./all-dashboard-components/SessionsList";
import PerformanceOverview from "./all-dashboard-components/PerformanceOverview";
import AIRecommendationCard from "./all-dashboard-components/AIRecommendationCard";

/**
 * Main Dashboard component
 * Orchestrates all dashboard sections and handles data flow
 *
 * TODO: API Integration Points:
 * - Replace mock data with actual API calls using hooks from api.js
 * - Implement error handling and loading states
 * - Add real-time updates for notifications and sessions
 */
export default function StudentDashboard({ data }) {
  const {
    user,
    notifications,
    dashboardStats,
    upcomingSession,
    todaySessions,
    weeklyPerformance,
    aiRecommendations,
    dailyStreak,
  } = data;

  // TODO: API Integration - Implement actual join session logic
  const handleJoinClass = (sessionId) => {
    console.log("Joining session:", sessionId);
    // Will call: POST /api/sessions/:id/join
  };

  // TODO: API Integration - Implement book session navigation
  const handleBookSession = () => {
    console.log("Opening book session modal/page");
    // Will navigate to booking page or open modal
  };

  // TODO: API Integration - Implement start quiz logic
  const handleStartQuiz = (quizId) => {
    console.log("Starting quiz:", quizId);
    // Will call: POST /api/quiz/:id/start
  };

  return (
    <div className="min-h-screen">
      <NavBar user={user} notificationCount={notifications.unreadCount} />

      <main className="max-w-screen-xl mx-auto px-2 sm:px-3 lg:px-4 py-6">
        {/* Top header: welcome text on the left, stats on the right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <WelcomeBanner userName={user.name} />
          </div>
          <div className="lg:col-span-4 flex justify-end">
            <div className="w-full max-w-md">
              <StatsGrid stats={dashboardStats} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8">
          <div className="lg:col-span-6">
            <UpcomingSessionCard
              session={upcomingSession}
              onJoinClass={handleJoinClass}
            />
          </div>
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                
                <QuickActionsGrid />
              </div>
              <div>
                <DailyStreakTracker streak={dailyStreak} />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8">
          <div className="lg:col-span-6">
            <SessionsList
              sessions={todaySessions}
              onJoinClass={handleJoinClass}
              onBookSession={handleBookSession}
            />
          </div>
          <div className="lg:col-span-6 space-y-6">
            <PerformanceOverview performances={weeklyPerformance} />
            <AIRecommendationCard
              recommendations={aiRecommendations}
              onStartQuiz={handleStartQuiz}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
