"use client";

import FadeInUp from "@/components/ui/FadeInUp";
import Image from "next/image";
import P from "../typography/Paragraph";
import H1 from "../typography/H1";
interface AboutHeroProps {
  title: string;
  intro: string;
  extra?: string;
  imageSrc: string;
  className?: string;
}

export default function AboutHero({ title, intro, extra, imageSrc, className = "" }: AboutHeroProps) {
  return (
    <div className={`bg-black py-16 ${className}`}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <FadeInUp className="flex-1 space-y-4">
          <H1>{title}</H1>
          <P className="text-lg">{intro}</P>
          {extra && <P>{extra}</P>}
        </FadeInUp>
        <FadeInUp className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 relative rounded-xl overflow-hidden" delay={0.2}>
          <Image src={imageSrc} alt={title} fill className="object-cover rounded-xl" priority />
        </FadeInUp>
      </div>
    </div>
  );
}
