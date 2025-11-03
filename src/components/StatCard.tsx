export default function StatCard({ title, value, hint }: { title: string; value: string | number; hint?: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <div className="text-sm text-foreground/70">{title}</div>
      <div className="mt-1 text-2xl font-bold">{value}</div>
      {hint && <div className="text-xs text-foreground/50 mt-1">{hint}</div>}
    </div>
  );
}
