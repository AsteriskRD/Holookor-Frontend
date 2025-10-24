import { Users, Book, FileText, Award } from 'lucide-react';
import Button from '../ui/Button';

/**
 * Quick Actions Grid component
 * TODO: API Integration - Connect action buttons to respective pages/modals
 */
export default function QuickActionsGrid() {
  const actions = [
    { label: 'Find Tutors', icon: Users, color: 'bg-blue-50 text-blue-600 hover:bg-blue-100 hover:shadow-sm' },
    { label: 'Materials', icon: Book, color: 'bg-purple-50 text-purple-600 hover:bg-purple-100 hover:shadow-sm' },
    { label: 'Assignment', icon: FileText, color: 'bg-orange-50 text-orange-600 hover:bg-orange-100 hover:shadow-sm' },
    { label: 'Certificates', icon: Award, color: 'bg-green-50 text-green-600 hover:bg-green-100 hover:shadow-sm' },
  ];
  
  return (
    <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
      {actions.map((action) => (
        <Button
          key={action.label}
          variant="ghost"
          className={`flex-col h-24 sm:h-28 lg:h-32 ${action.color} border border-transparent rounded-xl transition-all duration-200`}
        >
          <action.icon className="w-6 h-6 sm:w-7 sm:h-7 mb-2" />
          <span className="text-xs sm:text-sm font-semibold">{action.label}</span>
        </Button>
      ))}
    </div>
  );
}