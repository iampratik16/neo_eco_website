import type { Metadata } from "next";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/site/JsonLd";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/sections/PageHero";
import { ServicesGrid } from "@/components/sections/ServiceCard";
import { AreaList } from "@/components/sections/AreaList";
import { CTABanner } from "@/components/sections/CTABanner";
import { regions, priorityBoroughs } from "@/data/areas";

export const metadata: Metadata = pageMetadata({
  title: "Cleaning Services for Residential Blocks | London",
  description:
    "Block cleaning, pressure washing, jet washing, carpet cleaning and more for residential blocks across London. One accountable, eco-friendly team. Free site survey.",
  path: "/services",
  image: "service-block-cleaning",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])} />
      <PageHero
        eyebrow="Our services"
        title="Cleaning services for residential blocks"
        intro="From routine communal cleaning to deep restoration, we keep the whole building in good order with one accountable, eco-friendly team."
        image="service-block-cleaning"
        imageAlt="Spotless communal corridor in a residential block"
        breadcrumbs={[{ name: "Services", path: "/services" }]}
      >
        <Button href="/contact" variant="accent" size="lg">
          Book a site survey
        </Button>
        <Button href="#services" variant="white" size="lg">
          Browse services
        </Button>
      </PageHero>

      <Section id="services">
        <SectionHeading
          eyebrow="What we do"
          title="Seven services, one trusted team"
          intro="Block cleaning is our specialism and around 70% of what we do. Everything else supports keeping your communal areas clean, safe and presentable."
        />
        <div className="mt-12">
          <ServicesGrid services={services} />
        </div>
      </Section>

      <Section tone="cream">
        <SectionHeading
          eyebrow="Where we work"
          title="Across North London and beyond"
          intro="Browse the areas we cover, including our priority North London boroughs."
        />
        <div className="mt-12">
          <AreaList items={[...regions, ...priorityBoroughs]} />
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
