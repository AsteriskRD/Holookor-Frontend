import { Users, Book, FileText, Award } from "lucide-react";
import Button from "../ui/Button";

/**
 * Quick Actions Grid component
 * TODO: API Integration - Connect action buttons to respective pages/modals
 */
export default function QuickActionsGrid() {
  const actions = [
    {
      label: "Find Tutors",
      icon: Users,
      color: "bg-blue-50 text-blue-600 hover:bg-blue-100 hover:shadow-sm",
    },
    {
      label: "Materials",
      icon: Book,
      color: "bg-purple-50 text-purple-600 hover:bg-purple-100 hover:shadow-sm",
    },
    {
      label: "Assignment",
      icon: FileText,
      color: "bg-orange-50 text-orange-600 hover:bg-orange-100 hover:shadow-sm",
    },
    {
      label: "Certificates",
      icon: Award,
      color: "bg-green-50 text-green-600 hover:bg-green-100 hover:shadow-sm",
    },
  ];

  return (
    <>
      <div className=" bg-[var(--color-card)] p-4 rounded-lg">
        <span className="text-lg ml-4 font-semibold mb-4 text-[var(--color-foreground)]">
          Quick Actions
        </span>
        <div className="grid grid-cols-2 gap-4 bg-[var(--color-card)] p-4 rounded-lg">
          {actions.map((action) => (
            <Button
              key={action.label}
              variant="ghost"
              className={`flex-col h-28 bg-[#F9FAFB] ${action.color} border-none rounded-xl transition-all duration-200`}
            >
              <action.icon className="w-6 h-6 mb-3" />
              <span className="text-sm font-medium">{action.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </>
  );
}
