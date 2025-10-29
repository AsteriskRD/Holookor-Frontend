/**
 * Reusable Badge component
 */
export default function Badge({ children, variant = 'default', className = '', ...props }) {
  const variants = {
    default: 'bg-[var(--color-neutral-100)] text-[var(--color-foreground)]',
    primary: 'bg-[var(--color-primary-100)] text-[var(--color-primary-700)]',
    success: 'bg-[var(--color-primary-100)] text-[var(--color-primary-700)]',
    warning: 'bg-[var(--color-secondary-100)] text-[var(--color-secondary-700)]',
    error: 'bg-[var(--color-accent-100)] text-[var(--color-accent-700)]',
  };
  
  return (
    <span
      className={`inline-flex items-center px-0.625rem py-0.125rem rounded-full text-xs font-medium ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}