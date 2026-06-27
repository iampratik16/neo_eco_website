import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/data/business";
import { services, flagshipService } from "@/data/services";
import { regions, priorityBoroughs } from "@/data/areas";
import { projects } from "@/data/projects";
import { posts } from "@/data/blog";
import { generalFaqs } from "@/data/faqs";
import { pageMetadata } from "@/lib/seo";
import { localBusinessSchema } from "@/lib/schema";
import { JsonLd } from "@/components/site/JsonLd";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { HomeHero } from "@/components/sections/HomeHero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { FeatureCards } from "@/components/sections/FeatureCards";
import { Stats } from "@/components/sections/Stats";
import { ServicesGrid } from "@/components/sections/ServiceCard";
import { FeatureBlock } from "@/components/sections/FeatureBlock";
import { AreaList } from "@/components/sections/AreaList";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { BlogCard } from "@/components/sections/BlogCard";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTABanner } from "@/components/sections/CTABanner";
import { QuoteForm } from "@/components/sections/QuoteForm";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Block Cleaning North London",
    description:
      "Neo Eco Cleaning is a specialist block and communal-area cleaning company for managing agents across North London and Central London. Eco-friendly, 24/7, rated 5.0. Free survey.",
    path: "/",
    image: "hero-block-exterior",
  }),
  title: { absolute: "Neo Eco Cleaning | Block Cleaning Specialists, North London" },
};

const uspIcons: IconName[] = ["Building2", "Award", "ShieldCheck", "Leaf", "Clock", "BadgeCheck"];

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.caseStudy).slice(0, 3);
  const latestPosts = posts.slice(0, 3);

  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <HomeHero />
      <TrustStrip />

      {/* Why choose us */}
      <Section tone="cream">
        <SectionHeading
          eyebrow="Why Neo Eco"
          title="The communal cleaning partner managing agents rely on"
          intro="We are block cleaning specialists first. That focus, plus genuine eco credentials and a Quality Guarantee, is why agents and freeholders trust us with their buildings."
        />
        <div className="mt-14">
          <FeatureCards
            items={business.usps.map((u, i) => ({ icon: uspIcons[i], title: u.title, body: u.body }))}
          />
        </div>
      </Section>

      {/* Stats */}
      <Section tone="ink">
        <Reveal>
          <Stats stats={business.stats as unknown as { value: number; suffix?: string; decimals?: number; label: string }[]} />
        </Reveal>
      </Section>

      {/* Services */}
      <Section>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="What we do"
            title="Cleaning services for residential blocks"
            intro="One accountable team for the whole building, from routine communal cleaning to deep restoration."
            className="max-w-xl"
          />
          <Button href="/services" variant="outline" className="shrink-0">
            All services
            <Icon name="ArrowRight" className="size-4" />
          </Button>
        </div>
        <div className="mt-12">
          <ServicesGrid services={services} />
        </div>
      </Section>

      {/* Flagship feature blocks */}
      <Section tone="cream" className="space-y-20 lg:space-y-28">
        <FeatureBlock
          image="service-block-cleaning"
          imageAlt="Spotless communal corridor and lobby in a residential block of flats"
          eyebrow="Our flagship service"
          title="Block cleaning that keeps your building looking cared for"
          body={[
            flagshipService.answer,
            "We look after entrances, lobbies, hallways, stairwells, lifts, bin stores and external communal areas on a planned schedule, with before and after records so you can show leaseholders exactly where their service charge is going.",
          ]}
          bullets={["Reliable scheduled visits", "One contractor, every surface", "Before and after records", "Eco-friendly throughout"]}
        >
          <Button href="/services/block-cleaning">
            Explore block cleaning
            <Icon name="ArrowRight" className="size-4" />
          </Button>
        </FeatureBlock>

        <FeatureBlock
          reverse
          image="service-jet-washing"
          imageAlt="High pressure jet washing of communal block paving"
          eyebrow="Deep restoration"
          title="Jet washing that recovers neglected communal areas"
          body={[
            "When communal paving is left for years, moss, weeds and silt work into the joints and drains. Our jet washing recovers the surface and our planned visits stop it happening again.",
            "At Ashleigh Court in Watford we cleared almost 60 sacks of mud and deep-rooted growth over four days to restore a courtyard that had not been jet washed in five years.",
          ]}
          bullets={["Moss and weed removal", "Drain clearing", "Re-sanding to protect joints", "Eco-friendly power"]}
        >
          <Button href="/services/jet-washing">
            Explore jet washing
            <Icon name="ArrowRight" className="size-4" />
          </Button>
        </FeatureBlock>
      </Section>

      {/* Areas */}
      <Section>
        <SectionHeading
          eyebrow="Where we work"
          title="Covering North London, Central London and beyond"
          intro="North London is our heartland, with priority boroughs of Barnet, Enfield, Camden, Islington and Haringey, plus Central and West London, Watford and Hertfordshire."
        />
        <div className="mt-12">
          <AreaList items={[...regions, ...priorityBoroughs]} />
        </div>
      </Section>

      {/* Our work */}
      <Section tone="cream">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Our work"
            title="Real projects, real results"
            intro="A selection of communal cleaning and jet washing projects for managing agents."
            className="max-w-xl"
          />
          <Button href="/our-work" variant="outline" className="shrink-0">
            See our work
            <Icon name="ArrowRight" className="size-4" />
          </Button>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featuredProjects.map((p) => (
            <Reveal key={p.slug}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <SectionHeading eyebrow="In their words" title="What our clients say" />
        <div className="mt-12">
          <Testimonials />
        </div>
      </Section>

      {/* Quote section */}
      <Section tone="eco" id="quote">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Get started"
              title="Get a free site survey"
              intro="Tell us about your block and we will visit, agree a clear scope and send a fixed quote. No obligation."
            />
            <ul className="mt-8 space-y-4">
              {[
                "Free, no-obligation site survey and fixed quote",
                "Reliable scheduled cleaning with a consistent standard",
                "Eco-friendly products, safe for residents and pets",
                "Quality Guarantee: any complaint resolved at no extra cost",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-body">
                  <Icon name="CheckCircle2" className="mt-0.5 size-5 shrink-0 text-brand-600" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={business.phone.href} className="inline-flex items-center gap-2 font-semibold text-brand-800">
                <Icon name="Phone" className="size-5" />
                {business.phone.display}
              </a>
              <a href={`mailto:${business.email}`} className="inline-flex items-center gap-2 font-semibold text-brand-800">
                <Icon name="Mail" className="size-5" />
                {business.email}
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-3xl border border-line bg-surface p-6 shadow-xl shadow-brand-900/5 sm:p-8">
              <QuoteForm />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Blog */}
      <Section tone="cream">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Insights"
            title="From our case studies"
            intro="Lessons from real communal cleaning and jet washing projects."
            className="max-w-xl"
          />
          <Button href="/blog" variant="outline" className="shrink-0">
            All articles
            <Icon name="ArrowRight" className="size-4" />
          </Button>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {latestPosts.map((p) => (
            <Reveal key={p.slug}>
              <BlogCard post={p} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            align="left"
            eyebrow="Questions"
            title="Frequently asked questions"
            intro="A few of the things managing agents and freeholders ask us most."
          />
          <div>
            <FAQAccordion faqs={generalFaqs.slice(0, 6)} />
            <p className="mt-6 text-sm text-muted">
              More questions?{" "}
              <Link href="/faq" className="font-semibold text-brand-800 hover:underline">
                Read the full FAQ
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
