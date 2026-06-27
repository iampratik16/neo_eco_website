import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { clients } from "@/data/clients";
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
import { ProjectCard } from "@/components/sections/ProjectCard";
import { BlogCard } from "@/components/sections/BlogCard";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = pageMetadata({
  title: "Our Work | Communal Cleaning & Jet Washing Projects",
  description:
    "Real communal cleaning and jet washing projects by Neo Eco Cleaning, including Ashleigh Court and The Reeds in Watford and Chiswick Gate in West London, for managing agents.",
  path: "/our-work",
  image: "case-jet-courtyard",
});

export default function OurWorkPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Our Work", path: "/our-work" }])} />

      <PageHero
        eyebrow="Our work"
        title="Projects we have completed"
        intro="Communal cleaning and jet washing jobs for managing agents — with photos and write-ups where we have them."
        image="case-jet-courtyard"
        imageAlt="Restored communal courtyard after jet washing"
        breadcrumbs={[{ name: "Our Work", path: "/our-work" }]}
      >
        <Button href="/contact" variant="accent" size="lg">
          Discuss a project
        </Button>
      </PageHero>

      <Section>
        <SectionHeading eyebrow="Projects" title="Communal cleaning in action" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Reveal key={p.slug}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Clients */}
      <Section tone="cream">
        <SectionHeading
          eyebrow="Trusted by"
          title="Managing agents we work with"
          intro="We are trusted by managing agents and major residential developments to keep their communal areas clean and presentable."
        />
        <div className="mx-auto mt-12 grid max-w-3xl gap-5 sm:grid-cols-2">
          {clients.map((c) => (
            <Reveal key={c.name}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-7">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-xl bg-brand-800 text-white">
                    <Icon name="Building2" className="size-6" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-ink">{c.name}</h3>
                </div>
                {c.note && <p className="mt-4 flex-1 text-sm leading-relaxed text-body">{c.note}</p>}
                {c.url && (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-800"
                  >
                    Visit website
                    <Icon name="ArrowUpRight" className="size-4" />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
        {/* TODO: replace with real client logo assets when supplied (do not fabricate logos). */}
      </Section>

      {/* Testimonials */}
      <Section>
        <SectionHeading eyebrow="In their words" title="What our clients say" />
        <div className="mt-12">
          <Testimonials />
        </div>
      </Section>

      {/* Case studies */}
      <Section tone="cream">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading align="left" eyebrow="Case studies" title="Read the detail" className="max-w-xl" />
          <Button href="/blog" variant="outline" className="shrink-0">
            All case studies
            <Icon name="ArrowRight" className="size-4" />
          </Button>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.slice(0, 3).map((p) => (
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
