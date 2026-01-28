"use client";

import FadeInUp from "./ui/FadeInUp";
import Image from "next/image";
import P from "@/components/typography/Paragraph";
import H1 from "@/components/typography/H1";

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
          <H1>{title}</H1>
          <P className="text-lg">{intro}</P>
          {extra && <P>{extra}</P>}
        </FadeInUp>

        {/* Optional Image */}
        {imageSrc && (
          <FadeInUp
            className="flex-shrink-0 w-64 h-auto md:w-64 relative rounded-xl overflow-hidden"
            delay={0.2}
          >
            <Image src={imageSrc} alt={title} width={150} height={150} className="w-full rounded-xl" priority quality={100} />
          </FadeInUp>
        )}
      </div>
    </div>
  );
}
