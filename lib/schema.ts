import { SITE, FAQ, PRICING } from "@/content/landing";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/icon.png`,
    description: SITE.description,
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: SITE.contactEmail,
      areaServed: "AU",
      availableLanguage: "en",
    },
  };
}

export function getSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE.name,
    operatingSystem: "Web",
    applicationCategory: "BusinessApplication",
    description: SITE.description,
    offers: PRICING.tiers.map((t) => ({
      "@type": "Offer",
      name: `${t.name} (${t.label})`,
      price: t.price,
      priceCurrency: PRICING.currency,
      url: `${SITE.url}/#pricing`,
    })),
    aggregateRating: undefined,
  };
}

export function getFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.a,
      },
    })),
  };
}
