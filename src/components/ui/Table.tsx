import { ReactNode } from "react";

export type Row = ReactNode[];
type TableProps = { headers: string[]; rows: Row[]; empty: string };

export function Table({ headers, rows, empty }: TableProps) {
  return (
    <div className="rounded-xl overflow-hidden border border-neutral-800">
      <table className="w-full text-sm">
        <thead className="bg-orange-600/80 text-black">
          <tr>
            {headers.map((h) => (
              <th key={h} className="text-left px-3 py-2">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-neutral-900/40">
          {rows.length === 0 ? (
            <tr>
              <td className="px-3 py-8 text-center text-foreground/60" colSpan={headers.length}>
                {empty}
              </td>
            </tr>
          ) : (
            rows.map((r, i) => (
              <tr key={i} className="border-t border-neutral-800">
                {r.map((c, j) => (
                  <td key={j} className="px-3 py-2">
                    {c}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="p-3 text-xs text-foreground/60">Showing: {rows.length} item(s).</div>
    </div>
  );
}
