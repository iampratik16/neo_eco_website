import type { Metadata } from "next";
import { posts } from "@/data/blog";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/site/JsonLd";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { BlogCard } from "@/components/sections/BlogCard";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = pageMetadata({
  title: "Case Studies & Insights | Block Cleaning Blog",
  description:
    "Real communal cleaning and jet washing case studies from Neo Eco Cleaning, with practical lessons for managing agents on keeping residential blocks clean and well maintained.",
  path: "/blog",
  image: "case-jet-courtyard",
});

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])} />

      <PageHero
        eyebrow="Case studies & insights"
        eyebrowIcon="Sparkles"
        title="Lessons from real communal cleaning projects"
        intro="Practical case studies from the blocks we look after, with what they teach managing agents about keeping a building clean, safe and well presented."
        image="case-jet-courtyard"
        imageAlt="Restored communal courtyard after jet washing"
        breadcrumbs={[{ name: "Blog", path: "/blog" }]}
      >
        <Button href="/contact" variant="accent" size="lg">
          Get a free quote
          <Icon name="ArrowRight" className="size-4" />
        </Button>
      </PageHero>

      <Section>
        <SectionHeading align="left" eyebrow="All case studies" title={`${posts.length} real projects, documented`} />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Reveal key={p.slug}>
              <BlogCard post={p} />
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
