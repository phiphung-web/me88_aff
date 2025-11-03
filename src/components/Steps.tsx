const steps = [
  { step: "Step 1 >", title: "Register" },
  { step: "Step 2 >", title: "Get Approved" },
  { step: "Step 3 >", title: "Promote" },
  { step: "Step 4 >", title: "Earn" },
];

export default function Steps() {
  return (
    <section className="rounded-2xl border border-border bg-card p-6">
      <h3 className="text-xl font-semibold mb-4">How to Start Earning Now</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {steps.map((s) => (
          <div key={s.title} className="rounded-xl border border-border p-4">
            <div className="text-brand-500 text-sm">{s.step}</div>
            <div className="font-medium">{s.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
