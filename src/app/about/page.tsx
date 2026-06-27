import type { Metadata } from "next";
import { business } from "@/data/business";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/site/JsonLd";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureBlock } from "@/components/sections/FeatureBlock";
import { FeatureCards } from "@/components/sections/FeatureCards";
import { Stats } from "@/components/sections/Stats";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = pageMetadata({
  title: "About Neo Eco Cleaning | Eco Block Cleaning Specialists",
  description:
    "Neo Eco Cleaning is a North London block cleaning specialist with 50+ years of combined experience, genuine eco credentials and a Quality Guarantee. Clean Green, Live Clean.",
  path: "/about",
  image: "eco-green",
});

const uspIcons: IconName[] = ["Building2", "Award", "ShieldCheck", "Leaf", "Clock", "BadgeCheck"];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />

      <PageHero
        eyebrow="About us"
        title="Block cleaning specialists with an eco conscience"
        intro="Clean Green, Live Clean. We keep communal areas immaculate while treading lightly, with a team that holds every job to a hotel standard."
        image="eco-green"
        imageAlt="Eco-friendly cleaning products with fresh greenery"
        breadcrumbs={[{ name: "About", path: "/about" }]}
      >
        <Button href="/contact" variant="accent" size="lg">
          Work with us
          <Icon name="ArrowRight" className="size-4" />
        </Button>
      </PageHero>

      <Section>
        <div className="mx-auto max-w-3xl">
          <SectionHeading align="left" eyebrow="Our story" title="Specialists, not generalists" />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-body">
            <p>
              Neo Eco Cleaning is a specialist block cleaning company. Around 70% of our work is block cleaning,
              pressure washing, jet washing and carpet cleaning for managing agents and freeholders across North London,
              Central London and the surrounding boroughs. That focus is deliberate. It is what lets us deliver a
              consistent, reliable standard that generalist cleaners struggle to match.
            </p>
            <p>
              Our team brings more than fifty years of combined cleaning experience, including ex-Hilton Hotel cleaners
              who hold every communal area to a hotel standard. We are trusted by managing agents and major residential
              developments, and rated 5.0 by our clients.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="ink">
        <Reveal>
          <Stats stats={business.stats as unknown as { value: number; suffix?: string; decimals?: number; label: string }[]} />
        </Reveal>
      </Section>

      <Section tone="cream">
        <FeatureBlock
          image="eco-green"
          imageAlt="Eco-friendly natural cleaning products"
          eyebrow="Our eco commitment"
          title="Genuinely eco-friendly, not just a name"
          body={[
            "Clean Green, Live Clean is more than a tagline. We use environmentally friendly products and low-carbon methods as standard, and we let technique and high-pressure water do the heavy lifting rather than harsh chemicals.",
            "This matters in a communal setting. Run-off from over-chemicalled cleaning can harm surrounding planting, drains and the residents and pets who use the space. Minimising chemical use protects all three, at no extra cost.",
          ]}
          bullets={["Environmentally friendly products", "Low carbon footprint", "Safe for residents and pets", "Minimal chemical run-off"]}
        >
          <Button href="/services">
            See how we work
            <Icon name="ArrowRight" className="size-4" />
          </Button>
        </FeatureBlock>
      </Section>

      <Section>
        <SectionHeading eyebrow="Why choose us" title="What sets Neo Eco apart" />
        <div className="mt-12">
          <FeatureCards items={business.usps.map((u, i) => ({ icon: uspIcons[i], title: u.title, body: u.body }))} />
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
