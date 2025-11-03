"use client";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const gen = (n = 30) =>
  Array.from({ length: n }).map((_, i) => ({
    x: i + 1,
    y: Math.max(0, 5 + Math.sin(i / 3) * 2 + (Math.random() - 0.5)),
  }));

export default function SimpleAreaChart({ data = gen() }: { data?: { x: number; y: number }[] }) {
  return (
    <div className="h-56 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <XAxis dataKey="x" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="y" stroke="#ff6a00" fill="currentColor" className="text-brand-500/20" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
