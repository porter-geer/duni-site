interface StepListProps {
  steps: string[];
  className?: string;
}

export function StepList({ steps, className = "" }: StepListProps) {
  return (
    <ol
      className={["space-y-4", className].filter(Boolean).join(" ")}
      role="list"
    >
      {steps.map((step, i) => (
        <li key={i} className="flex gap-4">
          {/* Step number */}
          <div className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full border border-duni-pink/40 bg-duni-pink/10 text-xs font-semibold text-duni-pink">
            {i + 1}
          </div>
          {/* Connector */}
          <div className="flex flex-col flex-1 min-w-0">
            <p className="text-duni-secondary leading-relaxed text-sm pt-0.5">
              {step}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
