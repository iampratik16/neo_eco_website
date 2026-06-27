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
import { Icon } from "@/components/ui/Icon";
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

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.caseStudy).slice(0, 3);
  const latestPosts = posts.slice(0, 3);

  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <HomeHero />
      <TrustStrip />

      <Section>
        <SectionHeading
          align="left"
          eyebrow="Why agents choose us"
          title="We only do communal cleaning — and we do it properly"
          intro="Most of our work is block cleaning for managing agents. That focus means we know what leaseholders notice, what surveyors flag, and what your service charge needs to show for itself."
          className="max-w-2xl"
        />
        <div className="mt-12">
          <FeatureCards items={business.usps.map((u) => ({ title: u.title, body: u.body }))} />
        </div>
      </Section>

      <Section tone="ink">
        <Stats stats={[...business.stats]} />
      </Section>

      <Section tone="cream">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Services"
            title="What we clean"
            intro="One team for the whole building — routine visits and deep restoration when communal areas have been left too long."
            className="max-w-xl"
          />
          <Button href="/services" variant="outline" className="shrink-0">
            All services
          </Button>
        </div>
        <div className="mt-10">
          <ServicesGrid services={services} />
        </div>
      </Section>

      <Section className="space-y-20 lg:space-y-24">
        <FeatureBlock
          image="service-block-cleaning"
          imageAlt="Communal corridor and lobby in a residential block of flats"
          eyebrow="Block cleaning"
          title="Weekly communal cleaning on a schedule you can plan around"
          body={[
            flagshipService.answer,
            "Entrances, lobbies, hallways, stairwells, lifts, bin stores and external communal areas — with before and after records if you need to show leaseholders where the service charge goes.",
          ]}
          bullets={["Scheduled visits", "One contractor for every surface", "Before and after records", "Eco products throughout"]}
        >
          <Button href="/services/block-cleaning">Block cleaning details</Button>
        </FeatureBlock>

        <FeatureBlock
          reverse
          image="service-jet-washing"
          imageAlt="High pressure jet washing of communal block paving"
          eyebrow="Jet washing"
          title="Courtyards and paving that have been neglected for years"
          body={[
            "Moss, weeds and silt work into joints and drains when communal paving is left too long. We recover the surface and can set up planned visits so it does not happen again.",
            "At Ashleigh Court in Watford we cleared almost 60 sacks of mud and deep-rooted growth over four days — a courtyard that had not been jet washed in five years.",
          ]}
          bullets={["Moss and weed removal", "Drain clearing", "Re-sanding to protect joints", "Low-chemical methods"]}
        >
          <Button href="/services/jet-washing">Jet washing details</Button>
        </FeatureBlock>
      </Section>

      <Section tone="cream">
        <SectionHeading
          align="left"
          eyebrow="Coverage"
          title="North London is our base — we cover much of the capital"
          intro="Priority boroughs include Barnet, Enfield, Camden, Islington and Haringey. We also work across Central and West London, Watford and Hertfordshire."
          className="max-w-2xl"
        />
        <div className="mt-10">
          <AreaList items={[...regions, ...priorityBoroughs]} />
        </div>
      </Section>

      <Section>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Recent work"
            title="Projects we have completed"
            intro="A few communal cleaning and jet washing jobs for managing agents — with photos and write-ups where we have them."
            className="max-w-xl"
          />
          <Button href="/our-work" variant="outline" className="shrink-0">
            All projects
          </Button>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>

      <Section tone="cream">
        <SectionHeading align="left" eyebrow="Feedback" title="What building managers have said" className="max-w-xl" />
        <div className="mt-10">
          <Testimonials />
        </div>
      </Section>

      <Section id="quote">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Get in touch"
              title="Book a site survey"
              intro="Tell us about your block. We will walk the communal areas with you and send a fixed quote."
            />
            <div className="mt-8 flex flex-wrap gap-4 text-sm">
              <a href={business.phone.href} className="inline-flex items-center gap-2 font-semibold text-brand-800">
                <Icon name="Phone" className="size-5" />
                {business.phone.display}
              </a>
              <a href={`mailto:${business.email}`} className="inline-flex items-center gap-2 font-semibold text-brand-800">
                <Icon name="Mail" className="size-5" />
                {business.email}
              </a>
            </div>
          </div>
          <div className="border border-line bg-white p-6 sm:p-8">
            <QuoteForm />
          </div>
        </div>
      </Section>

      <Section tone="cream">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Case studies"
            title="Notes from the field"
            intro="What we learned on specific jobs — useful if you are dealing with something similar."
            className="max-w-xl"
          />
          <Button href="/blog" variant="outline" className="shrink-0">
            All articles
          </Button>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {latestPosts.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title="Common questions"
            intro="What managing agents and freeholders usually ask before they book us."
          />
          <div>
            <FAQAccordion faqs={generalFaqs.slice(0, 6)} />
            <p className="mt-6 text-sm text-muted">
              More questions?{" "}
              <Link href="/faq" className="font-semibold text-brand-800 hover:underline">
                Full FAQ
              </Link>
            </p>
          </div>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
