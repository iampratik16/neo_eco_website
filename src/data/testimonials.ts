/**
 * Genuine testimonials only, attributed to the building/site (not invented individuals).
 * Reworded from the company profile. Do NOT add fabricated quotes.
 * Leave room to add more real Google reviews later.
 */

export type Testimonial = {
  source: string; // building / site
  location: string;
  quote: string;
  service: string; // related service slug
};

export const testimonials: Testimonial[] = [
  {
    source: "Victoria Wharf",
    location: "London",
    quote:
      "Neo Eco spent extended hours cleaning our communal areas during the peak of the Covid outbreak, going well beyond the usual scope to keep residents safe.",
    service: "block-cleaning",
  },
  {
    source: "Research House",
    location: "London",
    quote:
      "Throughout their tenure the building was always left in outstanding condition. Professional, prompt and with great attention to detail.",
    service: "block-cleaning",
  },
];
