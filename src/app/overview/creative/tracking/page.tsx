"use client";

type TrackLink = { label: string; url: string };
const trackLinks: TrackLink[] = [
  { label: "Member Homepage URL", url: "https://www.me88mainplay.com/en-my/home?affId=8341" },
  { label: "Member Register URL", url: "https://www.me88mainplay.com/en-my/register?affId=8341" },
  { label: "Sub-Affiliate Register URL", url: "https://aff.me88mainplay.com/en-my/register?affId=8341" },
];

type Promo = { id: string; title: string; desc: string; img: string; due: string };

const promos: Promo[] = Array.from({ length: 12 }).map((_, i) => ({
  id: `p${i}`,
  title: ["289% Welcome Jackpot Bonus MYR 2,880", "100% Welcome Sports Bonus", "200% E-Sport Welcome Bonus"][i % 3],
  desc: "Get started with a massive bonus. Terms apply.",
  img: `https://picsum.photos/seed/aff${i}/640/360`,
  due: "6Days 04:00hrs",
}));

export default function CreativeTrackingPage() {
  return (
    <div className="space-y-6">
      {/* Tracking links */}
      <div className="rounded-xl border border-border bg-card p-4">
        <h2 className="text-lg font-semibold mb-3">Affiliate Tracking Link</h2>
        <div className="space-y-3">
          {trackLinks.map((t) => (
            <div key={t.label} className="flex flex-col md:flex-row gap-2 md:items-center">
              <label className="w-56 shrink-0 text-sm text-foreground/70">{t.label}</label>
              <input readOnly value={t.url} className="flex-1 rounded-lg border border-border bg-background px-3 py-2" />
              <div className="flex gap-2">
                <button className="rounded-lg border border-border px-3 py-2 text-sm">SHARE</button>
                <button className="rounded-lg bg-brand-500 px-3 py-2 text-black text-sm">SHARE QR</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Website Promo Link */}
      <div className="rounded-xl border border-border bg-card p-4">
        <div className="flex items-center justify-between gap-2 mb-3">
          <h2 className="text-lg font-semibold">Website Promo Link</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-foreground/70">Region</span>
            <select className="rounded-lg border border-border bg-background px-3 py-2">
              <option>English</option><option>Bahasa</option><option>Tiếng Việt</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {promos.map((p) => (
            <article key={p.id} className="rounded-xl border border-border bg-background overflow-hidden">
              <img src={p.img} alt="" className="h-40 w-full object-cover" />
              <div className="p-3">
                <h3 className="line-clamp-2 font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-foreground/70 line-clamp-2">{p.desc}</p>
                <div className="mt-2 flex items-center justify-between text-xs text-foreground/60">
                  <div>Running Time: <span className="text-brand-500">{p.due}</span></div>
                </div>
                <div className="mt-3 flex justify-end">
                  <button className="rounded-lg border border-border px-3 py-2 text-xs">MORE INFO</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
