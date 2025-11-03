"use client";

export default function SubAffiliateReportPage() {
  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-border bg-card p-4">
        <h2 className="text-lg font-semibold mb-3">Sub Affiliate Report</h2>

        <div className="grid md:grid-cols-5 gap-3">
          <input type="date" defaultValue="2025-10-01" className="rounded-lg border border-border bg-background px-3 py-2" />
          <input type="date" defaultValue="2025-10-31" className="rounded-lg border border-border bg-background px-3 py-2" />
          <input placeholder="Login" className="rounded-lg border border-border bg-background px-3 py-2 md:col-span-2" />
          <div className="flex gap-2">
            <button className="rounded-lg border border-border px-4 py-2 text-sm">SEARCH</button>
            <button className="rounded-lg bg-brand-500 px-4 py-2 text-black text-sm">EXPORT</button>
          </div>
        </div>

        <div className="mt-4 overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-foreground/5">
              <tr>
                <th className="px-3 py-2 text-left">Master Affiliate</th>
                <th className="px-3 py-2 text-left">Group</th>
                <th className="px-3 py-2 text-left">Sub Affiliate</th>
                <th className="px-3 py-2 text-left">Currency</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-border/60">
                <td colSpan={4} className="px-3 py-6 text-center text-foreground/50">No transaction yet</td>
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
