"use client";
import { useEffect, useRef, useState } from "react";

type Stat = { value: number; suffix?: string; decimals?: number; label: string };

function useCountUp(target: number, decimals = 0, start: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    const reduce =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduce ? 0 : 1400;
    let raf = 0;
    let startTs = 0;
    const tick = (ts: number) => {
      if (!startTs) startTs = ts;
      const p = duration === 0 ? 1 : Math.min((ts - startTs) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setVal(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start]);
  return decimals ? val.toFixed(decimals) : Math.round(val).toString();
}

function StatItem({ stat, start }: { stat: Stat; start: boolean }) {
  const display = useCountUp(stat.value, stat.decimals ?? 0, start);
  return (
    <div className="text-center">
      <div className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        {display}
        {stat.suffix && <span className="text-accent-400">{stat.suffix}</span>}
      </div>
      <div className="mt-2 text-sm text-white/70">{stat.label}</div>
    </div>
  );
}

export function Stats({ stats }: { stats: Stat[] }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [start, setStart] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (setStart(true), obs.disconnect())),
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="grid grid-cols-2 gap-8 lg:grid-cols-4">
      {stats.map((s) => (
        <StatItem key={s.label} stat={s} start={start} />
      ))}
    </div>
  );
}
