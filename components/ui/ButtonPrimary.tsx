"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function ButtonPrimary({ children, href, onClick, className }: ButtonProps) {
  const baseClasses =
    "px-6 py-3 font-semibold rounded-lg text-white bg-primary hover:bg-primary-dark transition";

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
