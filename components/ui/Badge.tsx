import { type ReactNode } from "react";

type BadgeVariant = "default" | "pink" | "muted" | "deprecated";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-duni-surface border-duni-border text-duni-secondary",
  pink: "bg-duni-pink/10 border-duni-pink/30 text-duni-pink",
  muted: "bg-duni-surface border-duni-border text-duni-muted",
  deprecated: "bg-red-950/40 border-red-800/40 text-red-400",
};

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center px-2.5 py-0.5 rounded-full",
        "text-xs font-medium border tracking-wide",
        variantClasses[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
}
