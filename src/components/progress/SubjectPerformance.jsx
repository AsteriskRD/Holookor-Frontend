"use client";

/**
 * SubjectPerformance — simple list of subject cards showing average
 * Responsibility: render subject items. Data should come from an API.
 */
export default function SubjectPerformance({ items = [] }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-[var(--color-foreground)] mb-4">Subject Performance</h3>
      <div className="space-y-3">
        {items.map((s, idx) => (
          <div key={idx} className="p-3 rounded-md bg-[#f8faf7]">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-[var(--color-foreground)]">{s.subject}</div>
                <div className="text-sm text-[var(--color-muted-foreground)]">{s.detail}</div>
              </div>
              <div className="text-green-600 font-semibold">{s.average}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
