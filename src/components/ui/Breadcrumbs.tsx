import Link from "next/link";
import { Icon } from "./Icon";
import { cn } from "@/lib/cn";

export type Crumb = { name: string; path: string };

// UI only. BreadcrumbList JSON-LD is emitted once per page at the page level (see lib/schema).
export function Breadcrumbs({ items, tone = "default" }: { items: Crumb[]; tone?: "default" | "light" }) {
  const all: Crumb[] = [{ name: "Home", path: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className={cn("flex flex-wrap items-center gap-1.5 text-sm", tone === "light" ? "text-white/70" : "text-muted")}>
        {all.map((c, i) => {
          const last = i === all.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-1.5">
              {last ? (
                <span className={cn("font-medium", tone === "light" ? "text-white" : "text-ink")} aria-current="page">
                  {c.name}
                </span>
              ) : (
                <>
                  <Link href={c.path} className="transition-colors hover:text-brand-700">
                    {c.name}
                  </Link>
                  <Icon name="ChevronRight" className="size-3.5 opacity-50" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
