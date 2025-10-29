/**
 * Reusable Card component
 */
export default function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`bg-white rounded-xl border border-[#E5E5E5] shadow-sm hover:shadow-md transition-shadow ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
