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
    navButton: 'bg-[var(--color-primary-800)] text-white hover:bg-[var(--color-primary-700)] active:bg-[var(--color-primary-800)] focus:ring-[var(--color-primary-500)]'
  };

  const sizes = {
    sm: 'px-1rem py-0.5rem text-sm rounded-lg',
    md: 'px-1.25rem py-0.625rem text-sm sm:text-base rounded-lg',
    lg: 'px-1.5rem py-0.75rem text-base sm:text-lg rounded-xl',
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