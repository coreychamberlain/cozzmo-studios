import Container from "@/components/Container";
import FadeInUp from "@/components/ui/FadeInUp";
import Hero from "@/components/Hero";

export default function AboutPage() {
  return (
    <div className="bg-black text-white">
      {/* About mini hero */}
      <Hero
        title="About Cozzmo Studios"
        intro="Hi, I’m Corey. I’ve been a developer for 13 years and currently work as a senior developer. At Cozzmo Studios, I help small businesses get online quickly and professionally. From brand-new websites to updating existing sites, I handle it all."
        extra="I pride myself on being friendly, understanding, and always striving to produce the best work possible. I lead projects for clients generating multi-million-pound revenues."
        imageSrc="/img/me.jpg"
      />

      {/* Main content */}
      <Container className="py-20 space-y-16">
        <FadeInUp className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">What I Do</h2>
          <p className="text-zinc-300">
            I build websites using modern tools like Next.js, Tailwind CSS, and React. From responsive layouts to smooth animations, my focus is creating sites that look great and perform well. I also offer email setup, hosting guidance, and domain management, making the process seamless for business owners.
          </p>
          <p className="text-zinc-400">
            With 13 years of development experience and my current role as a senior developer, I bring professional expertise and best practices to every project. I lead client projects that generate multi-million-pound revenues, and I always aim to deliver the highest quality work while being friendly and understanding throughout the process.
          </p>
        </FadeInUp>

        <FadeInUp className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">How I Work</h2>
          <p className="text-zinc-300">
            Every project starts with understanding your business and goals. I aim to make the process simple and transparent, from the first conversation to launch and ongoing maintenance. I also collaborate with designers when needed for premium, fully custom builds.
          </p>
        </FadeInUp>

        <FadeInUp className="text-zinc-300">
          If you’re ready to get online or improve your existing site, <a href="/contact" className="text-primary underline">get in touch</a> and let’s make it happen.
        </FadeInUp>
      </Container>
    </div>
  );
}
