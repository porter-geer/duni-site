import Link from "next/link";
import { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
}

interface ButtonAsButton extends BaseProps, ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
  external?: never;
}

interface ButtonAsLink extends BaseProps {
  href: string;
  external?: boolean;
  children?: React.ReactNode;
  className?: string;
  "aria-label"?: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-duni-pink text-black font-semibold hover:bg-duni-pink-deep transition-colors",
  secondary:
    "border border-duni-pink text-duni-pink hover:bg-duni-pink/10 transition-colors",
  ghost:
    "text-duni-secondary hover:text-white transition-colors",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm rounded-xl",
  md: "px-6 py-3 text-sm rounded-2xl",
  lg: "px-8 py-4 text-base rounded-2xl",
};

function baseClasses(variant: Variant, size: Size, extra = "") {
  return [
    "inline-flex items-center justify-center gap-2",
    "font-medium cursor-pointer select-none",
    "focus-visible:outline-2 focus-visible:outline-duni-pink focus-visible:outline-offset-2",
    variantClasses[variant],
    sizeClasses[size],
    extra,
  ]
    .filter(Boolean)
    .join(" ");
}

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className = "" } = props;
  const classes = baseClasses(variant, size, className);

  if ("href" in props && props.href) {
    const { href, external, children, "aria-label": ariaLabel } = props;
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {(props as ButtonAsLink).children}
      </Link>
    );
  }

  const { children, variant: _v, size: _s, className: _c, ...rest } = props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
