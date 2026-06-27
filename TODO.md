# TODO — before launch

These are the clearly-marked items that need real data or a decision before go-live. Nothing here is fabricated in the site; each is a placeholder or a sensible default awaiting confirmation.

## Critical for SEO preservation
- [ ] **Google Search Console URL inventory.** Export the GSC "Pages" report (or list the ~24 known URLs). The public sitemap only exposed `/` and `/ols/products`. Add a 301 for every remaining indexed URL in [`next.config.ts`](next.config.ts) `redirects()` so nothing 404s. Confirmed redirects already in place: `/ols/products` and `/ols/*` to `/services`, `/home` to `/`.
- [ ] **Confirm deploy domain** is `https://neoecocleaning.co.uk` so canonicals, sitemap and OG URLs resolve correctly (set in [`src/data/business.ts`](src/data/business.ts) `url`).

## Business facts to verify (Google Business Profile)
- [ ] **Phone grouping** `07768 066860` — confirm against the live GBP and match byte-for-byte ([`src/data/business.ts`](src/data/business.ts)).
- [ ] **Address** — currently modelled as a service-area business (no street address). If GBP lists an address, add it verbatim.
- [ ] **Review count** for `aggregateRating` — currently `2` (real). Update if GBP shows more. Never inflate.
- [ ] **Opening hours** — set to 24/7 per your decision. Confirm this matches GBP.

## Real assets and links to supply
- [ ] **Social profile URLs** (Instagram, Facebook) — `business.social` is empty (TODO). Do not invent; drop in real links and they appear site-wide + in schema `sameAs`.
- [ ] **Google review link** — `business.reviewUrl` is empty; the footer "Leave us a Google review" button currently points to `/contact` until set.
- [ ] **Client logos** (Rendall & Rittner, MVN Block) — currently text-only cards (no fabricated logos). Supply real logo files and wire into [`src/data/clients.ts`](src/data/clients.ts).
- [ ] **Real before/after job photos** — all imagery is Vertex AI generated and illustrative (see [`ASSETS.md`](ASSETS.md)). Replace the `case-*` images and others with genuine job photos for maximum trust and local relevance.
- [ ] **Blog post dates** — approximate where the source did not state one ([`src/data/blog.ts`](src/data/blog.ts) `FILES`). Confirm real publish dates (only Chiswick Gate, 18 June 2022, was stated).

## Form and integrations
- [ ] **Quote form endpoint** — set `QUOTE_FORWARD_URL` (Formspree, webhook, etc.) in the environment so submissions are delivered. Without it the API accepts and logs only (see [`src/app/api/quote/route.ts`](src/app/api/quote/route.ts)).
- [ ] **Map** — Contact page uses a keyless OpenStreetMap embed. Swap for a Google Maps embed if you provide an API key.

## Notes / deviations from the brief
- Built on **Next.js 16** (create-next-app@latest current stable) rather than 15. Superset of every functional requirement (App Router, RSC, SSG, Metadata API, next/image, next/font). Tell me if you specifically need 15.
- Service x Area matrix finalised at **15 curated pages** (added Watford/Hertfordshire jet washing and West London carpet, backed by your real case studies; dropped vague bare-"London" duplicates). See [`PLAN.md`](PLAN.md) section 3.
