// app/types/ui.ts
import type { ReactNode } from "react";

export type Row = ReactNode[];                 // một hàng trong bảng
export type TableProps = {
  headers: string[];
  rows: Row[];
  empty: string;
};

export type FieldProps = {
  label: string;
  children: ReactNode;
};

export type InputProps = {
  label: string;
  type?: string;
  defaultValue?: string;
  placeholder?: string;
};

export type SelectProps = {
  label: string;
  options: string[];
};
