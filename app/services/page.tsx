import Container from "@/components/Container";
import FadeInUp from "@/components/ui/FadeInUp";
import Hero from "@/components/Hero";

const services = [
  {
    title: "Complete Website Setup",
    slug: "complete-setup",
    intro:
      "We build modern, responsive websites similar to this one — typically 4–5 core pages, contact forms, and a clean, professional layout.",
    extra:
      "These sites are ideal for small businesses looking to establish a strong online presence quickly and affordably, with room to grow later if needed.",
    price: "From £500",
  },
  {
    title: "Custom & Bespoke Builds",
    slug: "custom-builds",
    intro:
      "Fully custom websites designed to your exact specifications. Whether you need unique layouts, custom features, or premium design collaboration, we can deliver a polished, professional site.",
    extra:
      "Ideal for businesses wanting a completely unique online presence. We work with you to understand your vision and create a site that stands out.",
    price: "POA",
  },
  {
    title: "Existing Sites & Integrations",
    slug: "existing-sites",
    intro:
      "We can take on your current website and make improvements, updates, or fixes. This includes integrating third-party tools, updating content, or connecting platforms like Shopify, WordPress, or custom HTML/CSS sites.",
    extra:
      "Whether you need minor edits or major enhancements, we can extend your site’s functionality and ensure everything works seamlessly.",
    price: "POA",
  },
  {
    title: "Ongoing Maintenance & Support",
    slug: "maintenance",
    intro:
      "Keep your website running smoothly with regular updates, backups, and technical support. Peace of mind for busy business owners.",
    extra:
      "We can handle all technical upkeep so you can focus on your business. Our maintenance ensures your site stays secure, up-to-date, and performing at its best.",
    price: "From £30/month",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <Hero
        title="Our Services"
        intro="Below is an overview of the services we offer and how we work. From fixed-price website builds to ongoing maintenance and custom projects, we keep things clear, flexible, and transparent."
        // No image passed
      />

      {/* Main Content */}
      <Container className="py-20 space-y-16">
        {services.map((service, index) => (
          <FadeInUp key={service.slug} className="space-y-4" delay={index * 0.2}>
            <section id={service.slug}>
              <h2 className="text-2xl font-semibold text-white">{service.title}</h2>
              <p className="text-zinc-300">{service.intro}</p>
              <p className="text-zinc-400">{service.extra}</p>
              <p className="mt-2 font-semibold text-primary">{service.price}</p>
            </section>
          </FadeInUp>
        ))}
      </Container>
    </div>
  );
}
