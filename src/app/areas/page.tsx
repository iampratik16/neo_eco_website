import type { Metadata } from "next";
import { regions, boroughs } from "@/data/areas";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/site/JsonLd";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/sections/PageHero";
import { AreaList } from "@/components/sections/AreaList";
import { ServicesGrid } from "@/components/sections/ServiceCard";
import { CTABanner } from "@/components/sections/CTABanner";
import { services } from "@/data/services";

export const metadata: Metadata = pageMetadata({
  title: "Areas We Cover | North & Central London Block Cleaning",
  description:
    "Neo Eco Cleaning covers North London, Central London, West and East London, Watford and Hertfordshire, including priority boroughs Barnet, Enfield, Camden, Islington and Haringey.",
  path: "/areas",
  image: "area-north-london",
});

export default function AreasPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Areas", path: "/areas" }])} />
      <PageHero
        eyebrow="Where we work"
        eyebrowIcon="MapPin"
        title="Areas we cover"
        intro="North London is our heartland, with priority boroughs across the region, plus Central and West London, Watford and the wider Hertfordshire area."
        image="area-north-london"
        imageAlt="North London residential street"
        breadcrumbs={[{ name: "Areas", path: "/areas" }]}
      >
        <Button href="/contact" variant="accent" size="lg">
          Get a free quote
          <Icon name="ArrowRight" className="size-4" />
        </Button>
      </PageHero>

      <Section>
        <SectionHeading
          align="left"
          eyebrow="Regions"
          title="London and the surrounding areas"
          intro="We cover London as a whole and the surrounding counties for communal block cleaning."
          className="max-w-2xl"
        />
        <div className="mt-12">
          <AreaList items={regions} />
        </div>
      </Section>

      <Section tone="cream">
        <SectionHeading
          align="left"
          eyebrow="Priority boroughs"
          title="North London boroughs we know best"
          intro="Google's AI already associates Neo Eco with these boroughs. We cover them with the same standard across all of them."
          className="max-w-2xl"
        />
        <div className="mt-12">
          <AreaList items={boroughs} />
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="What we offer" title="Services in every area" />
        <div className="mt-12">
          <ServicesGrid services={services} />
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
