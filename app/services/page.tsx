import Container from "@/components/Container";
import FadeInUp from "@/components/ui/FadeInUp";
import Hero from "@/components/Hero";
import P from "@/components/typography/Paragraph";
import H2 from "@/components/typography/H2";

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
          <FadeInUp
            key={service.slug}
            className="space-y-4"
            delay={index * 0.2}
          >
            <section id={service.slug}>
              <H2>{service.title}</H2>
              <P>{service.intro}</P>
              <P>{service.extra}</P>
              <P className="mt-2 font-semibold !text-primary">
                {service.price}
              </P>
            </section>
          </FadeInUp>
        ))}

        {/* Post-launch updates info */}
        <FadeInUp className="space-y-4" delay={services.length * 0.2}>
          <section id="maintenance">
            <H2>Ongoing Maintenance & Support</H2>
            <P>
              Keep your website running smoothly with regular updates, backups,
              and technical support — providing peace of mind for busy business
              owners.
            </P>
            <P>
              We handle all technical upkeep so you can focus on your business.
              Our maintenance ensures your site stays secure, up-to-date, and
              performing at its best.
            </P>
            <P>
              After your website goes live, any additional updates or changes
              are charged on an hourly basis. To make this easier to manage, we
              offer flexible monthly update packages, giving you a set number of
              hours each month for content updates, design improvements, or
              adding new features.
            </P>
            <P>
              These packages keep your site fresh and aligned with your business
              needs, while giving you the convenience of predictable costs and
              dedicated support.
            </P>
            <P className="mt-2 font-semibold !text-primary">From £30/month</P>
          </section>
        </FadeInUp>
      </Container>
    </div>
  );
}
