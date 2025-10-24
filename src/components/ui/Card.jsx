/**
 * Reusable Card component
 */
export default function Card({ children, className = '', ...props }) {
  return (
    <div
      className={`bg-white rounded-xl sm:rounded-2xl border border-[var(--color-border)] shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}