import { Field } from "@/components/ui/Field";

export default function Page() {
  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 space-y-6">
      <Tabs tabs={["Crypto", "Bank Transfer"]} active={0} />
      <div className="grid lg:grid-cols-[1fr_280px] gap-8">
        <div className="space-y-5">
          <Field label="Deposit Channel">
            <select className="w-full bg-neutral-900 border border-neutral-700 rounded px-3 py-2">
              <option>Channel 2</option>
            </select>
          </Field>

          <TokenRow tokens={["BTC @6c", "ETH-ERC20 @6c", "USDT-TRC20 @2c"]} activeIndex={0} />

          <div className="grid md:grid-cols-[180px_1fr] gap-4 items-start">
            <div className="rounded border border-neutral-700 p-3 bg-neutral-800/40 h-44 grid place-items-center">
              QR
            </div>
            <div className="space-y-2 text-sm">
              <div>Min Deposit = BTC 0.005</div>
              <div className="text-foreground/70">Current exchange rate</div>
              <div className="font-medium">BTC 1 = MYR 456005.87</div>
              <button className="px-3 py-2 rounded border border-neutral-700">SAVE QR CODE</button>
              <input className="w-full bg-neutral-900 border border-neutral-700 rounded px-3 py-2" defaultValue="16k3QGDc2P7gQn..." />
              <button className="mt-2 h-10 px-4 rounded bg-brand-500 text-black/90">CHECK STATUS</button>
            </div>
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

function TokenRow({ tokens, activeIndex }: { tokens: string[]; activeIndex: number }) {
  return (
    <div className="flex flex-wrap gap-3">
      {tokens.map((t, i) => (
        <div key={t} className={`px-3 py-2 rounded border text-sm ${i === activeIndex ? "border-brand-500 text-brand-400" : "border-neutral-700 text-foreground/70"}`}>
          {t}
        </div>
      ))}
    </div>
  );
}

function Notice() {
  return (
    <aside className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 text-sm space-y-2">
      <div className="font-medium text-orange-400">IMPORTANT NOTICE</div>
      <ul className="list-disc ml-5 space-y-1 text-foreground/80">
        <li>Check the latest active deposit QR before making a deposit.</li>
        <li>Some providers need up to 15 minutes to update win/loss before withdrawal.</li>
      </ul>
    </aside>
  );
}
