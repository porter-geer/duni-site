import { type ReactNode } from "react";

/** Parse **bold** markers into <strong> nodes */
function parseBold(text: string): ReactNode {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 0 ? part : <strong key={i} className="text-white font-semibold">{part}</strong>
  );
}

interface BodyTextProps {
  text: string;
  className?: string;
}

/**
 * Renders body copy from MDX content objects.
 * Splits on \n\n for paragraph breaks and parses **bold** markers.
 */
export function BodyText({ text, className = "text-duni-secondary leading-[1.7] text-base" }: BodyTextProps) {
  const paragraphs = text.split("\n\n").filter(Boolean);

  if (paragraphs.length === 1) {
    return <p className={className}>{parseBold(text)}</p>;
  }

  return (
    <div className="space-y-4">
      {paragraphs.map((para, i) => (
        <p key={i} className={className}>
          {parseBold(para)}
        </p>
      ))}
    </div>
  );
}
