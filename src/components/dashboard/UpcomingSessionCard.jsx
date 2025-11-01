import { Clock, ExternalLink } from "lucide-react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { formatTime, formatDuration } from "@/utils/formatters";

/**
 * Upcoming Session Card component with decorative pattern
 * TODO: API Integration - Fetch upcoming session from GET /api/sessions/upcoming
 * TODO: API Integration - Handle Join Class action via POST /api/sessions/:id/join
 */
export default function UpcomingSessionCard({ session, onJoinClass }) {
    if (!session) return null;

    return (
        <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border border-green-200 relative overflow-hidden">
            {/* Decorative Pattern */}
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
                <svg
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <pattern
                        id="pattern"
                        x="0"
                        y="0"
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                    >
                        <path
                            d="M0 20 L20 0 L40 20 L20 40 Z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-green-600"
                        />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#pattern)" />
                </svg>
            </div>

            <div className="relative z-10">
                <div className="space-y-4 mb-6">
                    <div>
                        <p className="text-sm text-green-700 font-medium mb-2">
                            Upcoming Session
                        </p>
                        <h3 className="text-2xl font-semibold mb-1 text-gray-900">
                            {session.subject}
                        </h3>
                        <h4 className="text-lg font-medium text-gray-900 mb-2">
                            {session.topic}
                        </h4>
                        <p className="text-sm text-gray-600">
                            By {session.tutorName}
                        </p>
                    </div>

                    <div className="flex gap-4 text-green-700">
                        <div className="flex items-center gap-2 bg-white bg-opacity-50 px-4 py-2 rounded-lg">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm font-medium">
                                {formatTime(session.scheduledTime)}
                            </span>
                        </div>
                        <div className="flex items-center gap-2 bg-white bg-opacity-50 px-4 py-2 rounded-lg">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm font-medium">
                                {formatDuration(session.duration)}
                            </span>
                        </div>
                    </div>
                </div>

                <Button
                    className="flex items-center gap-2 bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 transition-colors"
                    onClick={() => onJoinClass(session.id)}
                >
                    <span>Join Class</span>
                    <ExternalLink className="w-4 h-4" />
                </Button>
            </div>
        </Card>
    );
}
