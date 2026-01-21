import Footer from "@/components/Footer";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/NavBar";

export const metadata = {
  title: "Cozzmo Studios – Websites, Email & Domain Setup",
  description:
    "Cozzmo Studios provides websites, business email, domain setup, and optional custom digital services for small businesses.",
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
      </body>
    </html>
  );
}
