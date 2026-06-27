/** JSON-LD structured-data builders. Facts are pulled from the business data layer for consistency. */
import { business } from "@/data/business";
import { areas } from "@/data/areas";
import type { Service } from "@/data/services";
import type { Area } from "@/data/areas";
import type { BlogPost } from "@/data/blog";
import { SITE_URL, absoluteUrl, mediaUrl } from "./seo";

const ORG_ID = `${SITE_URL}/#organization`;
const BUSINESS_ID = `${SITE_URL}/#business`;

const areaServed = areas.map((a) => ({
  "@type": a.type === "borough" ? "City" : "AdministrativeArea",
  name: a.name,
}));

const sameAs = [business.social.instagram, business.social.facebook].filter(Boolean);

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: business.name,
    legalName: business.legalName,
    url: SITE_URL,
    email: business.email,
    telephone: business.phone.e164,
    logo: mediaUrl("og-default"),
    image: mediaUrl("hero-block-exterior"),
    description: business.shortDescription,
    slogan: business.tagline,
    ...(sameAs.length ? { sameAs } : {}),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: business.phone.e164,
      email: business.email,
      contactType: "customer service",
      areaServed: "GB",
      availableLanguage: "English",
    },
  };
}

/** LocalBusiness / CleaningService for the homepage and contact page. */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CleaningService",
    "@id": BUSINESS_ID,
    name: business.name,
    url: SITE_URL,
    email: business.email,
    telephone: business.phone.e164,
    image: [mediaUrl("hero-block-exterior"), mediaUrl("hero-lobby"), mediaUrl("service-jet-washing")],
    logo: mediaUrl("og-default"),
    description: business.shortDescription,
    slogan: business.tagline,
    priceRange: business.priceRange,
    address: {
      "@type": "PostalAddress",
      addressLocality: business.address.locality,
      addressRegion: business.address.region,
      addressCountry: business.address.country,
    },
    areaServed,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.rating.value,
      reviewCount: business.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
    parentOrganization: { "@id": ORG_ID },
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function serviceSchema(service: Service, area?: Area) {
  const name = area ? `${service.name} in ${area.name}` : `${service.name} in London`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: service.name,
    description: area ? `${service.name} for residential blocks in ${area.name}.` : service.metaDescription,
    provider: { "@type": "Organization", "@id": ORG_ID, name: business.name },
    areaServed: area ? { "@type": area.type === "borough" ? "City" : "AdministrativeArea", name: area.name } : areaServed,
    url: absoluteUrl(area ? `/${service.slug}/${area.slug}` : `/services/${service.slug}`),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: mediaUrl(post.image),
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", "@id": ORG_ID, name: business.name },
    publisher: { "@type": "Organization", "@id": ORG_ID, name: business.name, logo: { "@type": "ImageObject", url: mediaUrl("og-default") } },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    articleSection: post.category,
  };
}
