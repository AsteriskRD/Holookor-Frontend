/**
 * Reusable Card component
 */
export default function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`bg-white rounded-xl hover:shadow-md transition-shadow ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
