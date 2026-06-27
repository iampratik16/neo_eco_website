import { JsonLd } from "@/components/site/JsonLd";
import { faqSchema } from "@/lib/schema";
import { Icon } from "@/components/ui/Icon";

type FAQ = { q: string; a: string };

/** Accessible accordion using native details/summary (works without JS). Emits FAQPage schema. */
export function FAQAccordion({ faqs, schema = true }: { faqs: FAQ[]; schema?: boolean }) {
  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-surface">
      {schema && <JsonLd data={faqSchema(faqs)} />}
      {faqs.map((f) => (
        <details key={f.q} className="group px-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-base font-semibold text-ink">
            {f.q}
            <Icon
              name="ChevronDown"
              className="size-5 shrink-0 text-brand-600 transition-transform duration-200 group-open:rotate-180"
            />
          </summary>
          <p className="-mt-1 pb-5 pr-8 text-sm leading-relaxed text-body">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
