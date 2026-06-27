/**
 * Projects / developments. Factual references only (no fabricated praise).
 * These are presented as statements of work carried out, not invented testimonials.
 */

export type Project = {
  slug: string;
  name: string;
  location: string;
  service: string; // primary service slug
  area: string; // area slug
  image: string;
  summary: string;
  /** Optional link to the related case-study blog post slug. */
  caseStudy?: string;
  client?: string;
};

export const projects: Project[] = [
  {
    slug: "ashleigh-court-watford",
    name: "Ashleigh Court",
    location: "Watford, Hertfordshire",
    service: "jet-washing",
    area: "watford",
    image: "case-jet-courtyard",
    summary:
      "A four-day communal courtyard restoration after five years without jet washing: deep-rooted growth and almost 60 sacks of mud cleared, blocked drains opened, then re-sanding recommended to protect the surface.",
    caseStudy: "ashleigh-court-watford-jet-washing-case-study",
    client: "Rendall & Rittner",
  },
  {
    slug: "the-reeds-watford",
    name: "The Reeds",
    location: "Watford, Hertfordshire",
    service: "jet-washing",
    area: "watford",
    image: "case-jet-entrance",
    summary:
      "Communal entrance, step and path jet washing across an entire development, including Badminton, Canterbury, Cheltenham, Eton, Lancing, Roedean, Wellington and Westminster Houses.",
    caseStudy: "badminton-house-watford-entrance-jet-washing",
    client: "Rendall & Rittner",
  },
  {
    slug: "chiswick-gate",
    name: "Chiswick Gate",
    location: "West London",
    service: "carpet-cleaning",
    area: "west-london",
    image: "case-carpet-hallway",
    summary:
      "Communal carpet cleaning across Blocks A, F and G in a single planned visit, lifting tired hallway carpets back to life with minimal disruption to residents.",
    caseStudy: "chiswick-gate-communal-carpet-cleaning",
    client: "Rendall & Rittner",
  },
  {
    slug: "chelsea-bridge-wharf",
    name: "Chelsea Bridge Wharf",
    location: "Central London",
    service: "block-cleaning",
    area: "central-london",
    image: "service-block-cleaning",
    summary: "Communal cleaning at the Chelsea Bridge Wharf residential development.",
  },
  {
    slug: "victoria-wharf",
    name: "Victoria Wharf",
    location: "London",
    service: "block-cleaning",
    area: "north-london",
    image: "communal-stairwell",
    summary:
      "Communal cleaning at Victoria Wharf, including extended deep cleaning of communal areas during the peak of the Covid outbreak.",
  },
  {
    slug: "research-house",
    name: "Research House",
    location: "London",
    service: "block-cleaning",
    area: "north-london",
    image: "service-block-cleaning",
    summary:
      "Communal cleaning at Research House throughout our tenure, with the building consistently left in outstanding condition.",
  },
];

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
