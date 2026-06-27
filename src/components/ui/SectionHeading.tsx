import { Eyebrow } from "./Section";
import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  tone = "default",
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
  tone?: "default" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <div className={cn(align === "center" && "flex justify-center")}>
          <Eyebrow tone={tone === "light" ? "white" : "brand"}>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2
        className={cn(
          "mt-3 font-display text-3xl font-semibold sm:text-4xl",
          tone === "light" ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      {intro && (
        <p className={cn("mt-4 text-lg leading-relaxed", tone === "light" ? "text-white/85" : "text-body")}>{intro}</p>
      )}
    </div>
  );
}
