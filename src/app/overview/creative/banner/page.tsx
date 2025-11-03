"use client";
import { useState } from "react";

type BannerItem = { id: string; title: string; thumb: string; code: string };
const items: BannerItem[] = Array.from({ length: 8 }).map((_, i) => ({
  id: `b${i}`,
  title: i < 4 ? "Image Title : Birthday Cash Bonus" : "Image Title : 0.9% Instant Cash Rebate",
  thumb: `https://picsum.photos/seed/banner${i}/96/96`,
  code: `<a href="https://www.me88mainplay.com/?affId=8341" target="_blank" title="Birthday Cash Bonus"><img src="https://cdn.yoursite.com/banner${i}.jpg" /></a>`,
}));

export default function CreativeBannerPage() {
  const [lang, setLang] = useState("All");
  const [type, setType] = useState("All");
  const [size, setSize] = useState("All");

  const filtered = items; // nối filter thực sau

  const copy = async (t: string) => {
    try { await navigator.clipboard.writeText(t); } catch {}
  };

  const download = (src: string) => {
    const a = document.createElement("a");
    a.href = src;
    a.download = src.split("/").pop() || "banner.jpg";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <div className="space-y-6">
      {/* Filter */}
      <div className="rounded-xl border border-border bg-card p-4">
        <h2 className="text-lg font-semibold">Promotion Banner</h2>
        <div className="mt-3 grid md:grid-cols-3 gap-3">
          <select value={lang} onChange={(e)=>setLang(e.target.value)} className="rounded-lg border border-border bg-background px-3 py-2">
            <option>All</option><option>EN</option><option>MY</option><option>VN</option>
          </select>
          <select value={type} onChange={(e)=>setType(e.target.value)} className="rounded-lg border border-border bg-background px-3 py-2">
            <option>All</option><option>Static</option><option>GIF</option>
          </select>
          <select value={size} onChange={(e)=>setSize(e.target.value)} className="rounded-lg border border-border bg-background px-3 py-2">
            <option>All</option><option>300x250</option><option>728x90</option><option>1200x628</option>
          </select>
        </div>
        <div className="mt-3">
          <button className="rounded-lg bg-brand-500 px-4 py-2 text-black text-sm">SEARCH</button>
        </div>
      </div>

      {/* List */}
      <div className="space-y-4">
        {filtered.map((it) => {
          const imgSrc = it.thumb; // thay bằng src gốc banner nếu có
          return (
            <div key={it.id} className="rounded-xl border border-border bg-card p-4">
              <div className="text-sm font-medium mb-3">{it.title}</div>
              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-12 md:col-span-6 lg:col-span-8">
                  <div className="h-32 rounded-lg bg-background grid place-items-center border border-border relative">
                    <img src={imgSrc} alt="" className="h-20 w-20 object-cover rounded" />
                    <div className="absolute right-2 bottom-2 flex gap-2">
                      <button onClick={()=>download(imgSrc)} className="px-2 py-1 text-xs rounded border border-border">Download</button>
                      <button onClick={()=>copy(it.code)} className="px-2 py-1 text-xs rounded bg-brand-500 text-black">Copy code</button>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                  <textarea readOnly className="h-32 w-full rounded-lg border border-border bg-background p-3 text-xs" value={it.code} />
                </div>
              </div>
            </div>
          );
        })}

        {/* Pagination */}
        <div className="rounded-xl border border-border bg-card p-3 flex items-center justify-center gap-1 text-sm">
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
