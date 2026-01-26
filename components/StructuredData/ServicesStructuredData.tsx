import Script from "next/script";

export default function ServicesStructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Cozzmo Studios",
      "url": "https://cozzmo-studios.co.uk",
      "logo": "https://cozzmo-studios.co.uk/og-image.png"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cozzmo Studios Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Design",
            "description": "Custom professional websites built to grow your business online."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Email Setup",
            "description": "Professional email setup using your domain, looks credible and reliable."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Domain Registration",
            "description": "Domain setup and registration for your business."
          }
        }
      ]
    }
  };

  return (
    <Script
      id="services-json-ld"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
