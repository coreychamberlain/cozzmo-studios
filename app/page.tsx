import PageTransition from "@/components/PageTransition";
import Hero from "@/components/home/Hero";
import ClientServices from "@/components/home/ClientServices";

export default function Home() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <ClientServices />
    </PageTransition>
  );
}
