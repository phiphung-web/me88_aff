export type Column<T> = {
  key: keyof T;
  header: string;
  className?: string;
  render?: (row: T) => React.ReactNode;
};

export default function DataTable<T extends Record<string, any>>({
  columns,
  rows,
  empty = "No records",
}: {
  columns: Column<T>[];
  rows: T[];
  empty?: string;
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-sm">
        <thead className="bg-foreground/5">
          <tr>
            {columns.map((c) => (
              <th
                key={String(c.key)}
                className={`px-3 py-2 text-left font-medium ${
                  c.className || ""
                }`}
              >
                {c.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 && (
            <tr>
              <td
                colSpan={columns.length}
                className="px-3 py-6 text-center text-foreground/50"
              >
                {empty}
              </td>
            </tr>
          )}
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-border/60">
              {columns.map((c) => (
                <td
                  key={String(c.key)}
                  className={`px-3 py-2 ${c.className || ""}`}
                >
                  {c.render ? c.render(r) : (r[c.key] as any)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
