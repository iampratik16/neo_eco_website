import Link from "next/link";
import type { Service } from "@/data/services";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export function ServiceCard({ service, index, className }: { service: Service; index: number; className?: string }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5",
        className
      )}
    >
      <span
        aria-hidden="true"
        className="absolute right-6 top-6 font-display text-sm font-semibold text-muted transition-colors group-hover:text-brand-700"
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="grid size-14 place-items-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-800 group-hover:text-white">
        <Icon name={service.icon as IconName} className="size-7" />
      </span>
      <h3 className="mt-6 font-display text-xl font-semibold text-ink">
        {service.name}
        {service.flagship && (
          <span className="ml-2 align-middle text-xs font-semibold uppercase tracking-wide text-brand-700">Flagship</span>
        )}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{service.tagline}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-800">
        View more
        <Icon name="ArrowUpRight" className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}

export function ServicesGrid({ services, className }: { services: Service[]; className?: string }) {
  return (
    <div className={cn("grid gap-5 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {services.map((s, i) => (
        <Reveal key={s.slug} delay={(i % 3) * 80}>
          <ServiceCard service={s} index={i} className="h-full" />
        </Reveal>
      ))}
    </div>
  );
}
