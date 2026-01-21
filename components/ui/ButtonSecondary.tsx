"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function ButtonSecondary({ children, href, onClick, className }: ButtonProps) {
  const baseClasses =
    "px-6 py-3 font-semibold rounded-lg border border-zinc-700 text-zinc-300 hover:border-primary hover:text-white hover:bg-zinc-800 transition";

  if (href) {
    return (
      <a href={href} className={clsx(baseClasses, className)}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={clsx(baseClasses, className)}>
      {children}
    </button>
  );
}
