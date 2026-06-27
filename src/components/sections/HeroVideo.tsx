"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Enhancement layer: fades a muted looping video in over the poster image once it can play.
 * Never added when the user prefers reduced motion, so the poster (the LCP image) remains.
 */
export function HeroVideo({ id, className }: { id: string; className?: string }) {
  const [enabled, setEnabled] = useState(false);
  const [ready, setReady] = useState(false);
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // ponytail: muted decorative hero video, always plays — owner wants it visible
    // even under OS "Reduce Motion". Re-add a reduced-motion guard if a11y review requires.
    const id = requestAnimationFrame(() => setEnabled(true));
    return () => cancelAnimationFrame(id);
  }, []);

  if (!enabled) return null;

  return (
    <video
      ref={ref}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={`/media/images/${id}-poster.jpg`}
      onCanPlay={() => setReady(true)}
      onLoadedData={() => setReady(true)}
      style={{ opacity: ready ? 1 : 0, transition: "opacity 1s ease" }}
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src={`/media/video/${id}.webm`} type="video/webm" />
      <source src={`/media/video/${id}.mp4`} type="video/mp4" />
    </video>
  );
}
