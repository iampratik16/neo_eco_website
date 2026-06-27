import { cn } from "@/lib/cn";

export type Feature = { title: string; body: string };

export function FeatureCards({ items }: { items: Feature[] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {items.map((f) => (
        <div key={f.title} className="border-t border-line pt-6">
          <h3 className="font-display text-lg font-semibold text-ink">{f.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-body">{f.body}</p>
        </div>
      ))}
    </div>
  );
}
