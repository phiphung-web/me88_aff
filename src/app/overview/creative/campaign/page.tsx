"use client";
import { useState } from "react";

type Row = { id: string; name: string; url: string; status?: string; type?: string };
const rows: Row[] = [
  { id: "6690", name: "csdcsd", url: "https://seed-cuz7.zuperswan.net/?affId=8341&afmcp=camp83410", status: "Active", type: "Default" },
];

function Tab({ value, active, onClick }: { value: string; active: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} className={`px-4 py-2 rounded-lg text-sm ${active ? "bg-brand-500 text-black" : "border border-border"}`}>
      {value}
    </button>
  );
}

export default function CreativeCampaignPage() {
  const [tab, setTab] = useState<"create" | "reports">("create");

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex gap-2">
        <Tab value="Campaign Create" active={tab === "create"} onClick={() => setTab("create")} />
        <Tab value="Campaign Reports" active={tab === "reports"} onClick={() => setTab("reports")} />
      </div>

      {/* Create */}
      {tab === "create" && (
        <div className="rounded-xl border border-border bg-card p-4 space-y-4">
          <div className="text-sm text-foreground/70">Campaign list <b>352533 (Affiliate ID)</b></div>

          <div className="grid md:grid-cols-4 gap-3">
            <input placeholder="Campaign Name" className="rounded-lg border border-border bg-background px-3 py-2" />
            <input placeholder="Campaign ID" className="rounded-lg border border-border bg-background px-3 py-2" />
            <input placeholder="Target Platform" className="rounded-lg border border-border bg-background px-3 py-2" />
            <select className="rounded-lg border border-border bg-background px-3 py-2">
              <option>Status</option><option>Active</option><option>Inactive</option>
            </select>
            <select className="rounded-lg border border-border bg-background px-3 py-2">
              <option>Range</option><option>All</option><option>Today</option><option>Last 7 Days</option>
            </select>
            <input type="date" className="rounded-lg border border-border bg-background px-3 py-2" />
            <input type="date" className="rounded-lg border border-border bg-background px-3 py-2" />
          </div>

          <div className="flex gap-2">
            <button className="rounded-lg border border-border px-4 py-2 text-sm">SEARCH</button>
            <button className="rounded-lg bg-brand-500 px-4 py-2 text-black text-sm">CREATE CAMPAIGN</button>
          </div>

          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-foreground/5">
                <tr>
                  <th className="px-3 py-2 text-left">Campaign ID</th>
                  <th className="px-3 py-2 text-left">Campaign Name</th>
                  <th className="px-3 py-2 text-left">Campaign URL</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.id} className="border-t border-border/60">
                    <td className="px-3 py-2">{r.id}</td>
                    <td className="px-3 py-2">{r.name}</td>
                    <td className="px-3 py-2">
                      <a className="text-brand-500 break-all" href={r.url} target="_blank">{r.url}</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-center gap-1">
            <button className="px-2 py-1 rounded border border-border">«</button>
            <button className="px-2 py-1 rounded border border-border">‹</button>
            <button className="px-3 py-1 rounded bg-brand-500 text-black">1</button>
            <button className="px-2 py-1 rounded border border-border">›</button>
            <button className="px-2 py-1 rounded border border-border">»</button>
          </div>
        </div>
      )}

      {/* Reports */}
      {tab === "reports" && (
        <div className="rounded-xl border border-border bg-card p-4 space-y-4">
          <div className="grid md:grid-cols-4 gap-3">
            <input placeholder="Campaign Name" className="rounded-lg border border-border bg-background px-3 py-2" />
            <select className="rounded-lg border border-border bg-background px-3 py-2">
              <option>Range</option><option>Today</option><option>Last 7 Days</option><option>Last 30 Days</option>
            </select>
            <select className="rounded-lg border border-border bg-background px-3 py-2">
              <option>Status</option><option>All</option><option>Active</option><option>Inactive</option>
            </select>
            <div />
            <input type="date" className="rounded-lg border border-border bg-background px-3 py-2" />
            <input type="date" className="rounded-lg border border-border bg-background px-3 py-2" />
          </div>

          <div className="flex gap-2">
            <button className="rounded-lg border border-border px-4 py-2 text-sm">SEARCH</button>
            <button className="rounded-lg bg-brand-500 px-4 py-2 text-black text-sm">EXPORT</button>
          </div>

          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-foreground/5">
                <tr>
                  <th className="px-3 py-2 text-left">Campaign ID</th>
                  <th className="px-3 py-2 text-left">Campaign Name</th>
                  <th className="px-3 py-2 text-left">Campaign Type</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.id} className="border-t border-border/60">
                    <td className="px-3 py-2">{r.id}</td>
                    <td className="px-3 py-2">{r.name}</td>
                    <td className="px-3 py-2">{r.type ?? "Default"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-center gap-1">
            <button className="px-2 py-1 rounded border border-border">«</button>
            <button className="px-2 py-1 rounded border border-border">‹</button>
            <button className="px-3 py-1 rounded bg-brand-500 text-black">1</button>
            <button className="px-2 py-1 rounded border border-border">›</button>
            <button className="px-2 py-1 rounded border border-border">»</button>
          </div>
        </div>
      )}
    </div>
  );
}
