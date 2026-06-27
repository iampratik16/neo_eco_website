import Link from "next/link";
import type { Project } from "@/data/projects";
import { MediaImage } from "@/components/ui/MediaImage";

export function ProjectCard({ project }: { project: Project }) {
  const href = project.caseStudy ? `/blog/${project.caseStudy}` : "/our-work";
  return (
    <article className="group flex flex-col border border-line bg-surface">
      <Link href={href} className="block overflow-hidden">
        <MediaImage
          id={project.image}
          alt={`${project.name}, ${project.location}`}
          ratio="3 / 2"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm text-muted">{project.location}</p>
        <h3 className="mt-1 font-display text-lg font-semibold text-ink">
          <Link href={href} className="hover:text-brand-800">
            {project.name}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{project.summary}</p>
        {project.client && <p className="mt-3 text-sm text-muted">{project.client}</p>}
        {project.caseStudy && (
          <Link href={href} className="mt-4 text-sm font-medium text-brand-800 hover:underline">
            Read the case study →
          </Link>
        )}
      </div>
    </article>
  );
}
