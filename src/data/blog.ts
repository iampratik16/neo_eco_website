/**
 * Blog / case studies. Reads the supplied source-content markdown at build time,
 * parses the SEO pack and body, and renders the body to HTML.
 *
 * The supplied files are real project case studies. We preserve their slugs, titles and
 * meta exactly (SEO preservation), and only normalise the closing office-hours line to the
 * site-wide 24/7 availability the client confirmed.
 */
import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  category: string;
  excerpt: string;
  html: string;
  image: string;
  service: string;
  area: string;
  date: string; // ISO; approximate where the source did not state one (TODO confirm)
  readingMinutes: number;
};

type FileMeta = { file: string; image: string; service: string; area: string; date: string };

// Mapping of source files to media + taxonomy + publish date.
// Dates are approximate where the source did not state one. TODO: confirm real dates.
const FILES: FileMeta[] = [
  { file: "01-ashleigh-court-watford-jet-washing.md", image: "case-jet-courtyard", service: "jet-washing", area: "watford", date: "2024-04-15" },
  { file: "02-chiswick-gate-carpet-cleaning.md", image: "case-carpet-hallway", service: "carpet-cleaning", area: "west-london", date: "2022-06-18" },
  { file: "03-badminton-house-watford-jet-washing.md", image: "case-jet-entrance", service: "jet-washing", area: "watford", date: "2024-03-20" },
  { file: "04-canterbury-house-watford-jet-washing.md", image: "case-jet-steps", service: "jet-washing", area: "watford", date: "2024-03-18" },
  { file: "05-cheltenham-house-watford-jet-washing.md", image: "case-jet-entrance", service: "jet-washing", area: "watford", date: "2024-03-15" },
  { file: "06-eton-house-watford-jet-washing.md", image: "case-jet-courtyard", service: "jet-washing", area: "watford", date: "2024-03-12" },
  { file: "07-lancing-house-watford-jet-washing.md", image: "case-jet-steps", service: "jet-washing", area: "watford", date: "2024-03-10" },
  { file: "08-roedean-house-watford-jet-washing.md", image: "case-jet-entrance", service: "jet-washing", area: "watford", date: "2024-03-08" },
  { file: "09-wellington-house-watford-jet-washing.md", image: "case-jet-courtyard", service: "jet-washing", area: "watford", date: "2024-03-05" },
  { file: "10-westminster-house-watford-jet-washing.md", image: "case-jet-steps", service: "jet-washing", area: "watford", date: "2024-03-02" },
];

const CONTENT_DIR = path.join(process.cwd(), "source-content");

function field(block: string, label: string): string {
  const re = new RegExp(`${label}:\\s*(.+)`, "i");
  const m = block.match(re);
  return m ? m[1].trim() : "";
}

function parseFile(meta: FileMeta): BlogPost {
  const raw = fs.readFileSync(path.join(CONTENT_DIR, meta.file), "utf8");
  const commentMatch = raw.match(/<!--([\s\S]*?)-->/);
  const seo = commentMatch ? commentMatch[1] : "";

  const metaTitle = field(seo, "Meta title");
  const metaDescription = field(seo, "Meta description");
  const slugRaw = field(seo, "URL slug");
  const slug = slugRaw.replace(/^\/blog\//, "").replace(/\/$/, "");
  const primaryKeyword = field(seo, "Primary keyword");
  const category = field(seo, "Category");

  // Body = everything after the comment.
  let body = raw.replace(/<!--[\s\S]*?-->/, "").trim();

  // First markdown H1 becomes the display title; remove it so the page owns the single <h1>.
  const h1Match = body.match(/^#\s+(.+)$/m);
  const title = h1Match ? h1Match[1].trim() : metaTitle;
  body = body.replace(/^#\s+.+$/m, "").trim();

  // Normalise closing office-hours line to the confirmed site-wide 24/7 availability.
  body = body.replace(
    /Office hours are Monday to Friday,?\s*9:00 to 19:00\.?/gi,
    "We are available 24/7, every day of the year."
  );
  // Normalise internal links to canonical (no trailing slash).
  body = body.replace(/(\/(?:services|areas|blog)\/[a-z0-9-]+)\/(?=[)\s])/gi, "$1");

  const html = marked.parse(body, { async: false }) as string;

  // Excerpt from the first paragraph of plain text.
  const firstPara = body.split("\n\n").find((p) => p.trim() && !p.startsWith("#")) || "";
  const excerpt = firstPara.replace(/[*_`#>]/g, "").replace(/\[(.+?)\]\(.+?\)/g, "$1").trim().slice(0, 160);

  const words = body.split(/\s+/).length;
  const readingMinutes = Math.max(2, Math.round(words / 200));

  return {
    slug,
    title,
    metaTitle,
    metaDescription,
    primaryKeyword,
    category,
    excerpt,
    html,
    image: meta.image,
    service: meta.service,
    area: meta.area,
    date: meta.date,
    readingMinutes,
  };
}

export const posts: BlogPost[] = FILES.map(parseFile).sort((a, b) => (a.date < b.date ? 1 : -1));

export const postBySlug = (slug: string): BlogPost | undefined => posts.find((p) => p.slug === slug);
export const postSlugs = posts.map((p) => p.slug);
export const postsByArea = (area: string) => posts.filter((p) => p.area === area);
export const postsByService = (service: string) => posts.filter((p) => p.service === service);
