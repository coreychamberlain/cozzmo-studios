"use client";

import { Form } from "@/components/ui/form/Form";
import Input from "@/components/ui/form/Input";
import Textarea from "@/components/ui/form/Textarea";
import Select from "@/components/ui/form/Select";
import Button from "@/components/ui/form/Button";

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <Form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <Input type="text" name="name" placeholder="Your Name" required />
      <Input type="email" name="email" placeholder="Email Address" required />
      <Input type="tel" name="phone" placeholder="Phone Number" />
      <Select name="enquiry" required>
        <option value="">Enquiry Type</option>
        <option value="new-website">New Website</option>
        <option value="custom-build">Custom Build</option>
        <option value="existing-site">Existing Site/Integration</option>
        <option value="maintenance">Maintenance/Support</option>
        <option value="other">Other</option>
      </Select>
      <Textarea name="message" placeholder="Your Message" required />
      <Button type="submit">Send Message</Button>
    </Form>
  );
}
