"use client";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = Array.from({ length: 28 }).map((_, i) => ({
  day: i + 1,
  value: Math.max(0, 5 + Math.sin(i / 3) * 2 + (Math.random() - 0.5)),
}));

export default function SimpleLineChart() {
  return (
    <div className="h-56 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#ff6a00" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
