import { useReveal } from "@/hooks/use-reveal";
import type { ReactNode } from "react";

type Variant = "up" | "left" | "right" | "zoom" | "fade";

const variantClass: Record<Variant, string> = {
  up: "animate-slide-in-bottom",
  left: "animate-slide-in-left",
  right: "animate-slide-in-right",
  zoom: "animate-scale-in",
  fade: "animate-fade-up",
};

export function Reveal({
  children,
  variant = "up",
  delay = 0,
  threshold = 0.15,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  threshold?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const r = useReveal<HTMLDivElement>(threshold);
  return (
    <Tag
      ref={r.ref as never}
      style={{ animationDelay: `${delay}ms` }}
      className={`${r.shown ? variantClass[variant] : "reveal-init"} ${className}`}
    >
      {children}
    </Tag>
  );
}
