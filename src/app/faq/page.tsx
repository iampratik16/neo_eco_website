import type { Metadata } from "next";
import Link from "next/link";
import { generalFaqs } from "@/data/faqs";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/site/JsonLd";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/sections/PageHero";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = pageMetadata({
  title: "FAQ | Block Cleaning Questions Answered",
  description:
    "Answers to common questions about block cleaning, communal-area cleaning, costs, eco-friendly products, areas covered and how to get a free quote from Neo Eco Cleaning.",
  path: "/faq",
  image: "service-block-cleaning",
});

export default function FAQPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }])} />

      <PageHero
        eyebrow="Help centre"
        title="Frequently asked questions"
        intro="Everything managing agents, freeholders and residents ask us about communal block cleaning."
        image="service-block-cleaning"
        imageAlt="Communal area being cleaned"
        breadcrumbs={[{ name: "FAQ", path: "/faq" }]}
      >
        <Button href="/contact" variant="accent" size="lg">
          Ask us a question
          <Icon name="ArrowRight" className="size-4" />
        </Button>
      </PageHero>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading align="left" eyebrow="Questions" title="Block cleaning, answered" />
            <p className="mt-4 text-body">
              Cannot find what you need?{" "}
              <Link href="/contact" className="font-semibold text-brand-800 hover:underline">
                Get in touch
              </Link>{" "}
              and we will help.
            </p>
          </div>
          <FAQAccordion faqs={generalFaqs} />
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
