export default function Testimonials() {
  const items = [
    "Very Safe Affiliate Program",
    "Good Brand Image and Games",
    "Commission Released Earlier than Expected",
  ];
  return (
    <section>
      <h3 className="text-xl font-semibold mb-4">What Our Affiliate Says</h3>
      <div className="grid md:grid-cols-3 gap-4">
        {items.map((t) => (
          <div key={t} className="h-40 rounded-2xl border border-border bg-card/80 grid place-items-center text-center text-sm text-foreground/70">
            {t}
          </div>
        ))}
      </div>
    </section>
  );
}
