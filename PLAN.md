# PLAN.md — Neo Eco Cleaning Website Rebuild

**Status:** Phase 0 (Discover and Plan). Awaiting your approval before any site code is written.
**Prepared:** 27 June 2026.
**Brand:** Neo Eco Cleaning, London commercial cleaning, block cleaning specialists.
**Tagline:** Clean Green, Live Clean.

British English throughout. No em-dashes anywhere in site copy.

---

## 0. What I verified before planning

| Item | Result |
| --- | --- |
| Node / npm | Node 20.15.0, npm 10.8.1 (fine for Next.js 15) |
| gcloud ADC | Works. `gcloud auth application-default print-access-token` succeeds. |
| GCP project | `radlabs-497004`, `aiplatform.googleapis.com` enabled |
| Imagen (photos) | **Confirmed working**: `imagen-4.0-fast-generate-001`, region `us-central1`. Test image generated (1408x768 PNG), on-brief. |
| Veo (video) | **Confirmed working**: `veo-3.0-fast-generate-001`, `:predictLongRunning`. Test 6s 16:9 MP4 generated (2.5 MB). |
| Live site crawl | Thin GoDaddy Website Builder site. |
| Public sitemaps | `sitemap.xml` is an index pointing to `sitemap.website.xml` (lists only `/`) and `sitemap.ols.xml` (lists only `/ols/products`). |
| robots.txt | `User-agent: *` / `Disallow: /404`. No sitemap directive. |
| Supplied real content | 10 case-study markdown files (9 Watford jet-washing jobs at "The Reeds", 1 Chiswick Gate carpet clean), each with a predefined `/blog/...` slug, primary/secondary keywords and alt text. All for Rendall & Rittner (Ms Jennifer Mann, Senior Property Manager). MVN Block Management referenced. |

**Important gap:** Google Search Console reportedly knows ~24 URLs (~12 indexed), but the public sitemaps expose only 2 (`/` and `/ols/products`). I cannot enumerate the other indexed URLs from outside. I need the GSC Pages export to complete the redirect map safely (see Open Questions Q2). I will not guess and silently 404 a ranking URL.

---

## 1. Tech stack (locked, per brief)

- Next.js 15 App Router, TypeScript strict, React Server Components.
- Static generation (SSG) for every page. `generateStaticParams` on all dynamic routes. Primary content in initial HTML.
- Tailwind CSS with a CSS-variable design-token layer.
- `next/image` everywhere (explicit width/height, `sizes`, `priority` on LCP image only, lazy elsewhere).
- `next/font` self-hosted fonts (no render-blocking external font requests).
- Single typed data layer in `/src/data` as the only source of truth.
- Motion: lightweight. CSS scroll reveals + a tiny IntersectionObserver `Reveal` wrapper, CSS scroll-snap carousel, a small count-up hook. No heavy animation library unless justified. Respect `prefers-reduced-motion`.
- Deploy target: Vercel or static export, same domain `https://neoecocleaning.co.uk`.

---

## 2. Full sitemap / page map (every route)

**Total: 52 indexable pages** + `sitemap.xml`, `robots.txt`, `llms.txt`.

### Core
- `/` Home

### Services (hub + 7)
- `/services` (hub, cards to each)
- `/services/block-cleaning` **(flagship pillar, deepest page)**
- `/services/pressure-washing`
- `/services/jet-washing`
- `/services/carpet-cleaning`
- `/services/window-cleaning`
- `/services/end-of-tenancy-cleaning`
- `/services/stone-cleaning`

### Areas (hub + 11)
- `/areas` (hub)
- `/areas/north-london`
- `/areas/central-london`
- `/areas/west-london`
- `/areas/east-london`
- `/areas/hertfordshire`
- `/areas/watford` *(added: backed by 9 real Watford projects)*
- `/areas/barnet`
- `/areas/enfield`
- `/areas/camden`
- `/areas/islington`
- `/areas/haringey`

### Service x Area money pages (16) — route pattern `/[service]/[area]`
See section 3 for the curated matrix and the anti-thin-content rules.

