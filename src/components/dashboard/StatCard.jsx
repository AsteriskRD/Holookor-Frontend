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
    <div className="border-[var(--color-border)] p-3 mx-auto w-full sm:w-auto min-w-[5.5rem]">
      <div className="flex sm:flex-row flex-col items-start justify-between gap-3">
        <div className="flex-1 gap-4 px-2">
          <p className="text-lg font-semibold text-[var(--color-foreground)]">
            {value}
          </p>
          <p className="text-xs text-[var(--color-muted-foreground)] mb-1">
            {label}
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
