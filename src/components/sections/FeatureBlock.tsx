import { MediaImage } from "@/components/ui/MediaImage";
import { Eyebrow } from "@/components/ui/Section";
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
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
      <div className={cn(reverse && "lg:order-2")}>
        <MediaImage
          id={image}
          alt={imageAlt}
          ratio="4 / 3"
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="border border-line"
        />
      </div>
      <div className={cn(reverse && "lg:order-1")}>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h2 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">{title}</h2>
        <div className="mt-5 space-y-4 text-base leading-relaxed text-body">
          {body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        {bullets && bullets.length > 0 && (
          <ul className="mt-6 space-y-2 text-sm text-body">
            {bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="text-brand-600">—</span>
                {b}
              </li>
            ))}
          </ul>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </div>
  );
}
