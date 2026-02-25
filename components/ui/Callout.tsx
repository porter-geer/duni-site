import { type ReactNode } from "react";

interface CalloutProps {
  children: ReactNode;
  className?: string;
}

export function Callout({ children, className = "" }: CalloutProps) {
  return (
    <div
      className={[
        "relative rounded-xl border border-duni-pink/30",
        "bg-duni-pink/5 pl-5 pr-5 py-4",
        "before:absolute before:left-0 before:top-3 before:bottom-3",
        "before:w-0.5 before:rounded-full before:bg-duni-pink",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      role="note"
    >
      {children}
    </div>
  );
}
