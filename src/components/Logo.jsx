/**
 * Holookor Logo component
 */
export default function Logo({ className = '' }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-8 h-8 bg-[var(--color-primary-500)] rounded-lg flex items-center justify-center">
        <svg width="1.25rem" height="1.25rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
          <circle cx="12" cy="12" r="3" fill="white"/>
        </svg>
      </div>
      <span className="text-xl font-bold text-[var(--color-foreground)]">HOLOOKOR</span>
    </div>
  );
}