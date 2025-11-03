import { Field } from "@/components/ui/Field";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/Select";
import { Table, Row } from "@/components/ui/Table";

export default function Page() {
  const headers = ["ID", "Login", "Register Date", "Transfer"];
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
        <Input label="Login" />
        <Select label="Transfer Target *" options={["Member"]} />
      </div>

      <button className="h-10 px-6 rounded bg-brand-500 text-black/90">SEARCH</button>
      <Table headers={headers} rows={rows} empty="No Records!" />
    </div>
  );
}
