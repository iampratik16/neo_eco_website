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
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSmall = window.matchMedia("(max-width: 640px)").matches;
    // Skip on reduced-motion and on small screens (save data, keep LCP light).
    if (reduce || isSmall) return;
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
      preload="none"
      poster={`/media/images/${id}-poster.jpg`}
      onCanPlay={() => setReady(true)}
      style={{ opacity: ready ? 1 : 0, transition: "opacity 1s ease" }}
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src={`/media/video/${id}.webm`} type="video/webm" />
      <source src={`/media/video/${id}.mp4`} type="video/mp4" />
    </video>
  );
}
