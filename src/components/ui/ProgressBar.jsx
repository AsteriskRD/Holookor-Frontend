/**
 * Reusable ProgressBar component
 */
export default function ProgressBar({ value, max = 100, color = 'primary', gradient, className = '' }) {
  const percentage = Math.min((value / max) * 100, 100);
  
  const colors = {
    primary: 'bg-[var(--color-primary-500)]',
    success: 'bg-[var(--color-success)]',
    warning: 'bg-[var(--color-warning)]',
    error: 'bg-[var(--color-error)]',
    orange: 'bg-orange-500',
    yellow: 'bg-yellow-500',
    olive: 'bg-lime-600',
  };

   // Gradient color options
  const gradients = {
    orangeToGreen: "bg-gradient-to-r from-orange-400 via-lime-400 to-green-500",
    blueToCyan: "bg-gradient-to-r from-blue-500 to-cyan-400",
    redToYellow: "bg-gradient-to-r from-red-500 to-yellow-400",
    limeToEmerald: "bg-gradient-to-r from-lime-400 to-emerald-500",
  };
  
  return (
    <div
      className={`w-full bg-[var(--color-neutral-200)] rounded-full overflow-hidden ${className}`}
    >
      <div
        className={`h-full ${
          gradients ? gradients[gradient] : colors[color]
        } transition-all duration-500 ease-out rounded-full shadow-sm`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );

}