### Trust, conversion and content
- `/our-work` (projects + clients + testimonials folded in)
- `/about` (story, why choose us, eco commitment, team experience)
- `/faq` (hub; FAQs also embedded on service / area / service-area pages)
- `/contact` (quote form + map + NAP)
- `/blog` (index)
- `/blog/[slug]` x 10 (the supplied case studies, slugs preserved exactly)

### Decision: testimonials
Only 2 genuine testimonials exist (Victoria Wharf, Research House). A standalone `/testimonials` page would be thin, so testimonials are folded into `/our-work` and surfaced on the home page. No thin standalone page.

---

## 3. Service x Area matrix (the SEO money pages)

Curated, evidence-backed, not exploded. Refined from the brief's starting set: I dropped the vague bare-"London" duplicates (they would cannibalise `/areas/north-london` and `/areas/central-london`) and added **Watford and Hertfordshire jet washing** plus **West London carpet cleaning**, because we hold real, unique project evidence for those exact combinations. Every page below can be written genuinely distinct and locally useful. If, while writing, any combination cannot be made truly unique and useful, it gets dropped rather than shipped thin.

| Service | Areas | Count | Evidence / angle |
| --- | --- | --- | --- |
| Block Cleaning | north-london, central-london, barnet, enfield, camden, islington, haringey | 7 | Core entity cluster; North London is the flagship money page |
| Pressure Washing | north-london, camden, islington | 3 | Distinct from jet washing; communal hard-surface focus |
| Jet Washing | north-london, watford, hertfordshire | 3 | Watford + Herts backed by 9 real case studies |
| Carpet Cleaning | north-london, west-london | 2 | West London backed by the real Chiswick Gate project |
| **Total** | | **15** | |

(15 service-area pages. I had written 16 above as an upper bound; final committed set is 15. Watford and Hertfordshire are kept on jet washing only, not duplicated onto pressure washing, to avoid near-duplicate pages between two closely related services.)

**Each `/[service]/[area]` page carries (driven from the data layer, never spun):**
- Answer-first opening paragraph naming the service, the company and the specific area.
- The service explained in that local context (building types, borough character).
- At least one truthful local proof point (e.g. real Watford / Chiswick projects, or nearby developments).
- An area-specific mini-FAQ (3 to 5 Q&As) with FAQPage schema.
- Internal links to the parent service page, the parent area page, and 2 to 3 sibling money pages.
- Unique title and meta description.
- BreadcrumbList schema.

