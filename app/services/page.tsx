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
    extra: [
      "These sites are ideal for small businesses looking to establish a strong online presence quickly and affordably, with room to grow later if needed.",
    ],
    price: "From £450",
  },
  {
    title: "Custom & Bespoke Builds",
    slug: "custom-builds",
    intro:
      "Fully custom websites designed to your exact specifications. Whether you need unique layouts, custom features, or premium design collaboration, we can deliver a polished, professional site.",
    extra: [
      "Ideal for businesses wanting a completely unique online presence. We work with you to understand your vision and create a site that stands out.",
    ],
    price: "POA",
  },
  {
    title: "Existing Sites & Integrations",
    slug: "existing-sites",
    intro:
      "We can take on your current website and make improvements, updates, or fixes. This includes integrating third-party tools, updating content, or connecting platforms like Shopify, WordPress, or custom HTML/CSS sites.",
    extra: [
      "Whether you need minor edits or major enhancements, we can extend your site’s functionality and ensure everything works seamlessly.",
    ],
    price: "POA",
  },
  {
    title: "Ongoing Maintenance & Support",
    slug: "maintenance",
    intro:
      "Keep your website running smoothly with regular updates, backups, and technical support — providing peace of mind for busy business owners.",
    extra: [
      "Whether you need minor edits or major enhancements, we can extend your site’s functionality and ensure everything works seamlessly.",
      "We handle all technical upkeep so you can focus on your business. Our maintenance ensures your site stays secure, up-to-date, and performing at its best.",
      "After your website goes live, any additional updates or changes are charged on an hourly basis. To make this easier to manage, we offer flexible monthly update packages, giving you a set number of hours each month for content updates, design improvements, or adding new features.",
      "These packages keep your site fresh and aligned with your business needs, while giving you the convenience of predictable costs and dedicated support.",
    ],
    price: "From £30/month",
  },
  {
    title: "Professional Business Email Setup",
    slug: "email-setup",
    intro: "If you don’t need a website right now but want your business to look more professional, a custom email address is a great place to start. An email like you@yourbusiness.co.uk instantly builds trust, looks credible, and helps you stand out from competitors still using generic email providers.",
    extra: [
      "We handle the full setup for you — from registering or connecting your domain to configuring your email accounts securely across your devices. Whether you need a single inbox or multiple addresses for your team, we’ll make sure everything works smoothly and reliably from day one.",
      "It’s a simple, cost-effective way to professionalise your business communications, and it can always be expanded later if you decide to add a website or other digital services."
    ],
    price: "POA - Depends on requirements"
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-black text-white">
      <Hero
        title="Our Services"
        intro="Below is an overview of the services we offer and how we work. From fixed-price website builds to ongoing maintenance and custom projects, we keep things clear, flexible, and transparent."
        extra="Not sure what you need yet? No problem. We offer a free, no-obligation consultation to understand your business, your goals, and what will work best for you online. You’ll get clear advice, honest recommendations and a simple plan — no jargon, no pressure."
      />

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
              {service.extra?.map((item, idx) => (
                <P key={idx}>{item}</P>
              ))}
              <P className="mt-2 font-semibold !text-primary">
                {service.price}
              </P>
            </section>
          </FadeInUp>
        ))}
      </Container>
    </div>
  );
}
