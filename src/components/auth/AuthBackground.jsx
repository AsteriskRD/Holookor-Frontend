/**
 * AuthBackground Component - Shared background for all auth pages
 * Shows educational pattern with math formulas, atoms, books, etc.
 */
export default function AuthBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Background Image - Educational pattern */}
      <img
        src="/auth-background.svg"
        alt="Educational background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* White overlay/shadow effect over the pattern */}
      <div className="absolute inset-0 bg-white opacity-[0.88]"></div>
    </div>
  );
}
