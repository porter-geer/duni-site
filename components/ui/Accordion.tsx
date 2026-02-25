"use client";

import { useState, useId, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  q: string;
  a: string;
}

interface AccordionProps {
  items: AccordionItemProps[];
  className?: string;
}

function AccordionItem({ q: question, a: answer }: AccordionItemProps) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const panelId = `accordion-panel-${id}`;
  const triggerId = `accordion-trigger-${id}`;

  return (
    <div className="border-b border-duni-border last:border-b-0">
      <button
        id={triggerId}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(!open)}
        className={[
          "flex w-full items-start justify-between gap-4 py-5 text-left",
          "text-base font-medium text-duni-text transition-colors",
          "hover:text-duni-pink focus-visible:outline-2 focus-visible:outline-duni-pink",
          "focus-visible:outline-offset-2 rounded-sm",
        ].join(" ")}
      >
        <span>{question}</span>
        <ChevronDown
          className={[
            "mt-0.5 h-4 w-4 shrink-0 text-duni-secondary transition-transform duration-200",
            open ? "rotate-180" : "",
          ].join(" ")}
          aria-hidden="true"
        />
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        hidden={!open}
        className={[
          "overflow-hidden transition-all duration-200",
          open ? "pb-5" : "",
        ].join(" ")}
      >
        <p className="text-duni-secondary leading-relaxed whitespace-pre-wrap">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function Accordion({ items, className = "" }: AccordionProps) {
  return (
    <div
      className={[
        "divide-y divide-duni-border rounded-2xl border border-duni-border",
        "bg-duni-surface overflow-hidden",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {items.map((item, i) => (
        <AccordionItem key={i} q={item.q} a={item.a} />
      ))}
    </div>
  );
}
