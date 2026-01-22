"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Form } from "@/components/ui/form/Form";
import Input from "@/components/ui/form/Input";
import Textarea from "@/components/ui/form/Textarea";
import Select from "@/components/ui/form/Select";
import Button from "@/components/ui/form/Button";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const statusRef = useRef<HTMLDivElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus("loading");
    setMessage("");

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      enquiry: formData.get("enquiry"),
      message: formData.get("message"),
      company: formData.get("company"), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setMessage("Thanks! Your message has been sent. We’ll be in touch shortly.");
        form.reset();
      } else {
        setStatus("error");
        setMessage(data.error); // always friendly message from API
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("error");
      setMessage(
        "Something went wrong. Please try again or email us directly at hi@cozzmo-studios.co.uk"
      );
    }
  };

  // Scroll to message with fixed header offset
  useEffect(() => {
    if ((status === "success" || status === "error") && statusRef.current) {
      const headerOffset = 80; // adjust to your header height
      const elementPosition = statusRef.current.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  }, [status]);

  return (
    <motion.div className="max-w-2xl mx-auto space-y-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Status message */}
      <AnimatePresence>
        {status !== "idle" && status !== "loading" && (
          <motion.div
            ref={statusRef}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            role="status"
            className={`rounded-lg border p-4 text-sm ${
              status === "success"
                ? "border-green-200 bg-green-50 text-green-800"
                : "border-red-200 bg-red-50 text-red-800"
            }`}
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>

      <Form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot */}
        <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-label="Leave this" />

        <Input type="text" name="name" placeholder="Your Name" required maxLength={80} />
        <Input type="email" name="email" placeholder="Email Address" required maxLength={120} />
        <Input type="tel" name="phone" placeholder="Phone Number" maxLength={30} />

        <Select name="enquiry" required>
          <option value="">Enquiry Type</option>
          <option value="new-website">New Website</option>
          <option value="custom-build">Custom Build</option>
          <option value="existing-site">Existing Site / Integration</option>
          <option value="maintenance">Maintenance / Support</option>
          <option value="other">Other</option>
        </Select>

        <Textarea name="message" placeholder="Your Message" required maxLength={1000} />

        <Button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending…" : "Send Message"}
        </Button>
      </Form>
    </motion.div>
  );
}
