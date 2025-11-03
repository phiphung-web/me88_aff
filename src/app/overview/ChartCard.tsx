export default function ChartCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="text-sm text-foreground/70 mb-2">{title}</div>
      {children}
    </div>
  );
}
