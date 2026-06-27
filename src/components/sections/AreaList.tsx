import Link from "next/link";
import { areas as allAreas, type Area } from "@/data/areas";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function AreaList({ items = allAreas }: { items?: Area[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((a, i) => (
        <Reveal key={a.slug} delay={(i % 3) * 50}>
          <Link
            href={`/areas/${a.slug}`}
            className="group flex items-center justify-between gap-3 rounded-xl border border-line bg-surface px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md hover:shadow-brand-900/5"
          >
            <span className="flex items-center gap-3">
              <Icon name="MapPin" className="size-5 text-brand-600" />
              <span className="font-medium text-ink">{a.name}</span>
              {a.priority && (
                <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-brand-700">
                  Priority
                </span>
              )}
            </span>
            <Icon name="ArrowUpRight" className="size-4 text-muted transition-colors group-hover:text-brand-700" />
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
