const faqs = [
  {
    q: "What is the Affiliate Program?",
    a: "It rewards you based on your referred players' turnover.",
  },
  {
    q: "How does it work?",
    a: "Register, get approved, promote, and earn recurring commission.",
  },
  {
    q: "Any conditions to join?",
    a: "Basic KYC and traffic source disclosure.",
  },
  { q: "How do I join?", a: "Click Join Now and complete the form." },
];

export default function FAQ() {
  return (
    <section id="faq">
      <h3 className="text-xl font-semibold mb-4">FAQ</h3>
      <div className="divide-y divide-border rounded-2xl border border-border bg-card">
        {faqs.map((f, i) => (
          <details key={i} className="p-4">
            <summary className="cursor-pointer select-none text-left font-medium">
              {i + 1}. {f.q}
            </summary>
            <p className="mt-2 text-foreground/70">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
