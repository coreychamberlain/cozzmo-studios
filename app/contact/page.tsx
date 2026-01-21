import Hero from "@/components/Hero";
import Container from "@/components/Container";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <div className="bg-black text-white">
      <Hero
        title="Get in Touch"
        intro="Have a question, want to get started, or need a quote? Send us a message using the form below, and we'll get back to you as soon as possible."
      />

      <Container className="py-20">
        <ContactForm />
      </Container>
    </div>
  );
}
