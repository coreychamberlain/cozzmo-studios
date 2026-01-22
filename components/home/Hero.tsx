"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import ButtonPrimary from "@/components/ui/ButtonPrimary";
import ButtonSecondary from "@/components/ui/ButtonSecondary";

export default function Hero() {
  const headlineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6 },
    }),
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { delay: 1.2, duration: 0.6 } },
  };

  return (
    <div className="bg-black min-h-[70vh] flex flex-col justify-center">
      <Container className="space-y-6 md:space-y-8">
        {/* Headline */}
        <motion.h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
          {["Grow Your Business", "Online With Ease"].map((line, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={headlineVariants}
              className="block"
            >
              {line}
            </motion.span>
          ))}
          <motion.span
            custom={2}
            initial="hidden"
            animate="visible"
            variants={headlineVariants}
            className="block text-primary"
          >
            Custom Websites, Business Email &amp; Complete Online Setup
          </motion.span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="text-zinc-300 text-lg max-w-2xl"
        >
          We can help businesses of any size get online with fast with modern, professional websites — built to look great, perform well, and grow with your business. We handle everything from start to finish — domain registration, hosting setup, professional email configuration, and building your custom website. Get your complete online presence established with one trusted partner. Ready to get started?
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
          className="mt-6 flex flex-wrap gap-4"
        >
          <ButtonPrimary href="/contact">Get in Touch</ButtonPrimary>
          <ButtonSecondary href="/services">View Services</ButtonSecondary>
        </motion.div>
      </Container>
    </div>
  );
}
