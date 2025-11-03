import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[linear-gradient(to_bottom,oklch(0.16_0_0),oklch(0.14_0_0))]">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Asia&apos;s Trusted <span className="text-brand-500">Affiliate Program</span>
          </h1>
          <p className="text-foreground/70">
            High turnover commission, premium products, dedicated manager, fast payout via your preferred method.
          </p>
          <div className="flex gap-3">
            <Link href="/(auth)/register" className="px-4 py-2 rounded-xl bg-brand-500 text-black font-medium">
              Click to Join Now
            </Link>
            <Link href="/(auth)/login" className="px-4 py-2 rounded-xl border border-border">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
