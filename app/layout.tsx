import Footer from "@/components/Footer";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/NavBar";
import StructuredData from "@/components/StructuredData/StructuredData";

export const metadata = {
  title: "Cozzmo Studios - Websites, Email & Domain Setup",
  description:
    "Cozzmo Studios provides professional websites, business email, domain setup, and custom digital services to help businesses grow online.",

  // Open Graph (social share)
  openGraph: {
    title: "Cozzmo Studios - Websites, Email & Domain Setup",
    description:
      "Professional websites, business email, and complete online setup for businesses.",
    url: "https://www.cozzmo-studios.co.uk", // replace with your real domain
    siteName: "Cozzmo Studios",
    images: [
      {
        url: "https://www.cozzmo-studios.co.uk/img/og-image.png", // your new black share image
        width: 1200,
        height: 630,
        alt: "Cozzmo Studios - Custom Websites, Business Email & Complete Online Setup",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  // Twitter card
  twitter: {
    card: "summary_large_image",
    title: "Cozzmo Studios - Websites, Email & Domain Setup",
    description:
      "Professional websites, business email, and complete online setup for businesses.",
    images: ["https://www.cozzmo-studios.co.uk/img/og-image.png"], // same as OG image
  },

  // General SEO
  keywords: [
    "websites for businesses",
    "business email setup",
    "domain registration",
    "digital services",
    "Cozzmo Studios",
  ],
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased transition-colors duration-300">
        <Providers>
          <Navbar />
          <main className="pt-24">{children}</main>
          <Footer />
        </Providers>
        <StructuredData
          name="Cozzmo Studios"
          url="https://cozzmo-studios.co.uk"
          logo="https://cozzmo-studios.co.uk/img/og-image.png"
          email="hi@cozzmo-studios.co.uk"
          description="Professional websites, business email, domain setup, and custom digital services for small businesses."
        />
      </body>
    </html>
  );
}
