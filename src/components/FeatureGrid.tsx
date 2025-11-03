import { DollarSign, Star, Award, Bitcoin } from "lucide-react";

const items = [
  {
    icon: DollarSign,
    title: "High Turnover Commission",
    desc: "Up to 0.8% commission on your player's turnover",
  },
  { icon: Star, title: "Premium Products", desc: "Top brand games & image" },
  {
    icon: Award,
    title: "Dedicated Manager",
    desc: "Support & special affiliate rewards",
  },
  {
    icon: Bitcoin,
    title: "Fast Payout",
    desc: "Pay with your preferred method",
  },
];

export default function FeatureGrid() {
  return (
    <section>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="rounded-2xl border border-border bg-card p-4"
          >
            <div className="flex items-center gap-2 text-base font-medium">
              <Icon className="h-5 w-5 text-brand-500" /> {title}
            </div>
            <p className="mt-2 text-sm text-foreground/70">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
