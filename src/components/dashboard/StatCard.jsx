import Card from "../ui/Card";

/**
 * Reusable Statistics Card component
 */
export default function StatCard({
  icon: Icon,
  label,
  value,
  iconColor = "text-[var(--color-primary-500)]",
}) {
  return (
    <div className="bg-white/80 border border-[var(--color-border)] rounded-xl p-3 shadow-sm min-w-[5.5rem]">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-xs text-[var(--color-muted-foreground)] mb-1">
            {label}
          </p>
          <p className="text-lg font-semibold text-[var(--color-foreground)]">
            {value}
          </p>
        </div>
        <div
          className={`p-2 rounded-md bg-white/30 ${iconColor.replace(
            "text-",
            "bg-"
          )}`}
        >
          <Icon className={`w-5 h-5 ${iconColor}`} />
        </div>
      </div>
    </div>
  );
}
