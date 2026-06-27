import Link from "next/link";
import type { Service } from "@/data/services";
import { cn } from "@/lib/cn";

export function ServiceCard({ service, className }: { service: Service; index?: number; className?: string }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group flex flex-col border border-line bg-surface p-6 transition-colors hover:border-brand-300 hover:bg-cream/50",
        className
      )}
    >
      <h3 className="font-display text-xl font-semibold text-ink">
        {service.name}
        {service.flagship && (
          <span className="ml-2 text-sm font-normal text-muted">(main service)</span>
        )}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{service.tagline}</p>
      <span className="mt-4 text-sm font-medium text-brand-800 group-hover:underline">View service →</span>
    </Link>
  );
}

export function ServicesGrid({ services, className }: { services: Service[]; className?: string }) {
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {services.map((s) => (
        <ServiceCard key={s.slug} service={s} className="h-full" />
      ))}
    </div>
  );
}
