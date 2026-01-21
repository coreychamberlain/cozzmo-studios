"use client"

import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight text-white">
          Cozzmo Studios
        </Link>

        <nav className="hidden md:flex gap-8 text-sm text-white">
          <Link href="/about" className="hover:text-indigo-500 transition">About</Link>
          {/* <Link href="/work" className="hover:text-indigo-500 transition">Portfolio</Link> */}
          <Link href="/services" className="hover:text-indigo-500 transition">Services</Link>
          <Link href="/contact" className="hover:text-indigo-500 transition">Contact</Link>
        </nav>

        <button onClick={() => setOpen(true)} className="md:hidden text-2xl text-white">
          ☰
        </button>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
