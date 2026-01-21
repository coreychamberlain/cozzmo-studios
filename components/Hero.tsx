"use client";

import FadeInUp from "./ui/FadeInUp";
import Image from "next/image";

interface HeroProps {
  title: string;
  intro: string;
  extra?: string;
  imageSrc?: string; // optional now
  className?: string;
}

export default function Hero({ title, intro, extra, imageSrc, className = "" }: HeroProps) {
  return (
    <div className={`bg-black py-16 ${className}`}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8 md:gap-16">
        {/* Text */}
        <FadeInUp className="flex-1 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
          <p className="text-zinc-300 text-lg">{intro}</p>
          {extra && <p className="text-zinc-400">{extra}</p>}
        </FadeInUp>

        {/* Optional Image */}
        {imageSrc && (
          <FadeInUp
            className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 relative rounded-xl overflow-hidden"
            delay={0.2}
          >
            <Image src={imageSrc} alt={title} fill className="object-cover rounded-xl" priority />
          </FadeInUp>
        )}
      </div>
    </div>
  );
}
