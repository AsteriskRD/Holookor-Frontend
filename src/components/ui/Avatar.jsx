import Image from 'next/image';

/**
 * Reusable Avatar component
 */
export default function Avatar({ src, alt, size = 'md', className = '' }) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };
  
  return (
    <div className={`relative ${sizes[size]} rounded-full overflow-hidden bg-[var(--color-neutral-200)] ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt || 'Avatar'}
          fill
          className="object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-[var(--color-muted-foreground)]">
          {alt?.[0]?.toUpperCase() || 'U'}
        </div>
      )}
    </div>
  );
}