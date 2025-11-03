"use client";
export default function Pagination({
  page, pages, onChange,
}: { page: number; pages: number; onChange: (p: number) => void; }) {
  return (
    <div className="flex items-center justify-center gap-2 text-sm">
      <button className="rounded-lg border border-border px-2 py-1" onClick={() => onChange(1)} disabled={page===1}>«</button>
      <button className="rounded-lg border border-border px-2 py-1" onClick={() => onChange(Math.max(1,page-1))} disabled={page===1}>‹</button>
      <span className="px-2"> {page} / {pages} </span>
      <button className="rounded-lg border border-border px-2 py-1" onClick={() => onChange(Math.min(pages,page+1))} disabled={page===pages}>›</button>
      <button className="rounded-lg border border-border px-2 py-1" onClick={() => onChange(pages)} disabled={page===pages}>»</button>
    </div>
  );
}
