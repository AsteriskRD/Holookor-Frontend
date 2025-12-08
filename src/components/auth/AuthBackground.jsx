/**
 * AuthBackground Component - Shared background for all auth pages
 * Shows educational pattern with math formulas, atoms, books, etc.
 */
export default function AuthBackground() {
  return (
    <div className=" min-h-screen absolute inset-0 overflow-hidden pointer-events-none">
      {/* Background Image - Educational pattern */}
      <img
        src="/auth-background.png"
        alt="Educational background"
        className="absolute inset-0 w-full h-full object-cover"
      />

    
    </div>
  );
}
