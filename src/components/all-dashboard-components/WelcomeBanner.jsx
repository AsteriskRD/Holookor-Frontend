/**
 * Welcome Banner component
 */
export default function WelcomeBanner({ userName }) {
  return (
    <div className="px-1 py-2">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-[var(--color-foreground)]">
        Welcome back, {userName}! 👋
      </h1>
      <p className="text-sm sm:text-base text-[var(--color-muted-foreground)]">
        Here&apos;s what&apos;s happening with your learning journey today.
      </p>
    </div>
  );
}
