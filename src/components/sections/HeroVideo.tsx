"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Enhancement layer: fades a muted looping video in over the poster image once it can play.
 * Never added when the user prefers reduced motion or on small screens, so the poster
 * (the LCP image) remains there.
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
    const raf = requestAnimationFrame(() => setEnabled(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  // Force muted (React doesn't always reflect the muted prop, which blocks autoplay) and start playback.
  useEffect(() => {
    const v = ref.current;
    if (!enabled || !v) return;
    v.muted = true;
    const play = () => {
      v.play().catch(() => {});
    };
    if (v.readyState >= 2) play();
    else v.addEventListener("loadeddata", play, { once: true });
  }, [enabled]);

  if (!enabled) return null;

  const markReady = () => setReady(true);

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
      onCanPlay={markReady}
      onPlaying={markReady}
      onLoadedData={markReady}
      style={{ opacity: ready ? 1 : 0, transition: "opacity 1s ease" }}
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src={`/media/video/${id}.webm`} type="video/webm" />
      <source src={`/media/video/${id}.mp4`} type="video/mp4" />
    </video>
  );
}
