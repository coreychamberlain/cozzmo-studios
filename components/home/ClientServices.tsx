"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
    <div className="bg-black py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-white mb-12">What We Offer</h2>
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
                  <h3 className="text-xl font-medium text-white">{service.title}</h3>
                  <p className="mt-2 text-zinc-300">{service.intro}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
