"use client";
import { useState } from "react";

const months = [
  "2025-09-01", "2025-08-31", "2025-07-31", "2025-06-30", "2025-05-31",
  "2025-04-30", "2025-03-31", "2025-02-28", "2025-01-31",
];

export default function MonthlyCommissionPage() {
  const [tab, setTab] = useState<"all" | "this" | "last" | "six">("all");

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-border bg-card p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Monthly Commission</h2>
          <input type="month" defaultValue="2025-10" className="rounded-lg border border-border bg-background px-3 py-2" />
        </div>

        <div className="mt-3 flex gap-2 text-sm">
          <button onClick={() => setTab("all")}  className={`rounded-lg px-3 py-2 ${tab==="all"  ? "bg-brand-500 text-black":"border border-border"}`}>All</button>
          <button onClick={() => setTab("this")} className={`rounded-lg px-3 py-2 ${tab==="this" ? "bg-brand-500 text-black":"border border-border"}`}>This Month</button>
          <button onClick={() => setTab("last")} className={`rounded-lg px-3 py-2 ${tab==="last" ? "bg-brand-500 text-black":"border border-border"}`}>Last Month</button>
          <button onClick={() => setTab("six")}  className={`rounded-lg px-3 py-2 ${tab==="six"  ? "bg-brand-500 text-black":"border border-border"}`}>6 Months</button>
        </div>

        <div className="mt-4 overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-foreground/5">
              <tr>
                <th className="px-3 py-2 text-left">Comm. Month</th>
                <th className="px-3 py-2 text-left">Currency</th>
                <th className="px-3 py-2 text-left">Active Member</th>
                <th className="px-3 py-2 text-left">Win / Loss</th>
              </tr>
            </thead>
            <tbody>
              {months.map((m) => (
                <tr key={m} className="border-t border-border/60">
                  <td className="px-3 py-2">
                    <div>{m}</div>
                  </td>
                  <td className="px-3 py-2">MYR</td>
                  <td className="px-3 py-2">0</td>
                  <td className="px-3 py-2">-</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
