"use client";

export default function CommissionExample() {
  const memberTurnover = 3_230_000; // USD
  const tierRate = 0.005;
  const commission = memberTurnover * tierRate;

  return (
    <section id="commission" className="space-y-4">
      <div className="rounded-2xl border border-border bg-card p-4">
        <h3 className="text-lg font-semibold">Turnover Commission Example</h3>
        <div className="mt-2 text-sm text-foreground/80 space-y-1">
          <div>
            Member Total Valid Turnover:{" "}
            <b>USD {memberTurnover.toLocaleString()}</b>
          </div>
          <div>
            Tier Commission Rate: <b>{(tierRate * 100).toFixed(1)}%</b>
          </div>
          <div>
            Commission: <b>USD {commission.toLocaleString()}</b>
          </div>
        </div>
      </div>
      <div className="rounded-2xl border border-border bg-card p-4">
        <h3 className="text-lg font-semibold">Average Affiliate Commission</h3>
        <div className="mt-3 h-56 w-full">
          {/* có thể đặt chart ở đây sau, tạm placeholder sparkline */}
          <div className="h-full w-full grid place-items-center text-foreground/50 text-sm">
            (Chart placeholder — sẽ hiện ở Dashboard)
          </div>
        </div>
      </div>
    </section>
  );
}
