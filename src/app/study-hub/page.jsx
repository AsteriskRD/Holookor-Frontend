import NavBar from "@/components/navigation/NavBar";
import PerformanceOverview from "@/components/progress/PerformanceOverview";
import SubjectPerformance from "@/components/progress/SubjectPerformance";
import ActivityLog from "@/components/progress/ActivityLog";
import { mockProgressData } from "@/data/progressMockData";

export const metadata = {
  title: "StudyHub - Holookor",
};

export default function StudyHub() {
  // TODO: Replace mockProgressData with API call (e.g., fetch('/api/progress'))
  const data = mockProgressData;

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <NavBar
        user={data.user}
        notificationCount={data.notifications.unreadCount}
      />

      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header / KPIs */}
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-[var(--color-foreground)]">
            Study Hub Page
          </h1>
          <p className="text-sm text-[var(--color-muted-foreground)] mt-1">
            Still in progress.
          </p>

          </header>
      </main>
    </div>
  );
}
