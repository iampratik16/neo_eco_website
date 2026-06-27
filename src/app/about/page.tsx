import type { Metadata } from "next";
import { business } from "@/data/business";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/site/JsonLd";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureBlock } from "@/components/sections/FeatureBlock";
import { FeatureCards } from "@/components/sections/FeatureCards";
import { Stats } from "@/components/sections/Stats";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = pageMetadata({
  title: "About Neo Eco Cleaning | Block Cleaning Specialists",
  description:
    "Neo Eco Cleaning is a North London block cleaning specialist with 50+ years of combined team experience, genuine eco credentials and a Quality Guarantee.",
  path: "/about",
  image: "eco-green",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />

      <PageHero
        eyebrow="About us"
        title="Block cleaning specialists — not a general cleaning company"
        intro="We started in 2018 to do one thing well: keep the communal areas of residential blocks clean, safe and presentable for managing agents and freeholders."
        image="eco-green"
        imageAlt="Cleaning equipment ready for a communal block visit"
        breadcrumbs={[{ name: "About", path: "/about" }]}
      >
        <Button href="/contact" variant="accent" size="lg">
          Get in touch
        </Button>
      </PageHero>

      <Section>
        <div className="mx-auto max-w-3xl">
          <SectionHeading align="left" eyebrow="Our story" title="Why we focus on blocks" />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-body">
            <p>
              Neo Eco Cleaning is a specialist block cleaning company. Around 70% of our work is block cleaning,
              pressure washing, jet washing and carpet cleaning for managing agents and freeholders across North London,
              Central London and the surrounding boroughs. That focus is deliberate — it is what lets us deliver a
              consistent standard that generalist cleaners struggle to match.
            </p>
            <p>
              Our team brings more than fifty years of combined cleaning experience, including ex-Hilton Hotel cleaners
              who hold every communal area to a proper standard. We work with managing agents including Rendall &amp;
              Rittner and MVN Block.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="ink">
        <Stats stats={[...business.stats]} />
      </Section>

      <Section tone="cream">
        <FeatureBlock
          image="eco-green"
          imageAlt="Eco-friendly cleaning products used on communal areas"
          eyebrow="How we clean"
          title="Eco products, not harsh chemicals"
          body={[
            "We use environmentally friendly products and low-carbon methods as standard. Technique and high-pressure water do most of the work rather than harsh chemicals.",
            "In a communal setting, run-off from over-chemicalled cleaning can harm planting, drains and the residents who use the space. Minimising chemical use protects all three.",
          ]}
          bullets={["Environmentally friendly products", "Low chemical run-off", "Safe for residents and pets", "High-pressure water where it works"]}
        >
          <Button href="/services">Our services</Button>
        </FeatureBlock>
      </Section>

      <Section>
        <SectionHeading align="left" eyebrow="What we offer" title="How we work with agents" />
        <div className="mt-10">
          <FeatureCards items={business.usps.map((u) => ({ title: u.title, body: u.body }))} />
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
