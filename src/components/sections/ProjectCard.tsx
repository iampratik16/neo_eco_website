import Link from "next/link";
import type { Project } from "@/data/projects";
import { MediaImage } from "@/components/ui/MediaImage";
import { Icon } from "@/components/ui/Icon";

export function ProjectCard({ project }: { project: Project }) {
  const href = project.caseStudy ? `/blog/${project.caseStudy}` : "/our-work";
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/5">
      <Link href={href} className="block overflow-hidden">
        <MediaImage
          id={project.image}
          alt={`${project.name}, ${project.location}`}
          ratio="3 / 2"
          sizes="(max-width: 768px) 100vw, 33vw"
          imgClassName="transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-sm text-muted">
          <Icon name="MapPin" className="size-4 text-brand-600" />
          {project.location}
        </div>
        <h3 className="mt-2 font-display text-lg font-semibold text-ink">
          <Link href={href} className="transition-colors hover:text-brand-800">
            {project.name}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{project.summary}</p>
        {project.client && <p className="mt-4 text-xs font-medium uppercase tracking-wide text-muted">Client: {project.client}</p>}
        {project.caseStudy && (
          <Link href={href} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-800">
            Read the case study
            <Icon name="ArrowUpRight" className="size-4" />
          </Link>
        )}
      </div>
    </article>
  );
}
