import NavBar from "@/components/navigation/NavBar";
import PerformanceOverview from "@/components/progress/PerformanceOverview";
import SubjectPerformance from "@/components/progress/SubjectPerformance";
import ActivityLog from "@/components/progress/ActivityLog";
import { mockProgressData } from "@/data/progressMockData";

export const metadata = {
  title: "Progress - Holookor",
};

export default function ProgressPage() {
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
            Progress Report
          </h1>
          <p className="text-sm text-[var(--color-muted-foreground)] mt-1">
            See your learning progress so far.
          </p>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {data.kpis.map((k) => (
              <div
                key={k.id}
                className="bg-white p-4 rounded-lg border #f3f4f6 flex flex-col"
              >
                <div className="text-sm text-[var(--color-muted-foreground)]">
                  {k.label}
                </div>
                <div className="text-xl font-bold text-[var(--color-foreground)] mt-2">
                  {k.value}
                </div>
              </div>
            ))}
          </div>
        </header>

        {/* Main grid: Performance chart (left) + Subject performance (right) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-6">
            <div className="bg-white rounded-xl border #f3f4f6 p-6">
              <PerformanceOverview data={data.performance} />
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white rounded-xl border #f3f4f6 p-6">
              <SubjectPerformance items={data.subjects} />
            </div>
          </div>
        </section>

        {/* Activity log */}
        <section className="mt-6">
          <div className="bg-white rounded-xl border #f3f4f6 p-6">
            <ActivityLog rows={data.activity} />
          </div>
        </section>
      </main>
    </div>
  );
}
