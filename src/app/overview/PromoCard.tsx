export default function PromoCard({
  image,
  title,
  desc,
  cta = "MORE INFO",
}: {
  image: string;
  title: string;
  desc: string;
  cta?: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden flex flex-col">
      <img src={image} alt={title} className="w-full h-36 object-cover" />
      <div className="p-3 space-y-2">
        <div className="text-sm font-semibold line-clamp-1">{title}</div>
        <p className="text-xs text-foreground/70 line-clamp-2">{desc}</p>
        <div className="pt-2">
          <button className="rounded-lg border border-border px-3 py-1 text-xs">
            {cta}
          </button>
        </div>
      </div>
    </div>
  );
}
