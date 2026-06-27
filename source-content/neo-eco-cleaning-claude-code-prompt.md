# Claude Code Build Prompt — Neo Eco Cleaning Website

Paste everything below this line into Claude Code. It is written to be run in phases. Do not skip Phase 0.

---

## ROLE

You are a senior web engineer who ships Awwwards-level marketing sites and a technical SEO specialist. You build in Next.js, you obsess over Core Web Vitals, and you treat search visibility as a first-class engineering requirement, not an afterthought. You write clean, typed, production code with zero runtime errors and zero hydration warnings.

## OBJECTIVE

Build a brand new marketing and lead-generation website for **Neo Eco Cleaning** (https://neoecocleaning.co.uk), a London commercial cleaning company whose core niche is **block cleaning** (communal-area cleaning for blocks of flats and managing agents). The site must:

1. Preserve and grow the existing search position (the brand already ranks #1 organically for "block cleaning in north london" and is cited inside Google's AI answers across several North London boroughs). Lose nothing, gain a lot.
2. Win local SEO across North London, Central London and the target boroughs.
3. Win AI / generative-engine visibility (Google AI Overviews, ChatGPT, Perplexity) so that "best block cleaning in North London" and similar queries surface Neo Eco first.
4. Look and feel premium, modern and trustworthy, taking layout and interaction inspiration from a reference template (details below) while being fully original in content and brand.

This is British English throughout. No em-dashes anywhere in the copy.

---

## PHASE 0 — DISCOVER AND PLAN BEFORE WRITING ANY CODE

Do this first and do not write site components until I approve the plan.

1. **Crawl the existing live site** at https://neoecocleaning.co.uk. Fetch the homepage, `/sitemap.xml`, `/robots.txt`, and follow every internal link you can find. The current site is a thin GoDaddy Website Builder site, but Google Search Console reports ~24 known URLs with ~12 indexed. Capture every existing URL, its current title and meta description, and any real content. The goal is a complete inventory of what currently exists so nothing that ranks gets broken.
2. **Produce `PLAN.md`** in the repo root containing:
   - The full sitemap / page map you intend to build (every route).
   - A **redirect map table**: every old URL → new URL, with status code (301 for permanent moves, keep same path where possible). Any old URL that has impressions or is indexed must resolve, never 404.
   - The keyword-to-page mapping (which page targets which primary and secondary keywords).
   - The schema plan (which structured-data types go on which pages).
   - The image and video asset manifest (what needs generating via Vertex AI, see Phase 4).
   - The component inventory.
   - Open questions or anything you need from me.
3. **Stop and wait for my review of `PLAN.md`.** Once I approve, proceed to Phase 1.

Do not generate content, components or images before the plan is approved.

---

## TECH STACK (non-negotiable)

- **Next.js 15, App Router, TypeScript, React Server Components.**
- **Static generation (SSG)** for every marketing page. Use `generateStaticParams` for dynamic routes so everything is pre-rendered HTML. No client-side-only rendering of primary content (it must be crawlable and in the initial HTML).
- **Tailwind CSS** for styling. Set up a small design-token layer (CSS variables for brand colours, spacing, radii) so the look is consistent and easy to tune.
- **next/image** for all imagery, with explicit width/height, `sizes`, priority on the LCP image, and lazy loading everywhere else.
- **next/font** for self-hosted fonts (no render-blocking external font requests).
- TypeScript strict mode on. ESLint clean. No `any` in committed code.
- A single typed data layer in `/src/data` as the source of truth: `services.ts`, `areas.ts`, `projects.ts`, `clients.ts`, `testimonials.ts`, `faqs.ts`, `business.ts` (NAP and constants). All pages read from these. Never hard-code business facts inline.
- Accessibility: semantic HTML, one `<h1>` per page, logical heading order, alt text on every image, keyboard-navigable nav and forms, WCAG AA contrast.

Deploy target: assume Vercel or static export. Make `next build` pass cleanly with zero warnings.

---

## BUSINESS FACTS (single source of truth — put these in `/src/data/business.ts`)

Keep Name, Address, Phone (NAP) **byte-for-byte identical everywhere** on the site and in schema. Consistency is a direct local-SEO ranking signal.

- **Business name:** Neo Eco Cleaning
- **Email:** hello@neoecocleaning.co.uk
- **Phone:** 07768 066860 (international form +44 7768 066860). VERIFY this grouping against the live Google Business Profile before launch and use whatever GBP shows, identically.
- **Website:** https://neoecocleaning.co.uk
- **Social handle:** neoecocleaning (link the real Instagram/Facebook profiles; do not invent URLs, leave a clearly-marked TODO if a profile URL is unknown).
- **Address:** This appears to be a service-area business with no public street address. Model it in schema as a service-area business (`areaServed`, no fake street address). Pull the exact NAP from the live Google Business Profile and match it exactly. If GBP lists an address, use it verbatim.
- **Google rating:** 5.0 (small review count). Display real review count only; never inflate it.

**Positioning / USPs:**
- Block cleaning specialists. ~70% of revenue is block cleaning, pressure washing, jet washing and carpet cleaning.
- 50+ years combined team experience.
- Team includes ex-Hilton Hotel cleaners.
- "Quality Guarantee": any complaint resolved at no additional cost.
- 24/7 availability.
- Genuinely eco-friendly: environmentally friendly products, low carbon footprint.
- Trusted by managing agents and major residential developments.

**Services** (primary first):
1. Block Cleaning (communal-area cleaning for blocks of flats and managing agents) — the flagship.
2. Pressure Washing
3. Jet Washing
4. Carpet Cleaning
5. Window Cleaning
6. End-of-Tenancy Cleaning
7. Stone Cleaning
(Treat block cleaning / communal-area cleaning / estate cleaning / block management cleaning as the core entity cluster. Jet washing and pressure washing are related but searched separately; give each its own page and cross-link, but write distinct content so they are not duplicates.)

**Areas covered:**
- Headline focus: North London, Central London, London as a whole.
- Priority boroughs (Google's AI already associates the brand with these): **Barnet, Enfield, Camden, Islington, Haringey.**
- Also covered: West London, East London, Hertfordshire and surrounding areas.

**Clients and trust signals (use carefully and truthfully):**
- Clients / managing agents: **MVN Block** (mvnblock.co.uk), **Rendall & Rittner** (rendallandrittner.co.uk).
- Notable projects / developments: **Chelsea Bridge Wharf**, **Victoria Wharf**, **Research House**.
- IMPORTANT TRUTHFULNESS RULE: You may list these as clients/projects in a "trusted by" strip and a projects section. Do NOT fabricate quotes or testimonials attributed to these named real companies. Only use the genuine testimonials supplied below, and present project references as factual statements ("communal cleaning at Chelsea Bridge Wharf"), not invented praise. If you want client logos, leave clearly-marked placeholders for me to drop in real assets; do not generate fake logos.

**Genuine testimonials available** (building-level, from the company profile):
- Victoria Wharf: praised Neo Eco for spending extended hours cleaning filthy communal areas during the peak of the Covid outbreak.
- Research House: the building cleaned by Neo Eco was always left in outstanding condition; professional, prompt, great attention to detail throughout their tenure.
Reword these into clean testimonial cards attributed to the building/site, not to invented individuals. Leave room to add more real reviews later, and add a prominent "Leave us a Google review" CTA (links to the GBP review URL — leave a TODO for the exact link).

---

## INFORMATION ARCHITECTURE (refine in PLAN.md, this is the intended shape)

Top navigation: Home · Services · Areas · Our Work · About · Contact, plus a persistent phone number and a "Get a Free Quote" button.

Routes:

- `/` Home
- `/services` Services hub (cards linking to each service)
- `/services/block-cleaning` (flagship, deepest page)
- `/services/pressure-washing`
- `/services/jet-washing`
- `/services/carpet-cleaning`
- `/services/window-cleaning`
- `/services/end-of-tenancy-cleaning`
- `/services/stone-cleaning`
- `/areas` Areas hub
- `/areas/north-london`, `/areas/central-london`, `/areas/west-london`, `/areas/east-london`, `/areas/hertfordshire`
- `/areas/barnet`, `/areas/enfield`, `/areas/camden`, `/areas/islington`, `/areas/haringey`
- **Service × Area landing pages (the SEO money pages)** — see the dedicated section below for the exact, curated set and the anti-thin-content rules. Route pattern: `/[service]/[area]` (e.g. `/block-cleaning/north-london`, `/block-cleaning/barnet`).
- `/our-work` Projects + clients (Chelsea Bridge Wharf, Victoria Wharf, Research House; MVN Block, Rendall & Rittner)
- `/about` About + Why Choose Us + eco commitment
- `/testimonials` (or fold into /our-work)
- `/faq` FAQ hub (also embed relevant FAQs on service/area pages)
- `/blog` and `/blog/[slug]` if there are existing blog posts to migrate (check the crawl; preserve any indexed blog URLs and their slugs exactly)
- `/contact` Contact + quote form
- `robots.txt`, `sitemap.xml` (generated), `llms.txt`

---

## DESIGN DIRECTION

**Reference for layout and interaction (copy the structure and polish, not the content or brand):**
https://cleaning-wcopilot.webflow.io/

Take from it:
- Sticky header with a slim top utility bar (phone, email), centred logo/nav, and a clear primary CTA.
- A bold hero: large headline, supporting line, primary CTA, strong hero image/video, and a "trusted by" or rating strip just below.
- A "Why choose us" feature row with icon cards.
- Animated stat counters (e.g. 50+ years experience, blocks cleaned, 5.0 rating, 24/7).
- A numbered "What we do / Our services" grid of service cards with hover state and "View more".
- Alternating image-left / image-right feature blocks for the flagship services.
- A prominent contact / quote section with a form (service dropdown, area dropdown).
- A testimonials carousel.
- A latest-blog row (only if a blog exists).
- A closing CTA banner.
- A rich footer with NAP, service links, area links and social.

Drop everything ecommerce from the reference (cart, shop, products, pricing tables with dollar prices). Neo Eco is a quote-based services business, not a shop. The CTA is "Get a free quote" / "Book a survey", not "Add to cart".

**Brand:** Eco-led, premium, clean. Lean into a confident green-led palette (deep eco green as the dominant colour, a fresh accent, generous white space, one strong neutral). Tagline in play: "Clean Green, Live Clean". Modern geometric sans for headings, highly legible sans for body. Subtle, tasteful motion (fade/slide on scroll, counter animations, card hovers) using a lightweight approach (CSS or a small library like Framer Motion) without hurting CWV. Premium does not mean heavy; keep the JS bundle lean.

Read and follow the `frontend-design` skill if available in this environment for token and styling discipline.

---

## SEO REQUIREMENTS (this is the priority — engineer it, do not bolt it on)

The site's existing Search Console data tells us exactly what to fix. Honour all of this.

### A. SEO preservation (do not lose current rankings)
- Keep the domain. Match or 301-redirect every existing indexed URL. No indexed URL may 404. Put redirects in `next.config` (`async redirects()`), driven by the redirect map from `PLAN.md`.
- Protect the #1 ranking for "block cleaning in north london": the page that targets it (`/block-cleaning/north-london` and/or `/services/block-cleaning`) must be strong, fast and clearly on-topic. Decide one canonical target for that exact query in the plan and make the other internally link to it.
- Preserve any existing blog post URLs and titles exactly if a blog is found in the crawl.

### B. Fix the indexing gap (half the pages were not indexed)
The current site has ~12 of 24 pages not indexed across multiple reasons. That is almost always thin content, duplicates, or crawl issues. Engineer against it:
- Every page must have substantial, genuinely unique primary content (target 500+ meaningful words on service and service×area pages, more on the flagship). No near-duplicate pages.
- Correct self-referencing `canonical` on every page.
- A clean, complete XML sitemap listing only canonical, indexable URLs, auto-generated at build.
- `robots.txt` that allows crawling and points to the sitemap.
- No accidental `noindex`. No orphan pages: every page reachable via internal links.
- After deploy, I will request indexing in Search Console; build so there is nothing blocking it.

### C. On-page SEO (every page)
- One unique `<title>` (~50-60 chars) and unique meta description (~150-160 chars), keyword-led, location-led where relevant. Use the Next.js Metadata API (`generateMetadata`) reading from the data layer.
- One `<h1>` stating the page's primary keyword + location naturally. Logical h2/h3 structure.
- Open Graph and Twitter card metadata on every page, with a relevant OG image.
- Descriptive, keyword-aware, human URLs (already defined in the IA).
- Internal linking: services link to relevant area pages and vice versa; the flagship page is linked from many places; breadcrumb navigation on deep pages.
- Image alt text that describes the image and includes location/service context where natural (never stuffed).

### D. Local SEO
- **LocalBusiness / CleaningService schema** in JSON-LD on the homepage and a consistent Organization schema site-wide, including: name, url, telephone, email, image/logo, `priceRange`, `areaServed` (list North London, Central London, the boroughs, etc.), `aggregateRating` (only real numbers), `sameAs` (real social profiles), and opening hours (24/7 if accurate).
- Area pages and service×area pages each carry `areaServed`-scoped Service schema and, where relevant, LocalBusiness schema.
- Embed a Google Map (or static map) on Contact and area pages. Show NAP in the footer on every page, identical to GBP.
- Add a "Service areas" section listing boroughs with internal links.
- Add a clear, repeatable "Leave a Google review" CTA (the reviews gap, 2 reviews vs a competitor's 1,355, is the weakest signal; make requesting reviews effortless).

### E. AI / Generative-Engine Optimisation (GEO/AEO)
The brand is already cited in Google's AI answers. Reinforce it:
- **Answer-first content:** on key pages, the opening paragraph should directly and factually answer the query a person or AI would ask, e.g. "Neo Eco Cleaning is a specialist block cleaning company serving North London and the surrounding boroughs..." Lead with the answer, then expand. AI engines extract the first clear, factual statement.
- **FAQ blocks with FAQPage schema** on service, area and service×area pages, answering real questions ("How much does block cleaning cost in North London?", "Who is the best block cleaning company in North London?", "Do you clean communal areas for managing agents?"). Write concise, quotable answers.
- Use clear entity language: consistently name the service, the boroughs, and the company so the entity associations strengthen.
- `BreadcrumbList` schema on deep pages.
- Add an `llms.txt` at the site root summarising who Neo Eco Cleaning is, the services, the areas served, the differentiators and the contact details, in clean markdown, so LLM crawlers get an authoritative summary.
- Keep facts consistent across the site and schema (AI engines cross-check consistency before citing a source).

### F. Performance and Core Web Vitals (a ranking factor)
- Target green CWV: LCP < 2.5s, CLS < 0.1, INP good. Pre-render everything, optimise and correctly size all images via next/image, set explicit dimensions to avoid layout shift, lazy-load below-the-fold media, self-host fonts, minimise client JS, defer non-critical scripts.
- Run a Lighthouse pass at the end and report scores. Aim for 95+ on Performance, SEO and Best Practices, 100 on SEO if possible.

### G. Titles and the data dip
- Write compelling, click-worthy titles and metas on the pages that already rank (the report flags low CTR from page 5/6 positions and titles that need tuning).
- Note in the plan that there was a small impression dip into June; nothing to fix in code, just do not introduce regressions.

---

## SERVICE × AREA LANDING PAGES (the single biggest SEO lever — handle with care)

This is where the report says the opportunity is: a large pool of impressions already exists on borough + service terms where the site sits on page 5/6. Pulling a focused cluster onto page one is what turns impressions into enquiries. But the indexing gap warns us that thin, spun, near-duplicate location pages will simply not get indexed and will waste the effort. So:

**Build a curated, high-quality matrix, not an exploded one.** Start with this focused set (refine in PLAN.md):

- Block Cleaning × { North London, Central London, Barnet, Enfield, Camden, Islington, Haringey }
- Pressure Washing × { North London, London, Camden, Islington }
- Jet Washing × { North London, London }
- Carpet Cleaning × { North London, London }

Each `/[service]/[area]` page MUST be genuinely unique and locally useful, not a template with the area name swapped in. Drive uniqueness from the data layer so each page carries:
- An area-specific opening paragraph that answers the query first and references the real local context (the borough, well-known estates/developments where relevant, the kind of buildings there).
- The service explained in that local context.
- At least one area-relevant proof point or project reference where truthful (e.g. North London / nearby developments).
- An area-specific mini-FAQ (3-5 Q&As) with FAQPage schema.
- Internal links to the parent service page, the parent area page, and 2-3 sibling pages.
- A unique title and meta.
- Real, varied content. If you cannot write genuinely distinct, useful content for a given combination, drop that combination from the matrix rather than ship a thin page.

Implement as a dynamic route with `generateStaticParams`, but back every combination with real, hand-quality content fields in the data layer (an entry per combination, or rich per-service and per-area content composed into something distinct). Do not auto-spin.

---

## IMAGERY AND VIDEO VIA VERTEX AI (use the existing ADC)

I have already linked Google Cloud Application Default Credentials (ADC) to this environment. Use them. Do not ask me for keys.

1. Confirm auth works: `gcloud auth application-default print-access-token` should succeed. Confirm/set the project with `gcloud config get-value project` (ask me only if no project is set).
2. Write a generation script at `/scripts/generate-images.ts` (or `.py`) that calls **Vertex AI Imagen** (Imagen 3 / `imagegeneration` on the `aiplatform` endpoint) via ADC to produce all site imagery, and saves optimised assets to `/public/images/...`. For short hero/background motion, optionally use **Veo** to generate a few-second muted, looping clip; keep file sizes small and provide a poster image and `prefers-reduced-motion` fallback.
3. Generate brand-consistent, photorealistic UK imagery. Style guidance for the prompts: bright, clean, professional, UK context, eco/green undertone, real-world commercial cleaning, no text, no logos, no recognisable real people's faces, no fabricated brand marks. Examples of needed assets (finalise the manifest in PLAN.md):
   - Hero: a clean, modern North London residential block exterior / pristine communal stairwell and lobby.
   - Block cleaning: spotless communal corridor, lobby, bin store, car park.
   - Pressure washing / jet washing: before-and-after style of a driveway, forecourt, paving being jet washed.
   - Carpet cleaning: communal carpet / hallway being cleaned.
   - Window cleaning, end-of-tenancy, stone cleaning: representative clean shots.
   - Area pages: tasteful North London / Central London streetscape vibes (generic, not landmark-dependent, no copyrighted landmarks framed as endorsements).
   - Eco section: green, sustainable, natural cleaning imagery.
   - OG/social default image with brand feel.
4. **Use real supplied photos where I provide them** (real job photos always beat generated ones for trust and for local relevance). Where I have not supplied a real asset, generate one. Leave a clearly-labelled manifest of which images are real vs generated so I can swap later.
5. Compress everything (WebP/AVIF), correct dimensions, and wire through next/image.

If Imagen or Veo access fails for any reason, stop and report the exact error and the `x-deny-reason` if present, rather than silently substituting stock or placeholders.

---

## CONTENT GUIDELINES

- British English. No em-dashes. Plain, human, confident language a property manager would trust. Not salesy fluff, not keyword-stuffed.
- Lead with the customer's problem (communal areas that let a building down, managing agents needing reliable contractors) and Neo Eco's answer.
- Weave primary keywords in naturally: block cleaning, communal area cleaning, communal cleaning, block management cleaning, estate cleaning, pressure washing, jet washing, carpet cleaning, plus the boroughs and "North London" / "Central London" / "London".
- Every primary page should make the case to two audiences: managing agents / freeholders / blocks of flats (B2B, the core), and property owners.
- CTAs throughout: "Get a free quote", "Book a free site survey", "Call us", with the phone number and the quote form always one click away.
- Do not invent statistics, certifications, accreditations, prices or quotes. If a trust claim is not in the business facts above, leave a TODO for me rather than fabricate it.

---

## BUILD ORDER (after PLAN.md is approved)

1. Scaffold Next.js 15 + TS + Tailwind, design tokens, fonts, base layout (header, footer, NAP, schema components).
2. Data layer (`/src/data/*`) fully populated as the source of truth.
3. Reusable components (Hero, ServiceCard, StatCounter, FeatureBlock, TestimonialCarousel, FAQAccordion + schema, QuoteForm, AreaList, Breadcrumbs, CTA banner).
4. Vertex AI image/video generation script + asset manifest; generate and wire assets.
5. Build pages: Home → Services hub + service pages → Areas hub + area pages → Service×Area matrix → Our Work → About → FAQ → Contact → (Blog if migrating).
6. Technical SEO layer: metadata on every route, JSON-LD components, sitemap, robots, llms.txt, redirects in next.config.
7. Forms: quote/contact form with validation and a working submission target (leave the endpoint configurable; do not invent a backend, wire to a clearly-marked env var / placeholder I can connect).
8. QA pass (below). Run `next build`, fix all warnings. Run Lighthouse, report scores.

## ACCEPTANCE CRITERIA (verify before telling me it's done)

- [ ] `next build` passes with zero errors and zero warnings; no hydration errors in the browser console.
- [ ] Every route returns 200; every old/indexed URL from the crawl resolves (200 or 301 to its new home); nothing 404s.
- [ ] Every page has a unique title, unique meta description, one h1, correct canonical, OG/Twitter tags.
- [ ] Valid JSON-LD on the right pages (Organization, LocalBusiness/CleaningService, Service, FAQPage, BreadcrumbList) — paste the homepage and one service×area page JSON-LD into Google's Rich Results Test mentally / validate structure.
- [ ] `sitemap.xml`, `robots.txt`, `llms.txt` present and correct.
- [ ] No thin or duplicate pages; the service×area pages are each genuinely distinct.
- [ ] NAP identical site-wide and matches the intended GBP entry.
- [ ] All images via next/image, sized, lazy where appropriate, LCP image prioritised; Vertex-generated assets in place with a real-vs-generated manifest.
- [ ] Lighthouse: Performance 95+, SEO ~100, Best Practices 95+, Accessibility 95+ on the homepage and a service×area page.
- [ ] Mobile-first responsive; nav, forms and carousels work on touch.
- [ ] No fabricated facts, prices, quotes, certifications, or fake client logos. All TODOs for real assets/links clearly marked in a `TODO.md`.

---

## SUMMARY OF INTENT (the one line that matters)

The brand already has the demand: it ranks #1 for its flagship term and is cited in Google's AI answers across North London boroughs, but most of its impressions sit on page five because the old site is thin and half its pages are not indexed. Build a fast, schema-rich, genuinely useful site with a curated borough × service page set, preserve every existing URL, and make Neo Eco the obvious, citable answer to "best block cleaning in North London". Plan first, then build.
