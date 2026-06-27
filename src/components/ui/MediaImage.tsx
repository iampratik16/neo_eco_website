import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Wrapper around next/image for our generated /media assets.
 * Uses `fill` inside an aspect-ratio box so space is always reserved (no CLS).
 */
export function MediaImage({
  id,
  alt,
  ratio = "16 / 9",
  sizes = "100vw",
  priority = false,
  className,
  imgClassName,
  ext = "webp",
}: {
  id: string;
  alt: string;
  ratio?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  ext?: "webp" | "jpg";
}) {
  return (
    <div className={cn("relative overflow-hidden bg-cream", className)} style={{ aspectRatio: ratio }}>
      <Image
        src={`/media/images/${id}.${ext}`}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", imgClassName)}
      />
    </div>
  );
}
