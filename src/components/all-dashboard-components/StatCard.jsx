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
    <div className="border-[var(--color-border)]  sm:p-2  lg:mx-3 rounded-md">
      <div className="flex sm:flex-row flex-col items-center sm:items-start ">
        <div className="flex-1 text-center sm:text-left">
          <p className=" sm:text-md md:text-xl text-center font-semibold text-[var(--color-foreground)]">
            {value}
          </p>
          <p className="text-xs sm:text-sm text-[var(--color-muted-foreground)] mb-1">
            {label}
          </p>
        </div>
        <span>
          <Icon className={` w-3 h-3 sm:w-4 sm:h-4 ${iconColor}`} />
        </span>
      </div>
    </div>
  );
}
