"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "E-commerce Store",
    description: "Next.js store with Stripe integration",
    link: "https://example.com",
  },
  {
    title: "Local Service Landing Page",
    description: "Responsive marketing site for a local business",
    link: "https://example.com",
  },
  {
    title: "Portfolio Showcase",
    description: "Modern portfolio site for a creative business",
    link: "https://example.com",
  },
];

export default function ClientPortfolio() {
  return (
    <div className="bg-black py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-white mb-12">Portfolio</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="block p-6 border border-zinc-800 rounded-xl bg-zinc-900 hover:bg-zinc-800 hover:scale-105 hover:border-indigo-500 transition-transform transition-colors shadow-lg"
              >
                <h3 className="text-xl font-medium text-white">{project.title}</h3>
                <p className="mt-2 text-zinc-300">{project.description}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
