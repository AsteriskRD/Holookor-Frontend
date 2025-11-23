"use client";

/**
 * ActivityLog — renders a responsive table of activity rows.
 * Responsibility: present activity rows. Hook up to API in the future.
 */
export default function ActivityLog({ rows = [] }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-[var(--color-foreground)] mb-4">
        Activity Log
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full text-left table-auto border-collapse">
          <thead>
            <tr className="text-sm text-[var(--color-muted-foreground)]">
              <th className="py-2 px-3">Date</th>
              <th className="py-2 px-3">Subject</th>
              <th className="py-2 px-3">Topic</th>
              <th className="py-2 px-3">Score</th>
              <th className="py-2 px-3">Duration</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr
                key={i}
                className={`${i % 2 === 0 ? "bg-white" : "bg-[#fbfbfb]"}`}
              >
                <td className="py-3 px-3 text-sm text-[var(--color-muted-foreground)]">
                  {r.date}
                </td>
                <td className="py-3 px-3 text-sm">{r.subject}</td>
                <td className="py-3 px-3 text-sm text-[var(--color-muted-foreground)]">
                  {r.topic}
                </td>
                <td className="py-3 px-3 text-sm">{r.score}</td>
                <td className="py-3 px-3 text-sm text-[var(--color-muted-foreground)]">
                  {r.duration}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
