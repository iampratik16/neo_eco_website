# Neo Eco Cleaning — SEO Report

What was engineered into the new site to **preserve** existing rankings and **grow** organic, local and AI-engine visibility. The brief treated SEO as a first-class engineering requirement, not an afterthought, and the build reflects that.

**Headline result (Lighthouse, mobile):** SEO **100**, Accessibility **100**, Best Practices **100**, Performance **92–96** across the homepage, a service page, a service-area page and a blog post.

---

## 1. SEO preservation (do not lose what already ranks)

The brand already ranks #1 organically for "block cleaning in north london" and is cited in Google's AI answers across several North London boroughs. The priority was to lose nothing.

- **Domain kept.** Everything stays on `neoecocleaning.co.uk`.
- **Homepage URL unchanged.** The page that currently ranks for the flagship term keeps its URL and reinforces the phrase, so its relevance is retained while a dedicated page earns the position. No redirect risk to the ranking page.
- **301/308 redirects** for the old GoDaddy URLs, driven from `next.config.ts`:
  - `/ols/products` → `/services`
  - `/ols/*` → `/services` (catch-all for the old online store)
  - `/home`, `/home-1` → `/`
- **Flagship canonical decision.** `/block-cleaning/north-london` is the single canonical target for the exact query; the homepage and the `/services/block-cleaning` pillar both reinforce it and link to it with descriptive anchors, so internal authority concentrates on one page rather than competing.
- **No accidental `noindex`, no orphan pages.** Every page is reachable through internal links.

> **Outstanding (needs you):** the public sitemap only exposed 2 of the ~24 URLs Google Search Console knows about. To make the redirect map exhaustive (so no indexed URL ever 404s), I need the GSC "Pages" export. Confirmed redirects are already in place; the rest is one paste away. Tracked in `TODO.md`.

---

## 2. Content SEO

The old site had ~12 of 24 pages **not indexed** — almost always a sign of thin or duplicate content. The new content layer is engineered against exactly that.

- **53 pre-rendered pages**, each with substantial, genuinely unique primary content (500+ meaningful words on service and service-area pages, more on the flagship). No near-duplicates.
- **Answer-first writing.** Key pages open with a direct, factual statement that answers the query a person (or an AI engine) would ask, e.g. *"Neo Eco Cleaning is a specialist block cleaning company serving North London and the surrounding boroughs..."*. Engines extract the first clear, quotable sentence.
- **Keyword-to-page mapping.** Every page targets a specific primary keyword plus secondaries, location-led where relevant (block cleaning, communal area cleaning, block management cleaning, estate cleaning, pressure washing, jet washing, carpet cleaning, plus the boroughs and "North/Central London"). No two pages chase the same term.
- **Two audiences addressed on every primary page:** managing agents / freeholders / blocks of flats (the B2B core) and property owners.
- **10 real case studies** (Watford jet-washing cluster + Chiswick Gate carpet clean) published as blog posts with their original slugs and meta preserved — real, locally-relevant content that strengthens topical and local authority.
- **FAQ content** with concise, quotable answers on service, area and service-area pages (also feeds the FAQ rich results and AI answers).
- **Content integrity:** British English, no em-dashes, no fabricated stats, prices, quotes or certifications. Anything unverified is a clearly-marked TODO rather than invented.
- **Internal linking web:** services link to their area money-pages and back; the flagship is linked from many places; every service-area page links to its parent service, parent area and 2–3 sibling pages; breadcrumbs on every deep page.

### The service-area "money pages" (the biggest single lever)

A **curated matrix of 15** `/[service]/[area]` pages — not an exploded, spun set (which would just fail to index again). Each is genuinely unique and locally useful:

| Service | Areas |
| --- | --- |
| Block Cleaning | North London, Central London, Barnet, Enfield, Camden, Islington, Haringey |
| Pressure Washing | North London, Camden, Islington |
| Jet Washing | North London, Watford, Hertfordshire |
| Carpet Cleaning | North London, West London |

Each carries an area-specific answer-first intro, the service explained in local context, a real local proof point where truthful (e.g. the Watford and Chiswick projects), an area-specific mini-FAQ, unique title/meta, and breadcrumbs. `dynamicParams = false` means only these 15 render — no thin auto-generated combinations.

---

## 3. Technical SEO

- **Static generation (SSG) for every page.** All primary content is in the initial HTML and fully crawlable — no client-side-only rendering of content. `generateStaticParams` pre-renders all dynamic routes.
- **Unique titles and metas.** One `<title>` (~50–60 chars) and one meta description (~150–160), keyword- and location-led, generated per route via the Next.js Metadata API reading from the typed data layer.
- **One `<h1>` per page** stating the primary keyword + location naturally, with a logical h2/h3 hierarchy.
- **Self-referencing canonical** on every page.
- **Open Graph + Twitter Card** metadata on every page with a brand OG image.
- **`sitemap.xml`** auto-generated (51 canonical, indexable URLs only — services, areas, the 15 money pages, blog posts and core pages), with per-section priorities and change frequencies.
- **`robots.txt`** allows crawling, disallows `/api/`, points to the sitemap, sets the host.
- **`llms.txt`** at the root (see §6).
- **Clean, human, keyword-aware URLs** (`/services/block-cleaning`, `/block-cleaning/north-london`, `/areas/barnet`, `/blog/<slug>`).
- **Descriptive, non-stuffed image alt text** with location/service context.
- **Mobile-first responsive**; nav, forms and carousels work on touch.
- **Accessibility (WCAG AA)** — semantic HTML, alt text, keyboard-navigable nav/forms, AA contrast — which is both a UX and a search-quality signal. Lighthouse Accessibility 100.

