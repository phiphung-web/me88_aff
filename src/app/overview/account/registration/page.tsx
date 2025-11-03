import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/Select";
import { Table, Row } from "@/components/ui/Table";

export default function Page() {
  const headers = ["Player Username", "Created Date", "Registered Date", "Status"];
  const rows: Row[] = [
    ["fletstaff", "2025-07-16 17:18", "2025-09-25 16:30", "Used"],
    ["testuser1", "2025-06-11 11:37", "2025-06-11 13:31", "Used"],
  ];

  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 space-y-6">
      <CreateAccount />
      <Filters />
      <button className="h-10 px-6 rounded bg-brand-500 text-black/90">SEARCH</button>
      <Table headers={headers} rows={rows} empty="No records" />
    </div>
  );
}

function CreateAccount() {
  return (
    <div className="space-y-4">
      <div className="grid md:grid-cols-4 gap-4">
        <Input label="Username" />
        <Input label="New Password" type="password" />
        <Input label="Confirm Password" type="password" />
        <Input label="Affiliate/Referral ID" defaultValue="8341" />
      </div>
      <button className="h-10 px-6 rounded bg-brand-500 text-black/90 w-40">REGISTER</button>
      <p className="text-xs text-foreground/60">
        By clicking Register you acknowledge you are 18+ and agree to Terms & Conditions.
      </p>
    </div>
  );
}

function Filters() {
  return (
    <div className="grid md:grid-cols-6 gap-4">
      <Select label="Creation Period" options={["All", "Today", "Last 7 days"]} />
      <Select label="Status" options={["All", "Used", "Available"]} />
      <Input label="Start Date" type="date" />
      <Input label="End Date" type="date" />
    </div>
  );
}
