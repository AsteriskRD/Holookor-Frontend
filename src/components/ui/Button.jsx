/**
 * Reusable Button component with variants
 */
export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon,
  onClick,
  className = '',
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-[var(--color-primary-600)] text-white hover:bg-[var(--color-primary-700)] active:bg-[var(--color-primary-800)] focus:ring-[var(--color-primary-500)]',
    secondary: 'bg-[var(--color-neutral-100)] text-[var(--color-foreground)] hover:bg-[var(--color-neutral-200)] active:bg-[var(--color-neutral-300)] focus:ring-[var(--color-neutral-400)]',
    outline: 'border-2 border-[var(--color-border)] bg-transparent hover:bg-[var(--color-neutral-50)] active:bg-[var(--color-neutral-100)] focus:ring-[var(--color-neutral-400)]',
    ghost: 'bg-transparent hover:bg-[var(--color-neutral-100)] active:bg-[var(--color-neutral-200)] focus:ring-[var(--color-neutral-400)]',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-5 py-2.5 text-sm sm:text-base rounded-lg',
    lg: 'px-6 py-3 text-base sm:text-lg rounded-xl',
  };
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
      {icon && <span className="flex-shrink-0">{icon}</span>}
    </button>
  );
}