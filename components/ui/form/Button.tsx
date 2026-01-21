import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`px-6 py-3 rounded-lg bg-primary text-black font-semibold hover:bg-primary/90 transition ${className}`}
      {...props}
    />
  );
}
