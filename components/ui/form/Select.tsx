import { SelectHTMLAttributes } from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>

export default function Select({ className = "", ...props }: SelectProps) {
  return (
    <select
      title="Select"
      className={`w-full px-4 py-3 rounded-lg bg-zinc-900 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-primary ${className}`}
      {...props}
    />
  );
}
