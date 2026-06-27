import Link from "next/link";
import { areas as allAreas, type Area } from "@/data/areas";

export function AreaList({ items = allAreas }: { items?: Area[] }) {
  return (
    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((a) => (
        <Link
          key={a.slug}
          href={`/areas/${a.slug}`}
          className="flex items-center justify-between gap-3 border border-line bg-surface px-4 py-3 transition-colors hover:border-brand-300 hover:bg-cream/50"
        >
          <span className="font-medium text-ink">
            {a.name}
            {a.priority && <span className="ml-2 text-sm font-normal text-muted">(priority)</span>}
          </span>
          <span className="text-sm text-brand-800">→</span>
        </Link>
      ))}
    </div>
  );
}
