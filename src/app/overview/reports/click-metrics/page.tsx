"use client";

export default function ClickMetricsPage() {
  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-border bg-card p-4">
        <h2 className="text-lg font-semibold mb-3">Click Metrics</h2>

        <div className="grid md:grid-cols-4 gap-3">
          <div className="md:col-span-2 grid grid-cols-2 gap-3">
            <input type="date" defaultValue="2025-10-24" className="rounded-lg border border-border bg-background px-3 py-2" />
            <input type="date" defaultValue="2025-10-31" className="rounded-lg border border-border bg-background px-3 py-2" />
          </div>
          <div className="md:col-span-2">
            <button className="rounded-lg border border-border px-4 py-2 text-sm">SEARCH</button>
          </div>
        </div>

        <div className="mt-4 overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-foreground/5">
              <tr>
                <th className="px-3 py-2 text-left">Country</th>
                <th className="px-3 py-2 text-left">Number of Current Clicks</th>
                <th className="px-3 py-2 text-left">Number of Unique Clicks</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-border/60">
                <td colSpan={3} className="px-3 py-6 text-center text-foreground/50">No transaction yet</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-2 flex justify-center gap-1 text-sm">
          <button className="px-2 py-1 rounded border border-border">«</button>
          <button className="px-2 py-1 rounded border border-border">‹</button>
          <button className="px-3 py-1 rounded bg-brand-500 text-black">1</button>
          <button className="px-2 py-1 rounded border border-border">›</button>
          <button className="px-2 py-1 rounded border border-border">»</button>
        </div>
      </div>
    </div>
  );
}
