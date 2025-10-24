import Card from '../ui/Card';

/**
 * Reusable Statistics Card component
 */
export default function StatCard({ icon: Icon, label, value, iconColor = 'text-[var(--color-primary-500)]' }) {
  return (
    <Card className="p-4 sm:p-5 lg:p-6 hover:shadow-md transition-all duration-200">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-xs sm:text-sm text-[var(--color-muted-foreground)] mb-1.5 sm:mb-2">{label}</p>
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--color-foreground)] truncate">{value}</p>
        </div>
        <div className={`p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-[var(--color-neutral-50)] ${iconColor} flex-shrink-0`}>
          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
      </div>
    </Card>
  );
}