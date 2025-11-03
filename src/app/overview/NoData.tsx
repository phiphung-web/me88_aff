export default function NoData({ note = "No data yet" }: { note?: string }) {
  return (
    <div className="rounded-xl border border-dashed border-border bg-card p-6 grid place-items-center text-foreground/50">
      {note}
    </div>
  );
}
