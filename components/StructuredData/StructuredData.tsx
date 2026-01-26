"use client";

import Script from "next/script";

interface StructuredDataProps {
  name: string;
  url: string;
  logo: string;
  email: string;
  phone?: string;
  streetAddress?: string;
  city?: string;
  postalCode?: string;
  country?: string;
  description: string;
  openingHours?: string;
  sameAs?: string[];
}

export default function StructuredData({
  name,
  url,
  logo,
  email,
  phone,
  streetAddress,
  city,
  postalCode,
  country = "GB",
  description,
  openingHours = "Mo-Fr 09:00-18:00",
  sameAs = [],
}: StructuredDataProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name,
    image: logo,
    url,
    telephone: phone,
    email,
    address: {
      "@type": "PostalAddress",
      streetAddress,
      addressLocality: city,
      postalCode,
      addressCountry: country,
    },
    priceRange: "££",
    description,
    openingHours,
    sameAs,
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
