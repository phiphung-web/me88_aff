import { Field } from "@/components/ui/Field";
import { Input } from "@/components/ui/input";

export default function Page() {
  const banks = ["RHB Bank","CIMB Bank","AmBank","Hong Leong Bank","HSBC Bank","Citibank","Maybank","Public Bank"];
  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 space-y-6">
      <Tabs tabs={["Bank Transfer","E-Wallet","Crypto","Wire Transfer"]} active={0} />
      <div className="grid lg:grid-cols-[1fr_280px] gap-8">
        <div className="space-y-6">
          <Field label="Choose Bank">
            <div className="grid grid-cols-4 gap-3">
              {banks.map((b, i) => (
                <button key={b} className={`h-12 rounded border text-xs ${i === 0 ? "border-brand-500 text-brand-400" : "border-neutral-700 text-foreground/70"}`}>
                  {b}
                </button>
              ))}
            </div>
          </Field>

          <div className="grid md:grid-cols-2 gap-4">
            <Input label="Your Bank Branch *" />
            <Input label="Account Name *" defaultValue="Fletstaff" />
            <Input label="Account No. *" />
            <Input label="Amount *" placeholder="0.00" />
          </div>

          <div className="flex gap-3">
            {[300, 800, 1500, 3000].map((v) => (
              <button key={v} className="h-9 px-3 rounded border border-neutral-700 text-sm">
                {v}
              </button>
            ))}
          </div>

          <div className="flex gap-3">
            <button className="h-10 px-6 rounded bg-neutral-800 border border-neutral-700">CONFIRM</button>
            <button className="h-10 px-6 rounded bg-brand-500 text-black/90">CLEAR</button>
          </div>
        </div>

        <Notice />
      </div>
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

function Notice() {
  return (
    <aside className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 text-sm space-y-2">
      <div className="font-medium text-orange-400">IMPORTANT NOTICE</div>
      <ul className="list-disc ml-5 space-y-1 text-foreground/80">
        <li>Account name must match your registered full name.</li>
        <li>Daily limit and count apply.</li>
      </ul>
    </aside>
  );
}
