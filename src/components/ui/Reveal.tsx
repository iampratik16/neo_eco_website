"use client";
import { cn } from "@/lib/cn";

/** Pass-through wrapper — scroll animations removed for a calmer, more editorial feel. */
export function Reveal({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: React.ElementType;
}) {
  return <Tag className={cn(className)}>{children}</Tag>;
}
