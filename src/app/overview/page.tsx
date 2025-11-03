"use client";
import { useMemo, useState } from "react";
import SimpleLineChart from "@/components/SimpleLineChart";
import {
  Users,
  Target,
  CircleDollarSign,
  CalendarDays,
  RotateCw,
  ZoomIn,
  Search,
  Download,
  Menu,
} from "lucide-react";

type TabType = "total" | "number";

const amountTabs = [
  { id: "new-signup-deposit", label: "New Sign Up Deposit Amount" },
  { id: "existing-deposit", label: "Existing Member Deposit Amount" },
  { id: "first-time-deposit", label: "First Time Deposit Amount" },
  { id: "total-deposit", label: "Total Deposit Amount" },
  { id: "turnover", label: "Turnover Amount" },
  { id: "valid-turnover", label: "Valid Turnover Amount" },
  { id: "win-loss", label: "Win/Loss Amount" },
] as const;

const memberTabs = [
  { id: "new-members", label: "No. of New Members" },
  {
    id: "existing-members",
    label: "No. of Existing Members with Prior Deposit Record",
  },
  { id: "first-time-depositors", label: "No. of First Time Depositors" },
  { id: "depositors", label: "No. of Depositors" },
  { id: "withdrawals", label: "No. of Withdrawals" },
  { id: "bettors", label: "No. of Bettors" },
] as const;

export default function OverviewPage() {
  const [dataTab, setDataTab] = useState<TabType>("number");
  const [activeSubTab, setActiveSubTab] = useState(memberTabs[0].id);

  const currentSubTabs = dataTab === "total" ? amountTabs : memberTabs;
  const chartTitle = useMemo(
    () =>
      currentSubTabs.find((t) => t.id === activeSubTab)?.label ??
      "Data Comparison",
    [currentSubTabs, activeSubTab]
  );

  return (
    <div className="space-y-8">
      {/* Overall Summary */}
      <section className="rounded-xl border border-border bg-card p-5">
        <div className="text-sm font-medium">Overall Summary</div>
        <div className="mt-2 w-44 relative">
          <input
            type="month"
            defaultValue="2025-11"
            className="w-full rounded-lg border border-border bg-background px-3 py-2 pl-9 text-sm"
          />
          <CalendarDays className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/70" />
        </div>

        {/* Data Comparison */}
        <div className="mt-6">
          <div className="text-sm font-medium mb-2">Data Comparison</div>

          {/* Main tabs */}
          <div className="flex gap-2">
            <button
              onClick={() => {
                setDataTab("total");
                setActiveSubTab(amountTabs[0].id);
              }}
              className={`rounded-lg px-3 py-2 text-sm font-medium ${
                dataTab === "total"
                  ? "bg-brand-500 text-black"
                  : "border border-border text-foreground/80"
              }`}
            >
              Total amount
            </button>
            <button
              onClick={() => {
                setDataTab("number");
                setActiveSubTab(memberTabs[0].id);
              }}
              className={`rounded-lg px-3 py-2 text-sm font-medium ${
                dataTab === "number"
                  ? "bg-brand-500 text-black"
                  : "border border-border text-foreground/80"
              }`}
            >
              Number of member
            </button>
          </div>

          {/* Sub tabs */}
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            {currentSubTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id)}
                className={`pb-1 ${
                  activeSubTab === tab.id
                    ? "text-brand-500 border-b-2 border-brand-500"
                    : "text-foreground/70"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-4 border-t border-border/80" />

          {/* Chart card */}
          <div className="mt-5 rounded-xl border border-border bg-background p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium">{chartTitle}</div>
              <div className="flex items-center gap-2 text-foreground/60">
                <RotateCw className="h-4 w-4" />
                <ZoomIn className="h-4 w-4" />
                <Search className="h-4 w-4" />
                <Download className="h-4 w-4" />
                <Menu className="h-4 w-4" />
              </div>
            </div>

            <SimpleLineChart />

            <div className="mt-4 flex items-center justify-between">
              <div className="flex gap-2">
                <button className="rounded-lg bg-brand-500 px-3 py-1.5 text-black text-sm font-medium">
                  This Month
                </button>
                <button className="rounded-lg border border-border px-3 py-1.5 text-sm font-medium text-foreground/80">
                  Last Month
                </button>
              </div>
              <div className="text-xs text-foreground/60">
                Last Update : 03/11/2025
              </div>
            </div>
          </div>

          <div className="mt-4 text-xs text-foreground/60">
            Data Comparison Analysis is updated on a daily basis 12am
          </div>
        </div>
      </section>

      {/* Monthly Summary */}
      <section>
        <div className="text-base font-semibold mb-3">Monthly Summary</div>
        <div className="grid gap-5 md:grid-cols-3">
          <SummaryCard
            title="Member Summary"
            rows={[
              ["Total Member", "9"],
              ["Active Members", "0"],
            ]}
            icon={<Users className="h-5 w-5" />}
          />
          <SummaryCard
            title="Quick Summary"
            rows={[
              ["Total Clicks", "0"],
              ["New Sign Up", "0"],
              ["First Deposit", "0"],
              ["Total GGR", "0.00"],
              ["Total Turnover", "0.00"],
            ]}
            icon={<Target className="h-5 w-5" />}
          />
          <SummaryCard
            title="Commission"
            rows={[["", "No Commission Yet"]]}
            icon={<CircleDollarSign className="h-5 w-5" />}
          />
        </div>
      </section>

      {/* Provider Summary */}
      <section className="rounded-xl border border-border bg-card p-5">
        <div className="flex items-center justify-between">
          <div className="text-base font-semibold">Provider Summary</div>
          <div className="text-xs text-foreground/60">
            Last Update : 03/11/2025
          </div>
        </div>
        <div className="mt-3 text-sm text-foreground/70">
          No Provider Records Yet
        </div>
      </section>
    </div>
  );
}

/* ---------- small UI ---------- */
function SummaryCard({
  title,
  rows,
  icon,
}: {
  title: string;
  rows: [string, string][];
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="mb-3 flex items-center gap-2">
        <span className="text-brand-500">{icon}</span>
        <div className="font-medium">{title}</div>
      </div>
      <dl className="divide-y divide-border/80">
        {rows.map(([k, v], idx) => (
          <div
            key={idx}
            className="flex items-center justify-between py-2 text-sm"
          >
            <dt className="text-foreground/70">{k}</dt>
            <dd className="font-medium">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
