/**
 * Single source of truth for Neo Eco Cleaning business facts (NAP + constants).
 * Keep Name, Address, Phone byte-for-byte identical everywhere on the site and in schema.
 * Anything marked TODO must be verified against the live Google Business Profile before launch.
 */

export const business = {
  name: "Neo Eco Cleaning",
  legalName: "Neo Eco Cleaning",
  tagline: "Block cleaning specialists, North London",
  shortDescription:
    "Specialist block cleaning and communal-area cleaning for managing agents and freeholders across North London, Central London and the surrounding boroughs.",

  url: "https://neoecocleaning.co.uk",
  email: "hello@neoecocleaning.co.uk",

  // Phone — verify the grouping against the live GBP before launch (TODO).
  phone: {
    display: "07768 066860",
    international: "+44 7768 066860",
    e164: "+447768066860",
    href: "tel:+447768066860",
  },

  // Service-area business: no public street address. Modelled via areaServed in schema.
  address: {
    locality: "London",
    region: "Greater London",
    country: "GB",
    countryName: "United Kingdom",
  },

  // Approximate North London service centroid, used only for the area map view (not asserted as a premises).
  geo: { lat: 51.5908, lng: -0.1427 },

  // Real numbers only. Verify the review count against GBP (TODO).
  rating: { value: 5.0, count: 2 },

  // Confirmed by client: genuinely 24/7.
  hours: {
    label: "24/7",
    humanLabel: "Open 24 hours, 7 days a week",
    schema: "Mo-Su 00:00-23:59",
  },

  priceRange: "££",

  founded: "2018",

  // Real profile URLs unknown — do not invent. TODO: drop in real links.
  social: {
    instagram: "", // TODO: real Instagram URL for @neoecocleaning
    facebook: "", // TODO: real Facebook URL for Neo Eco Cleaning
    handle: "neoecocleaning",
  },

  // TODO: exact Google Business Profile review link.
  reviewUrl: "",

  usps: [
    {
      title: "Block cleaning specialists",
      body: "Communal-area cleaning is what we do best. Around 70% of our work is block cleaning, pressure washing, jet washing and carpet cleaning for managing agents.",
    },
    {
      title: "50+ years combined experience",
      body: "Our team brings more than fifty years of combined cleaning experience, including ex-Hilton Hotel cleaners who hold every job to a hotel standard.",
    },
    {
      title: "Quality Guarantee",
      body: "If something is not right, we put it right. Any complaint is resolved at no additional cost. That is our promise to every building we look after.",
    },
    {
      title: "Genuinely eco-friendly",
      body: "We clean with environmentally friendly products and low-carbon methods, letting technique and high-pressure water do the work rather than harsh chemicals.",
    },
    {
      title: "Available 24/7",
      body: "Communal areas do not keep office hours and neither do we. We are available around the clock, every day of the year.",
    },
    {
      title: "Trusted by managing agents",
      body: "We are trusted by managing agents and major residential developments to keep blocks of flats clean, safe and presentable.",
    },
  ],

  stats: [
    { value: "Since 2018", label: "Serving managing agents across London" },
    { value: "70%", label: "Of our work is block and communal cleaning" },
    { value: "50+ yrs", label: "Combined team experience" },
    { value: "24/7", label: "We work when your building needs us" },
  ],
} as const;

export type Business = typeof business;
