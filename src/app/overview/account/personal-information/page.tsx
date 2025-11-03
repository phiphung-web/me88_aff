export default function Page() {
  const rows: [string, string][] = [
    ["Affiliate ID", "8341"],
    ["Full Name", "Fletstaff"],
    ["Username", "fletstaff"],
    ["Email Address", "f******@gmail.com"],
    ["Contact Number", "+60*******893"],
    ["Affiliate Domain", "No Affiliate Domain"],
  ];
  const links: [string, string][] = [
    ["Member Homepage URL", "https://www.me88mainplay.com/en-my/home6"],
    ["Sub-Affiliate Register URL", "https://aff.me88mainplay.com/en-my/register"],
  ];

  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 space-y-6">
      <TabBar tabs={["Affiliate ID","Change Password","Banking Details","Crypto Address","Wire Transfer Details"]} />
      <div className="grid md:grid-cols-2 gap-6">
        <dl className="space-y-3">
          {rows.map(([k, v]) => (
            <div key={k} className="flex gap-4">
              <dt className="w-48 text-foreground/60">{k}</dt>
              <dd className="font-medium">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="space-y-3 text-sm">
          {links.map(([k, v]) => (
            <div key={k}>
              <div className="text-foreground/60">{k} :</div>
              <a href={v} className="text-brand-500 underline break-all">{v}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TabBar({ tabs }: { tabs: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((t, i) => (
        <button
          key={t}
          className={`h-9 px-3 rounded border text-sm ${
            i === 0 ? "border-brand-500 text-brand-400" : "border-neutral-700 text-foreground/80"
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
