import { MediaImage } from "@/components/ui/MediaImage";
import { Eyebrow } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export function FeatureBlock({
  image,
  imageAlt,
  eyebrow,
  title,
  body,
  bullets,
  reverse = false,
  children,
}: {
  image: string;
  imageAlt: string;
  eyebrow?: string;
  title: string;
  body: string[];
  bullets?: string[];
  reverse?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <Reveal className={cn(reverse && "lg:order-2")}>
        <MediaImage
          id={image}
          alt={imageAlt}
          ratio="4 / 3"
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="rounded-3xl shadow-xl shadow-brand-900/10 ring-1 ring-line"
        />
      </Reveal>
      <Reveal className={cn(reverse && "lg:order-1")}>
        <div>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{title}</h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-body">
            {body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          {bullets && bullets.length > 0 && (
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-body">
                  <Icon name="CheckCircle2" className="mt-0.5 size-5 shrink-0 text-brand-600" />
                  {b}
                </li>
              ))}
            </ul>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </Reveal>
    </div>
  );
}
