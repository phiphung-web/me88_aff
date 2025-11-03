"use client";

export default function CurrentMonthCommissionPage() {
  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-border bg-card p-4">
        <h2 className="text-lg font-semibold mb-3">Current Month Commission</h2>

        <div className="text-sm text-foreground/70 space-y-1 mb-3">
          <div>Login : Ftestaff</div>
          <div>Group : 0.3% Turnover</div>
          <div className="flex items-center gap-2 mt-2">
            <span className="inline-block h-4 w-4 rounded-full bg-brand-500/20 border border-brand-500"></span>
            <span>Last update : None</span>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-foreground/5">
              <tr>
                <th className="px-3 py-2 text-left">Date Start</th>
                <th className="px-3 py-2 text-left">Date End</th>
                <th className="px-3 py-2 text-left">Commission Rate</th>
                <th className="px-3 py-2 text-left">Company win/loss</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-border/60">
                <td className="px-3 py-2">2025-10-01</td>
                <td className="px-3 py-2">2025-10-31</td>
                <td className="px-3 py-2">0.00%</td>
                <td className="px-3 py-2">0.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
