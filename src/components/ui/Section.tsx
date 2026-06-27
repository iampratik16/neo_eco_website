import { cn } from "@/lib/cn";
import { Container } from "./Container";

type Tone = "default" | "cream" | "brand" | "ink" | "eco";

const tones: Record<Tone, string> = {
  default: "bg-surface text-body",
  cream: "bg-cream text-body",
  brand: "bg-brand-800 text-white",
  ink: "bg-ink text-white",
  eco: "bg-eco-gradient text-body",
};

export function Section({
  tone = "default",
  className,
  containerClassName,
  children,
  id,
  as: Tag = "section",
}: {
  tone?: Tone;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
  id?: string;
  as?: React.ElementType;
}) {
  return (
    <Tag id={id} className={cn("py-16 sm:py-20 lg:py-28", tones[tone], className)}>
      <Container className={containerClassName}>{children}</Container>
    </Tag>
  );
}

/** Small eyebrow label used above section headings. */
export function Eyebrow({ children, tone = "brand" }: { children: React.ReactNode; tone?: "brand" | "white" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em]",
        tone === "brand" ? "text-brand-700" : "text-accent-400"
      )}
    >
      <span className={cn("h-px w-6", tone === "brand" ? "bg-brand-500" : "bg-accent-400")} />
      {children}
    </span>
  );
}
