/**
 * Reusable ProgressBar component
 */
export default function ProgressBar({ value, max = 100, color = 'primary', gradient, className = '' }) {
  const percentage = Math.min((value / max) * 100, 100);
  
  const colors = {
    primary: 'bg-[var(--color-primary-500)]',
    success: 'bg-[var(--color-success)]',
    
  };

 
  
  return (
    <div
      className={`w-full bg-[var(--color-neutral-200)] rounded-full overflow-hidden ${className}`}
    >
      <div
        className={`h-full ${
          colors[color]
        } transition-all duration-500 ease-out rounded-full shadow-sm`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );

}