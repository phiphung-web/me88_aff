import { ReactNode } from "react";

type FieldProps = { label: string; children: ReactNode };

export function Field({ label, children }: FieldProps) {
  return (
    <label className="block text-sm space-y-1">
      <span className="text-foreground/70">{label}</span>
      {children}
    </label>
  );
}
