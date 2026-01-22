import Container from "@/components/Container";
import FadeInUp from "@/components/ui/FadeInUp";
import Hero from "@/components/Hero";

export default function AboutPage() {
  return (
    <div className="bg-black text-white">
      {/* About hero */}
      <Hero
        title="About Cozzmo Studios"
        intro="Hi, I’m Corey — the developer behind Cozzmo Studios. I’ve been a developer for 13 years and currently work as a senior developer. We help small businesses get online quickly and professionally, from brand-new websites to improving existing ones."
        extra="We pride ourselves on being friendly, approachable, and always striving to produce the best work possible. We lead projects for clients generating multi-million-pound revenues."
        imageSrc="/img/me.jpg"
      />

      {/* Main content */}
      <Container className="py-20 space-y-16">
        <FadeInUp className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">What I Do</h2>
          <p className="text-zinc-300">
            I build modern, high-quality websites using technologies like Next.js, React, and Tailwind CSS.
            My focus is on clean design, strong performance, and a smooth user experience — whether that’s a simple
            business website or a more custom build.
          </p>
          <p className="text-zinc-400">
            Alongside development, I offer help with email setup, domains, hosting, and ongoing maintenance, so you don’t
            need to juggle multiple providers or technical decisions.
          </p>
        </FadeInUp>

        <FadeInUp className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">How I Work</h2>
          <p className="text-zinc-300">
            I’m based in <strong>Derby, England</strong>, and I’m always happy to meet clients face-to-face where possible.
            Building a real working relationship is important to me, especially for long-term projects.
          </p>
          <p className="text-zinc-400">
            Communication is key — I offer regular check-ins, calls, and updates throughout a project so you always know
            where things stand. My aim is to make the process clear, collaborative, and stress-free from start to finish.
          </p>
        </FadeInUp>

        <FadeInUp className="text-zinc-300">
          If you’re ready to get online or improve an existing site,&nbsp;
          <a href="/contact" className="text-primary underline">
            get in touch
          </a>{" "}
          and let’s see how I can help.
        </FadeInUp>
      </Container>
    </div>
  );
}
