"use client";
import { useState } from "react";

export default function CopyButton({ text, label="COPY" }: { text: string; label?: string }) {
  const [ok, setOk] = useState(false);
  return (
    <button
      className={`rounded-lg px-3 py-2 text-sm ${ok ? "bg-foreground/20" : "bg-brand-500 text-black"}`}
      onClick={async () => {
        try { await navigator.clipboard.writeText(text); setOk(true); setTimeout(()=>setOk(false), 1200); } catch {}
      }}
    >
      {ok ? "COPIED" : label}
    </button>
  );
}
