import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  /** Pink glow on hover */
  hover?: boolean;
  /** Use a subtle pink-tinted background */
  pinkTint?: boolean;
  as?: "div" | "article" | "li";
}

export function Card({
  children,
  className = "",
  hover = false,
  pinkTint = false,
  as: Tag = "div",
}: CardProps) {
  const base =
    "rounded-2xl border border-duni-border p-6 transition-all duration-200";
  const bg = pinkTint ? "bg-duni-surface-pink" : "bg-duni-surface";
  const hoverClass = hover
    ? "hover:border-duni-pink/40 hover:shadow-[0_0_20px_rgba(252,114,255,0.08)]"
    : "";

  return (
    <Tag className={[base, bg, hoverClass, className].filter(Boolean).join(" ")}>
      {children}
    </Tag>
  );
}
