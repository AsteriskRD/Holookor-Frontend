"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

/**
 * PerformanceOverview — client component that renders a bar chart.
 * Responsibility: render a chart given `data` prop. API integration should provide the data.
 */
export default function PerformanceOverview({ data = [] }) {
  // data: [{ label: 'Test', value: 80 }, ...]
  return (
    <div>
      <h3 className="text-lg font-semibold text-[var(--color-foreground)] mb-4">
        Performance Overview
      </h3>
      <div style={{ width: "100%", height: 320 }}>
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{ top: 20, right: 16, left: 0, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f3f3f3" />
            <XAxis dataKey="label" tick={{ fill: "#6b7280" }} />
            <YAxis tick={{ fill: "#6b7280" }} />
            <Tooltip />
            <Bar dataKey="value" fill="#22c55e" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
