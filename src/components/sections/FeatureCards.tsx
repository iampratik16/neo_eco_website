import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export type Feature = { icon: IconName; title: string; body: string };

export function FeatureCards({ items, columns = 3 }: { items: Feature[]; columns?: 2 | 3 | 4 }) {
  const cols = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" }[columns];
  return (
    <div className={cn("grid gap-5", cols)}>
      {items.map((f, i) => (
        <Reveal key={f.title} delay={(i % 3) * 70}>
          <div className="h-full rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-brand-200">
            <span className="grid size-12 place-items-center rounded-xl bg-brand-50 text-brand-700">
              <Icon name={f.icon} className="size-6" />
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold text-ink">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-body">{f.body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
