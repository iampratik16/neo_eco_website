/** Navigation structure for header and footer. */
import { services } from "./services";
import { regions, priorityBoroughs } from "./areas";

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Areas", href: "/areas" },
  { label: "Our Work", href: "/our-work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const serviceNav: NavItem[] = services.map((s) => ({ label: s.name, href: `/services/${s.slug}` }));

export const areaNav: NavItem[] = [
  ...regions.map((a) => ({ label: a.name, href: `/areas/${a.slug}` })),
  ...priorityBoroughs.map((a) => ({ label: a.name, href: `/areas/${a.slug}` })),
];

export const footerColumns: { title: string; items: NavItem[] }[] = [
  {
    title: "Services",
    items: services.map((s) => ({ label: s.name, href: `/services/${s.slug}` })),
  },
  {
    title: "Areas",
    items: [
      { label: "North London", href: "/areas/north-london" },
      { label: "Central London", href: "/areas/central-london" },
      { label: "West London", href: "/areas/west-london" },
      { label: "Watford", href: "/areas/watford" },
      { label: "Barnet", href: "/areas/barnet" },
      { label: "Camden", href: "/areas/camden" },
      { label: "Islington", href: "/areas/islington" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About us", href: "/about" },
      { label: "Our work", href: "/our-work" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