---

## 4. Structured data (schema / JSON-LD)

Valid JSON-LD on the right pages, with all facts pulled from a **single source of truth** (`/src/data/business.ts`) so they stay byte-identical with the visible content — consistency is what AI engines and Google cross-check before trusting a source.

**Homepage / Contact** emit:
- `Organization` (site-wide)
- `CleaningService` / `LocalBusiness` with `areaServed` (every region + borough as `City` / `AdministrativeArea`), `aggregateRating` (real numbers only), `OpeningHoursSpecification` (24/7), `priceRange`, `ContactPoint`, `PostalAddress`
- `FAQPage` (+ `Question`/`Answer`)

**Service pages:** `Service` (serviceType, provider, areaServed) + `FAQPage` + `BreadcrumbList`.
**Service-area pages:** `Service` scoped to the area + `FAQPage` + `BreadcrumbList` (verified exactly **one** BreadcrumbList per page — no duplicates).
**Area pages:** scoped `Service` + `BreadcrumbList` + `FAQPage`.
**Blog posts:** `BlogPosting` / `Article` + `BreadcrumbList`.

This makes the site eligible for FAQ rich results, breadcrumb rich results, sitelinks, and the local/knowledge signals that feed Google's local pack and AI Overviews.

---

## 5. Local SEO

- **NAP consistency.** Name, phone and contact details come from one typed constant and render byte-identically site-wide and in schema — a direct local ranking signal. (Footer NAP on every page.)
- **`areaServed` everywhere** in schema: North London, Central London, West London, East London, Hertfordshire, Watford, and the priority boroughs Barnet, Enfield, Camden, Islington, Haringey.
- **Dedicated area pages (11)** and the **15 service-area money pages** with real local context (building types, well-known local developments, the Watford "The Reeds" cluster, Chiswick Gate).
- **A "Service areas" section** listing boroughs with internal links, on the home and area pages.
- **Map embed** on the Contact page, plus the area focus throughout.
- **Repeatable "Leave a Google review" CTA** — the reviews gap was the weakest signal, so requesting reviews is made effortless and prominent (footer + contact).
- **Truthful local proof:** real clients (Rendall & Rittner, MVN Block) and real projects (Ashleigh Court and The Reeds in Watford, Chiswick Gate in West London, plus Chelsea Bridge Wharf, Victoria Wharf, Research House) presented as factual statements of work, never invented praise.

> **Outstanding (needs you):** verify the exact Google Business Profile NAP and review count, add the real Instagram/Facebook URLs (they wire straight into schema `sameAs`), and the GBP review link. Tracked in `TODO.md`.

---

## 6. AI / Generative-Engine Optimisation (GEO / AEO)

The brand is already cited in Google's AI answers; the build reinforces that so "best block cleaning in North London" and similar surface Neo Eco first.

- **Answer-first content** so engines can extract a clean, factual first statement.
- **FAQ blocks with `FAQPage` schema** answering the real questions people and AIs ask ("How much does block cleaning cost in North London?", "Who is the best block cleaning company in North London?", "Do you clean communal areas for managing agents?") with concise, quotable answers.
- **`llms.txt`** at the site root — an authoritative markdown summary of who Neo Eco is, the services, the areas served, the differentiators and the contact details — so LLM crawlers get a clean, consistent source.
- **Consistent entity language** — the service, the boroughs and the company are named consistently across copy and schema, strengthening entity associations.
- **`BreadcrumbList`** on deep pages for clear topical structure.

---

## 7. Performance & Core Web Vitals (a ranking factor)

- **Lighthouse:** Performance 92–96, with **CLS 0**, low **INP/TBT**, fast **FCP (~0.9s)**.
- **`next/image`** for all imagery: AVIF/WebP, explicit dimensions (no layout shift), `sizes`, `priority` on the LCP image only, lazy-loading everywhere else.
- **Self-hosted fonts** via `next/font` (no render-blocking external font requests); the heading font uses `display: optional` so a slow network never triggers a late text repaint that would hurt LCP.
- **Minimal client JS**, mostly server components; tasteful CSS-driven motion.
- **Pre-rendered HTML** served from the edge on Vercel.

---

## 8. What is outstanding (to finish before/around launch)

These do not block the SEO foundation; each is a real-data input or a verification, tracked in `TODO.md`:

1. **GSC "Pages" export** → complete the redirect map so every indexed URL resolves (the one true preservation item).
2. **Google Business Profile**: confirm exact NAP, phone grouping, review count.
3. **Real social URLs + GBP review link** (wire into schema `sameAs` and the review CTA).
4. **Real client logos and job photos** (currently brand-consistent generated imagery, clearly marked).
5. After deploy: **request indexing in Search Console** — the site is built so nothing blocks it.

---

## Summary

The demand already exists: the brand ranks #1 for its flagship term and is cited in Google's AI answers, but most impressions sat on page five because the old site was thin and half its pages were not indexed. This rebuild replaces that with a fast, schema-rich, genuinely useful site: a curated borough × service page set, answer-first content, complete structured data, consistent local signals, an `llms.txt` for AI engines, and Core Web Vitals in the green — engineered to preserve every existing ranking and turn those page-five impressions into page-one enquiries.
