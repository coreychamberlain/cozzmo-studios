"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import P from "../typography/Paragraph";
import H2 from "../typography/H2";
import H3 from "../typography/H3";

const services = [
  {
    title: "Complete Website Setup",
    intro:
      "We create a 4–5 page website including a professional contact form. We also handle domain registration and hosting setup, but note these costs are separate.",
    slug: "complete-setup",
  },
  {
    title: "Custom Website Builds",
    intro:
      "Fully custom websites designed to your specifications. Unique layouts, features, or premium design collaboration available.",
    slug: "custom-builds",
  },
  {
    title: "Existing Sites & Integrations",
    intro:
      "We can take on your current website, update it, and integrate third-party tools like Shopify, WordPress, or custom HTML/CSS sites.",
    slug: "existing-sites",
  },
  {
    title: "Ongoing Maintenance & Support",
    intro:
      "Keep your website running smoothly with updates, backups, and technical support. Starting from £30/month.",
    slug: "maintenance",
  },
];

export default function ClientServices() {
  return (
    <>
      <div className="bg-black py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <H2>What We Can Help With</H2>
            <P className="mb-12">
              Whether you need a brand-new website, updates to an existing one,
              or ongoing support, we offer flexible services tailored to your
              business.
            </P>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="p-6 border border-zinc-800 rounded-xl bg-zinc-900 hover:bg-zinc-800 hover:scale-105 hover:border-primary transition-transform transition-colors shadow-lg"
                >
                  <Link href={`/services#${service.slug}`} scroll={false}>
                    <H3>{service.title}</H3>
                    <P className="mt-2">{service.intro}</P>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <div className="bg-black pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <H2>Free Consultation &amp; Discovery</H2>
            <P className="mb-12">
              Every business is different, so we start with a free consultation
              and discovery session to understand your goals, challenges, and
              what you actually need — not a one-size-fits-all package. We’ll
              talk through your business, your customers, and where you want to
              go online, whether that’s a simple professional website or a more
              bespoke setup.
            </P>
            <P>
              There’s no obligation and no jargon — just honest advice and clear
              recommendations. After the call, we’ll outline the best approach
              for your business, explain your options and give you a clear plan
              moving forward, so you can decide what works best for you.
            </P>
            <Link
              className="text-primary hover:underline"
              href={`/services#consultation`}
              scroll={false}
            >
              Learn more
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}
