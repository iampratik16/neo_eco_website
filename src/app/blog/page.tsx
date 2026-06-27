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
        eyebrow="Case studies"
        title="Notes from specific jobs"
        intro="What we learned on communal cleaning and jet washing projects — useful if you are dealing with something similar."
        image="case-jet-courtyard"
        imageAlt="Restored communal courtyard after jet washing"
        breadcrumbs={[{ name: "Blog", path: "/blog" }]}
      >
        <Button href="/contact" variant="accent" size="lg">
          Book a site survey
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
