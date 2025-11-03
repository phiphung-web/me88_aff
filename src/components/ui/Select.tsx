type SelectProps = { label: string; options: string[]; defaultValue?: string };

export function Select({ label, options, defaultValue }: SelectProps) {
  return (
    <label className="block text-sm space-y-1">
      <span className="text-foreground/70">{label}</span>
      <select
        defaultValue={defaultValue}
        className="w-full bg-neutral-900 border border-neutral-700 rounded px-3 py-2"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}
