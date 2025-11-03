"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { label: "Overview", href: "/overview" },
  {
    label: "Creative",
    children: [
      { label: "Tracking", href: "/overview/creative/tracking" },
      { label: "Banner", href: "/overview/creative/banner" },
      { label: "Campaign", href: "/overview/creative/campaign" },
    ],
  },
  {
    label: "Reports",
    children: [
      {
        label: "Monthly Commission",
        href: "/overview/reports/monthly-commission",
      },
      {
        label: "Affiliate Summary",
        href: "/overview/reports/affiliate-summary",
      },
      { label: "Click Metrics", href: "/overview/reports/click-metrics" },
      { label: "Games Provider", href: "/overview/reports/games-provider" },
      { label: "Member Report", href: "/overview/reports/member-report" },
      {
        label: "Sub Affiliate Report",
        href: "/overview/reports/sub-affiliate-report",
      },
      {
        label: "Current Month Commission",
        href: "/overview/reports/current-month-commission",
      },
    ],
  },
  {
    label: "Account",
    children: [
      {
        label: "Personal Information",
        href: "/overview/account/personal-information",
      },
      { label: "Deposit", href: "/overview/account/deposit" },
      { label: "Withdrawal", href: "/overview/account/withdrawal" },
      { label: "Transfer", href: "/overview/account/transfer" },
      { label: "History", href: "/overview/account/history" },
      { label: "Registration", href: "/overview/account/registration" },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 shrink-0 space-y-2 bg-neutral-900/40 rounded-xl p-3 text-sm">
      {menu.map((group, i) => (
        <div key={i} className="space-y-1">
          <div className="text-foreground/70 font-medium px-3 pt-2">
            {group.label}
          </div>
          {group.children ? (
            <div className="pl-3 border-l border-border/60 space-y-1">
              {group.children.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block rounded-lg px-3 py-2 transition ${
                      active
                        ? "text-brand-500 bg-foreground/10"
                        : "text-foreground/80 hover:text-brand-400"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          ) : (
            <Link
              href={group.href!}
              className={`block rounded-lg px-3 py-2 ${
                pathname === group.href
                  ? "text-brand-500 bg-foreground/10"
                  : "text-foreground/80 hover:text-brand-400"
              }`}
            >
              {group.label}
            </Link>
          )}
          {i < menu.length - 1 && (
            <div className="border-t border-border/50 mt-2 mb-2"></div>
          )}
        </div>
      ))}
    </aside>
  );
}