**Flagship canonical decision (protects the existing #1 for "block cleaning in north london"):**
- Canonical target for the exact query = **`/block-cleaning/north-london`**.
- `/services/block-cleaning` (pillar) and the home page both prominently use the phrase and link to `/block-cleaning/north-london` with descriptive anchors.
- The home URL does not change, so the term's current relevance on `/` is retained during transition while the dedicated page earns the position. No redirect risk to the page that ranks today.

---

## 4. Redirect map (`next.config` `async redirects()`)

**Confirmed from crawl:**

| Old URL | New URL | Status | Reason |
| --- | --- | --- | --- |
| `/` | `/` | 200 | Home stays home (preserves the #1 ranking page) |
| `/ols/products` | `/services` | 301 | GoDaddy online store removed; services hub is the closest intent |
| `/ols/*` (any) | `/services` | 301 | Catch all old store paths |
| `/404` | (Next.js 404) | n/a | Handled natively |

**Provisional GoDaddy-default guesses (to confirm against GSC, may add/adjust):** `/home` to `/`, `/about-us` to `/about`, `/contact-us` to `/contact`, `/blog-1` to `/blog`. These are only added once confirmed by the GSC export so we never invent a redirect that masks a real page.

**Blocker:** The complete, safe redirect map needs the GSC "Pages" export (or the list of the ~24 known URLs). Until then I will implement the confirmed rows above and a tested catch for `/ols/*`, and finalise the rest the moment you provide the export. No indexed URL will be allowed to 404.

---

## 5. Keyword to page mapping (primary / secondary)

| Page | Primary keyword | Secondary |
| --- | --- | --- |
| `/` | block cleaning North London | commercial cleaning London, communal area cleaning, eco cleaning |
| `/services/block-cleaning` | block cleaning | communal area cleaning, block management cleaning, estate cleaning, managing agents |
| `/block-cleaning/north-london` | block cleaning in north london *(canonical money page)* | communal cleaning North London, blocks of flats cleaning |
| `/block-cleaning/{barnet,enfield,camden,islington,haringey}` | block cleaning {borough} | communal cleaning {borough}, managing agent cleaning {borough} |
| `/services/pressure-washing` | pressure washing London | communal pressure washing, forecourt cleaning |
| `/services/jet-washing` | jet washing London | communal jet washing, block paving cleaning, drain clearing |
| `/jet-washing/watford` | jet washing Watford | communal area pressure washing Watford, moss removal, Hertfordshire block cleaning |
| `/jet-washing/hertfordshire` | jet washing Hertfordshire | residential block jet washing Hertfordshire |
| `/services/carpet-cleaning` | communal carpet cleaning London | residential block carpet cleaning, hallway carpet cleaning |
| `/carpet-cleaning/west-london` | carpet cleaning West London | communal carpet cleaning Chiswick, block carpet cleaning |
| `/services/window-cleaning` | communal window cleaning London | block window cleaning |
| `/services/end-of-tenancy-cleaning` | end of tenancy cleaning London | move out cleaning |
| `/services/stone-cleaning` | stone cleaning London | facade stone cleaning, masonry cleaning |
| `/areas/north-london` | cleaning company North London | block cleaning North London, communal cleaning |
| `/areas/{borough}` | cleaning {borough} | block cleaning {borough}, communal cleaning {borough} |
| `/blog/[slug]` x10 | per the SEO pack in each case study (e.g. jet washing Watford, communal carpet cleaning London) | per file |

---

## 6. Schema plan (JSON-LD, validated structure)

| Scope | Type(s) |
| --- | --- |
| Site-wide (root layout) | `Organization` (name, url, logo, sameAs, contactPoint, email, telephone) |
| Home | `LocalBusiness` / `CleaningService` (areaServed list, priceRange, aggregateRating with real numbers only, openingHours, sameAs) |
| `/services/*` | `Service` (serviceType, provider, areaServed) |
| `/areas/*` | `LocalBusiness` scoped + `ItemList` of services offered in that area |
| `/[service]/[area]` | `Service` (areaServed = the area) + `FAQPage` + `BreadcrumbList` |
| `/blog/[slug]` | `BlogPosting` / `Article` + `BreadcrumbList` |
| `/faq` | `FAQPage` |
| `/our-work` | `ItemList` of projects (factual) |
| `/contact` | `LocalBusiness` + `ContactPage` |
| Deep pages | `BreadcrumbList` everywhere below top level |

Facts in schema are pulled from `/src/data/business.ts` so they stay byte-identical with the visible NAP. `aggregateRating` uses only the real rating and the real review count (see Open Questions Q1 and Q11).

---

## 7. Image and video asset manifest (Vertex AI)

**Tools (confirmed):** Imagen `imagen-4.0-fast-generate-001` for stills, Veo `veo-3.0-fast-generate-001` for short muted loops. Region `us-central1`. Script at `/scripts/generate-assets.ts` (Node + ADC token), output to `/public/media/...`, post-processed to AVIF/WebP at correct sizes, then wired through `next/image`. A `ASSETS.md` manifest will mark each asset real vs generated.

**Style rules for every prompt:** bright, clean, professional, UK context, eco/green undertone, real commercial cleaning, no text, no logos, no recognisable faces, no fabricated brand marks, no copyrighted landmarks.

**Stills to generate (Imagen):**
1. Home hero still (LCP fallback / poster): modern North London residential block exterior with green landscaping.
2. Communal interiors: pristine lobby, stairwell, corridor, bin store, car park.
3. Block cleaning in action (communal corridor / lobby).
4. Pressure washing and jet washing: forecourt, paving, driveway being jet washed (with before/after style pairs).
5. Carpet cleaning: communal hallway carpet.
6. Window cleaning, end-of-tenancy, stone cleaning: one representative each.
7. Area page headers: North / Central / West / East London and Watford streetscape vibes (generic, non-landmark).
8. Eco section: green, sustainable, natural cleaning imagery.
9. OG/social default image with brand feel (1200x630).
10. Service icons: NOT generated. A clean SVG icon set (e.g. Lucide) is used for crisp, consistent icons.

**Video to generate (Veo, muted, looping, with poster + reduced-motion fallback):**
1. Home hero background loop: slow cinematic glide through a clean communal lobby (6s, 16:9). Already test-generated successfully.
2. Optional second loop: jet washing in action (kept short, only if it does not hurt CWV). Each clip ships with a poster image and is disabled under `prefers-reduced-motion`.

**Real vs generated:** The 10 case studies reference real before/after photos that I do not hold as image files. Plan: generate tasteful illustrative imagery for those posts and clearly mark them generated in `ASSETS.md`, with a TODO to swap in the genuine job photos (real photos beat generated for trust). Same for client logos: placeholders only, never fabricated (Open Questions Q6, Q7).

---

## 8. Component inventory

**Layout:** `Header` (slim utility bar with phone + email, nav, "Get a free quote" CTA), `Footer` (NAP, service links, area links, social), `JsonLd` (typed schema injector), `Container`, `Section`.

**UI:** `Hero` / `VideoHero` (poster + reduced-motion), `Button`, `ServiceCard`, `StatCounter`, `FeatureBlock` (alternating image/text), `TestimonialCarousel` (CSS scroll-snap), `FAQAccordion` (+ FAQPage schema), `QuoteForm` (validated, service + area dropdowns), `AreaList`, `Breadcrumbs`, `CTABanner`, `TrustStrip` (client names, logos as TODO placeholders), `ProjectCard`, `BlogCard`, `MapEmbed`, `Reveal` (IntersectionObserver scroll animation).

**Data layer (`/src/data`):** `business.ts` (NAP + constants, single source of truth), `services.ts`, `areas.ts`, `serviceAreas.ts` (the 15 money-page content entries), `projects.ts`, `clients.ts`, `testimonials.ts`, `faqs.ts`, `blog.ts` (the 10 case studies). All pages read from these; no inline business facts.

---

## 9. Brand and design tokens

- **Palette:** deep eco green as dominant (approx `#0F5132` family), a fresh accent (lime/spring green), one strong neutral (charcoal/ink), generous off-white. Final hex tuned in build for WCAG AA contrast.
- **Type:** geometric sans for headings (candidate: Sora or Space Grotesk), highly legible sans for body (candidate: Inter). Self-hosted via `next/font`.
- **Feel:** premium, clean, lots of white space, subtle motion. Layout and interaction inspired by the reference template; brand, content and palette fully original. All ecommerce elements from the reference (cart, shop, pricing, dollar prices) are dropped. The CTA is "Get a free quote" / "Book a free site survey", never "Add to cart".
- I will follow the `frontend-design` skill conventions for token and styling discipline.

---

## 10. SEO and content engineering notes

- Unique `<title>` (50 to 60 chars) and meta description (150 to 160) per page via `generateMetadata` reading the data layer.
- One `<h1>` per page, logical h2/h3, OG + Twitter tags, self-referencing canonical, descriptive human URLs.
- Internal linking web: services link to area pages and vice versa; the flagship is linked widely; breadcrumbs on deep pages.
- Local SEO: identical NAP site-wide, `areaServed`, "Service areas" borough list, map on contact and area pages, repeatable "Leave a Google review" CTA.
- GEO/AEO: answer-first opening paragraphs, quotable FAQ answers with FAQPage schema, consistent entity language, `llms.txt` at root summarising who Neo Eco is, services, areas, differentiators and contact details.
- Performance: pre-render everything, sized images, lazy below the fold, self-hosted fonts, minimal client JS, explicit dimensions to avoid CLS. Target Lighthouse Performance 95+, SEO ~100, Best Practices 95+, Accessibility 95+.
- Content rules: British English, no em-dashes, no fabricated stats / prices / quotes / certifications / logos. Anything unverified becomes a clearly marked TODO in `TODO.md`.

---

## 11. Open questions (what I need from you)

These do not block me from starting the build, but they must be resolved before launch. I will proceed with the documented defaults and a marked TODO for each unless you tell me otherwise on review.

1. **Google Business Profile NAP.** Exact business name, phone grouping (brief says `07768 066860`), and any address. Model as service-area business (no fake street address) unless GBP lists one. Please confirm or share the GBP link.
2. **GSC URL inventory (priority).** Export of the "Pages" report or the list of the ~24 known URLs, so the redirect map covers every indexed URL. Public sitemaps only show `/` and `/ols/products`.
3. **24/7 vs office hours conflict.** The brief lists "24/7 availability" as a USP, but every case study states "Office hours Monday to Friday, 9:00 to 19:00". Which should schema `openingHours` and the copy use? Default plan: present 24/7 as service availability in copy, set schema `openingHours` to Mon to Fri 09:00 to 19:00, until you confirm GBP hours.
4. **Real social profile URLs** for Instagram and Facebook (handle `neoecocleaning`). I will not invent URLs; placeholder TODO until provided.
5. **GBP review link** for the "Leave a Google review" CTA.
6. **Client logos** (MVN Block, Rendall & Rittner): provide real assets, or keep a text-only trust strip? I will not fabricate logos.
7. **Real job photos** for the 10 case studies: provide files to swap in, or ship generated illustrative images marked as such?
8. **Quote form endpoint.** Where should submissions go (Formspree, email service, custom API)? I will wire a configurable env var placeholder so nothing is invented.
9. **Deploy + domain.** Confirm deploy to Vercel on `https://neoecocleaning.co.uk` so canonicals and redirects use the right origin.
10. **Map embed.** Google Maps embed (needs an API key) vs a keyless static map for a service-area business with no public pin. Default: lightweight static map / area illustration unless you provide a key.
11. **Review count** for `aggregateRating` (real number only; brief says rating 5.0, small count).

---

## 12. Build order (after approval)

1. Scaffold Next.js 15 + TS + Tailwind, design tokens, fonts, base layout (Header, Footer, NAP, schema components).
2. Data layer fully populated as the source of truth.
3. Reusable components.
4. Vertex AI asset generation script + manifest; generate and wire assets.
5. Pages: Home, Services hub + service pages, Areas hub + area pages, Service x Area matrix, Our Work, About, FAQ, Contact, Blog + 10 posts.
6. Technical SEO layer: metadata, JSON-LD, sitemap, robots, llms.txt, redirects.
7. Quote/contact form with validation and configurable endpoint.
8. QA: `next build` clean, fix all warnings, Lighthouse pass, report scores. Verify every route 200 and every known old URL resolves.

---

## Acceptance criteria (I will verify before calling it done)

- `next build` zero errors and zero warnings; no hydration errors.
- Every route 200; every known old/indexed URL resolves (200 or 301); nothing 404s.
- Unique title, meta, single h1, correct canonical, OG/Twitter per page.
- Valid JSON-LD on the right pages.
- `sitemap.xml`, `robots.txt`, `llms.txt` present and correct.
- No thin or duplicate pages; each service-area page genuinely distinct.
- NAP identical site-wide.
- All images via `next/image`, sized, LCP prioritised; real-vs-generated manifest present.
- Lighthouse: Performance 95+, SEO ~100, Best Practices 95+, Accessibility 95+ on home and a service-area page.
- Mobile-first responsive; nav, forms, carousels work on touch.
- No fabricated facts, prices, quotes, certifications or fake logos. TODOs tracked in `TODO.md`.

---

**Next step: your review.** Approve the plan (or tell me what to change), and ideally answer Q2 (GSC URLs) and Q1/Q3 (NAP, hours) so the SEO-preservation layer is exact. On approval I proceed to Phase 1.
