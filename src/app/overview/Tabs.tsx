"use client";
import { useState } from "react";

export default function Tabs({
  tabs,
  initial = 0,
  onChange,
}: {
  tabs: { label: string; content: React.ReactNode }[];
  initial?: number;
  onChange?: (idx: number) => void;
}) {
  const [idx, setIdx] = useState(initial);
  return (
    <div>
      <div className="flex gap-2">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            onClick={() => { setIdx(i); onChange?.(i); }}
            className={`rounded-lg px-3 py-2 text-sm
              ${i === idx ? "bg-brand-500 text-black" : "border border-border"}`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="mt-4">{tabs[idx].content}</div>
    </div>
  );
}
