import { cn } from "@/lib/cn";
import { Container } from "./Container";

type Tone = "default" | "cream" | "brand" | "ink" | "eco";

const tones: Record<Tone, string> = {
  default: "bg-surface text-body",
  cream: "bg-cream text-body",
  brand: "bg-brand-800 text-white",
  ink: "bg-ink text-white",
  eco: "bg-cream text-body",
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
    <Tag id={id} className={cn("py-14 sm:py-20 lg:py-24", tones[tone], className)}>
      <Container className={containerClassName}>{children}</Container>
    </Tag>
  );
}

export function Eyebrow({ children, tone = "brand" }: { children: React.ReactNode; tone?: "brand" | "white" }) {
  return (
    <span
      className={cn(
        "text-sm font-medium",
        tone === "brand" ? "text-brand-700" : "text-white/75"
      )}
    >
      {children}
    </span>
  );
}
