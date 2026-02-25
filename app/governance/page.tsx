import type { Metadata } from "next";
import { ExternalLink, MapPin, Clock, CheckCircle } from "lucide-react";
import {
  intro,
  phases,
  processChanges,
  tools,
} from "@/content/governance.mdx";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Callout } from "@/components/ui/Callout";
import { StepList } from "@/components/ui/StepList";

export const metadata: Metadata = {
  title: "Governance Process",
  description:
    "The three-phase framework every Uniswap governance proposal must complete.",
};

export default function GovernancePage() {
  return (
    <>
      {/* ── Intro ─────────────────────────────────────────────────── */}
      <section
        aria-labelledby="governance-heading"
        className="border-b border-duni-border"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(252,114,255,0.08) 0%, transparent 70%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <SectionLabel className="mb-4">Governance</SectionLabel>
            <h1
              id="governance-heading"
              className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-6"
            >
              {intro.headline}
            </h1>
            <p className="text-duni-secondary leading-[1.7] text-base">
              {intro.body}
            </p>
          </div>
        </div>
      </section>

      {/* ── Three-phase stepper ───────────────────────────────────── */}
      <section
        aria-labelledby="phases-heading"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28"
      >
        <h2 id="phases-heading" className="sr-only">
          Governance Phases
        </h2>

        {/* Stepper container */}
        <div className="relative">
          {/* Vertical connector line — desktop only */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-[5px] top-2 bottom-2 w-px bg-duni-border"
          />

          <div className="space-y-10">
            {phases.map((phase) => (
              <div key={phase.number} className="flex gap-6 md:gap-8">
                {/* Dot — desktop only */}
                <div
                  aria-hidden="true"
                  className="hidden md:flex shrink-0 flex-col items-center"
                >
                  <div className="relative z-10 mt-2 h-3 w-3 rounded-full bg-duni-pink ring-4 ring-duni-pink/20" />
                </div>

                {/* Phase card */}
                <Card className="flex-1 space-y-6">
                  {/* Header */}
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-duni-muted mb-1">
                      {phase.number}
                    </p>
                    <h3 className="text-xl font-bold text-white">
                      {phase.label}
                    </h3>
                  </div>

                  {/* Badge row */}
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="default">
                      <Clock
                        className="mr-1.5 h-3 w-3 opacity-60"
                        aria-hidden="true"
                      />
                      {phase.duration}
                    </Badge>
                    <Badge variant="default">
                      <MapPin
                        className="mr-1.5 h-3 w-3 opacity-60"
                        aria-hidden="true"
                      />
                      {phase.location}
                    </Badge>
                    {phase.requirement && (
                      <Badge variant="pink">
                        <CheckCircle
                          className="mr-1.5 h-3 w-3 opacity-70"
                          aria-hidden="true"
                        />
                        {phase.requirement}
                      </Badge>
                    )}
                  </div>

                  {/* Purpose */}
                  <p className="text-sm text-duni-muted italic">
                    {phase.purpose}
                  </p>

                  {/* Steps */}
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-4">
                      What to Do
                    </h4>
                    <StepList steps={phase.steps} />
                  </div>

                  {/* Note callout */}
                  <Callout>
                    <p className="text-sm text-duni-secondary leading-relaxed">
                      {phase.note}
                    </p>
                  </Callout>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Changes ───────────────────────────────────────── */}
      <section
        aria-labelledby="process-changes-heading"
        className="border-t border-duni-border"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <Card pinkTint className="max-w-3xl space-y-6">
            <div>
              <SectionLabel className="mb-3">Process Updates</SectionLabel>
              <h2
                id="process-changes-heading"
                className="text-2xl font-semibold text-white leading-snug"
              >
                {processChanges.headline}
              </h2>
            </div>

            {/* Badge row */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="default">
                <Clock className="mr-1.5 h-3 w-3 opacity-60" aria-hidden="true" />
                {processChanges.duration}
              </Badge>
              <Badge variant="default">
                <MapPin className="mr-1.5 h-3 w-3 opacity-60" aria-hidden="true" />
                {processChanges.location}
              </Badge>
              <Badge variant="pink">
                <CheckCircle className="mr-1.5 h-3 w-3 opacity-70" aria-hidden="true" />
                {processChanges.requirement}
              </Badge>
            </div>

            <p className="text-duni-secondary leading-[1.7] text-sm">
              {processChanges.body}
            </p>
          </Card>
        </div>
      </section>

      {/* ── Tools ─────────────────────────────────────────────────── */}
      <section
        aria-labelledby="tools-heading"
        className="border-t border-duni-border"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <SectionLabel className="mb-4">Governance Tools</SectionLabel>
          <h2
            id="tools-heading"
            className="text-3xl sm:text-4xl font-semibold text-white leading-snug mb-10"
          >
            Governance Tools
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {tools.map((tool) => (
              <Card key={tool.name} hover className="flex flex-col gap-4">
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-white">
                    {tool.name}
                  </h3>
                  <p className="text-sm text-duni-secondary leading-relaxed">
                    {tool.description}
                  </p>
                </div>
                <div className="mt-auto pt-2">
                  <a
                    href={tool.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${tool.name} (opens in new tab)`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-duni-pink hover:underline transition-colors focus-visible:outline-2 focus-visible:outline-duni-pink focus-visible:rounded-sm"
                  >
                    Visit {tool.name}
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
