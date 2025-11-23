import Card from "../ui/Card";

import Badge from "../ui/Badge";
import Button from "../ui/Button";

/**
 * AI Recommendation Card component
 * TODO: API Integration - Fetch AI recommendations from GET /api/recommendations/ai
 * TODO: API Integration - Handle Start Quiz action via POST /api/quiz/:id/start
 */
export default function AIRecommendationCard({ recommendations, onStartQuiz }) {
  return (
    <Card className="p-5 sm:p-6  transition-all duration-200">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5 sm:mb-6">
        <div className="flex-1">
          <h3 className="text-base sm:text-lg font-bold mb-1.5 text-[var(--color-foreground)]">
            AI Recommendations
          </h3>
          <p className="text-xs sm:text-sm text-[var(--color-muted-foreground)]">
            Activities suggested based on your work
          </p>
        </div>
        <button className="text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)] text-xs sm:text-sm font-semibold hover:bg-[var(--color-primary-50)] px-0.75rem py-0.375rem rounded-lg transition-all duration-200 self-start">
          See More
        </button>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {recommendations.map((rec) => (
          <div
            key={rec.id}
            className="p-4 sm:p-5 bg-gradient-to-br from-[var(--color-neutral-50)] to-white rounded-xl border bg-[#F3F4F6] "
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <h4 className="text-sm sm:text-base font-bold text-[var(--color-foreground)] flex-1">
                {rec.title}
              </h4>
              <Badge variant="default" className="flex-shrink-0">
                {rec.difficulty}
              </Badge>
            </div>
            <p className="text-xs sm:text-sm text-[var(--color-muted-foreground)] mb-4 leading-relaxed">
              {rec.description}
            </p>
            <Button
              variant="primary"
              size="md"
              onClick={() => onStartQuiz(rec.id)}
              className="w-full shadow-sm  hover:bg-green-800 py-2"
            >
              Start Quiz
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
}
