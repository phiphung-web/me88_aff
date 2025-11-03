export default function Section({
  title,
  actions,
  children,
}: {
  title: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-semibold">{title}</h2>
        {actions}
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}
