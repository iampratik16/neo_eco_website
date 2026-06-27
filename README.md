# Neo Eco Cleaning

Marketing and lead-generation website for **Neo Eco Cleaning**, a London commercial cleaning company specialising in block cleaning (communal-area cleaning for blocks of flats and managing agents).

Built as a fast, schema-rich, SEO-first site: static-generated Next.js, a single typed data layer, and AI-generated brand imagery and video via Google Vertex AI.

> Clean Green, Live Clean.

## Stack

- **Next.js 16** (App Router, React Server Components, TypeScript strict)
- **Tailwind CSS v4** with a CSS-variable design-token layer (`src/app/globals.css`)
- **Static generation (SSG)** for every marketing page (`generateStaticParams`, `dynamicParams = false`)
- `next/image` (AVIF/WebP) and `next/font` (self-hosted Sora + Inter)
- JSON-LD structured data, generated `sitemap.xml`, `robots.txt`, `llms.txt`
- Media generated with **Vertex AI**: Imagen 4 Fast (stills) and Veo 3.0 Fast (hero video)

## Project structure

```
src/
  app/                 # routes (App Router)
    [service]/[area]/  # service x area money pages (15 curated combinations)
    services/, areas/, blog/, our-work, about, faq, contact
    sitemap.ts, robots.ts, llms.txt/, api/quote/
  components/
    site/      # Header, Footer, Logo, JsonLd
    ui/        # Button, Container, Section, MediaImage, Reveal, Icon, Breadcrumbs...
    sections/  # Hero, Stats, ServiceCard, FeatureBlock, Testimonials, QuoteForm...
  data/        # source of truth: business, services, areas, serviceAreas, projects, blog...
  lib/         # seo (metadata), schema (JSON-LD), cn
scripts/
  generate-assets.mjs  # Vertex AI image + video generation
source-content/        # supplied real case-study markdown (rendered into /blog)
public/media/          # generated images + video
```

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (SSG)
npm run start    # serve the production build
npx eslint "src/**/*.{ts,tsx}"
```

## Regenerate media (Vertex AI)

Requires Google Cloud Application Default Credentials with Vertex AI enabled.

```bash
gcloud auth application-default print-access-token   # must succeed
node scripts/generate-assets.mjs           # all (skips existing)
node scripts/generate-assets.mjs --force   # regenerate everything
node scripts/generate-assets.mjs hero-lobby service-jet-washing   # specific ids
```

Outputs to `public/media` and writes a real-vs-generated manifest to `ASSETS.md`.

## Environment

See `.env.example`. The quote form posts to `/api/quote`, which forwards to `QUOTE_FORWARD_URL` if set (Formspree, a webhook, etc.), otherwise it accepts and logs only.

## Deploy

Targets Vercel (or any Node host) on `https://neoecocleaning.co.uk`. Redirects for the old GoDaddy URLs live in `next.config.ts`.

## Key docs

- `PLAN.md` — full sitemap, redirect map, keyword map, schema plan, asset manifest.
- `TODO.md` — items needing real data before launch (GBP NAP, GSC URLs, social links, real photos).
- `ASSETS.md` — generated-asset manifest (swap for real job photos where available).
