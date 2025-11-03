export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="space-y-6">
      <AffiliateHeader />
      {children}
    </section>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return <button className="h-9 px-3 rounded bg-neutral-800 text-xs border border-neutral-700">{children}</button>;
}

function Box({ title, amount }: { title: string; amount: string }) {
  return (
    <div className="rounded-lg bg-neutral-800/60 border border-neutral-700 p-3">
      <div className="text-xs text-foreground/60">{title}</div>
      <div className="text-lg font-semibold">{amount}</div>
      <div className="mt-2 flex gap-2">
        {title === "Main Wallet" && <Pill>Withdraw</Pill>}
        <Pill>Transfer</Pill>
      </div>
    </div>
  );
}

function AffiliateHeader() {
  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4">
      <div className="grid md:grid-cols-4 gap-4 items-start">
        <div className="space-y-1 text-sm">
          <div className="text-foreground/70">Affiliate Login</div>
          <div className="font-medium">fletstaff</div>
          <div className="text-foreground/70">Affiliate ID</div>
          <div>8341</div>
          <div className="text-foreground/70">Currency</div>
          <div>MYR</div>
        </div>
        <div className="md:col-span-3 grid sm:grid-cols-2 gap-3">
          <Box title="Main Wallet" amount="MYR 0.00" />
          <Box title="Deposit Wallet" amount="MYR 0.00" />
        </div>
      </div>
    </div>
  );
}
