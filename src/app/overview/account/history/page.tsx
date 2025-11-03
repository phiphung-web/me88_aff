import { Field } from "@/components/ui/Field";
import { Table, Row } from "@/components/ui/Table";

export default function Page() {
  const headers = ["Apply Date", "Amount", "Confirmed Amount", "Status"];
  const rows: Row[] = [];

  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 space-y-6">
      <div className="grid md:grid-cols-4 gap-4">
        <Field label="Register Date From">
          <input type="date" className="w-full bg-neutral-900 border border-neutral-700 rounded px-3 py-2" />
        </Field>
        <Field label="End Date">
          <input type="date" className="w-full bg-neutral-900 border border-neutral-700 rounded px-3 py-2" />
        </Field>
      </div>

      <Tabs tabs={["Withdrawal", "Deposit", "Transfer Report", "Member", "Quick Registration"]} active={0} />
      <button className="h-10 px-6 rounded bg-brand-500 text-black/90">SEARCH</button>
      <Table headers={headers} rows={rows} empty="No transaction yet" />
    </div>
  );
}

function Tabs({ tabs, active }: { tabs: string[]; active: number }) {
  return (
    <div className="flex gap-2">
      {tabs.map((t, i) => (
        <button key={t} className={`h-9 px-3 rounded text-sm border ${i === active ? "border-brand-500 text-brand-400" : "border-neutral-700 text-foreground/70"}`}>
          {t}
        </button>
      ))}
    </div>
  );
}
