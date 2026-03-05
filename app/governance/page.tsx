import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, MapPin, Clock, CheckCircle, ArrowRight, ChevronDown } from "lucide-react";
import {
  intro,
  overview,
  duniInfo,
  processBody,
  phases,
  processChanges,
  tools,
} from "@/content/governance.mdx";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Callout } from "@/components/ui/Callout";
import { StepList } from "@/components/ui/StepList";
import { BodyText } from "@/components/ui/BodyText";

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
              className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 leading-tight mb-6"
            >
              {intro.headline}
            </h1>
            <BodyText text={intro.body} />

            {/* Anchor jump buttons */}
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="#governance-process"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-duni-border text-sm font-medium text-gray-700 hover:border-duni-pink hover:text-duni-pink transition-colors duration-150"
              >
                Governance Process
                <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <a
                href="#governance-tools"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-duni-border text-sm font-medium text-gray-700 hover:border-duni-pink hover:text-duni-pink transition-colors duration-150"
              >
                Governance Tools
                <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Overview: Controls + Delegates ────────────────────────── */}
      <section
        aria-labelledby="overview-heading"
        className="bg-duni-surface border-b border-duni-border"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl space-y-8">
            <h2
              id="overview-heading"
              className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-snug"
            >
              Governance Overview
            </h2>
            <p className="text-base text-duni-secondary leading-[1.7]">
              {overview.intro}
            </p>
            <div className="space-y-4">
              <p className="text-base text-duni-secondary leading-[1.7]">
                {overview.controlsIntro}
              </p>
              <ul className="space-y-3 pl-1">
                {overview.controls.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-duni-pink"
                      aria-hidden="true"
                    />
                    <span className="text-base text-duni-secondary leading-[1.7]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-base text-duni-secondary leading-[1.7]">
              {overview.delegateNote}
              <Link href={overview.delegateLink.href} className="text-duni-pink hover:underline font-medium">
                {overview.delegateLink.label}
              </Link>
              {overview.delegateNoteSuffix}
            </p>
            <Callout>
              You can learn more about UNI&apos;s onchain controls, value accrual, verifiability and distribution via{" "}
              <a
                href="https://otf.aragon.org/tokens/uni"
                target="_blank"
                rel="noopener noreferrer"
                className="text-duni-pink hover:underline font-medium"
              >
                Aragon&apos;s Ownership Token Framework
              </a>.
            </Callout>
          </div>
        </div>
      </section>

      {/* ── DUNI ──────────────────────────────────────────────────── */}
      <section
        aria-labelledby="duni-section-heading"
        className="bg-duni-surface-pink border-b border-duni-border"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl space-y-8">
            <h2
              id="duni-section-heading"
              className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-snug"
            >
              {duniInfo.headline}
            </h2>
            <BodyText text={duniInfo.body} />
            <Link
              href={duniInfo.link.href}
              className="inline-flex items-center gap-2 text-sm font-medium text-duni-pink hover:underline focus-visible:outline-2 focus-visible:outline-duni-pink focus-visible:rounded-sm"
            >
              {duniInfo.link.label}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Three-phase stepper ───────────────────────────────────── */}
      <section
        id="governance-process"
        aria-labelledby="phases-heading"
        className="bg-duni-surface border-b border-duni-border"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <SectionLabel className="mb-4">Governance Process</SectionLabel>
          <h2
            id="phases-heading"
            className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-snug mb-6"
          >
            The Governance Process
          </h2>
          <p className="text-base text-duni-secondary leading-[1.7] max-w-3xl mb-12">
            {processBody}
          </p>

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
                      <h3 className="text-xl font-bold text-gray-900">
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
                      <h4 className="text-sm font-semibold text-gray-900 mb-4">
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
        </div>
      </section>

      {/* ── Process Changes ───────────────────────────────────────── */}
      <section
        aria-labelledby="process-changes-heading"
        className="bg-duni-surface-pink border-t border-duni-border"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <Card pinkTint className="max-w-3xl space-y-6">
            <div>
              <SectionLabel className="mb-3">Process Updates</SectionLabel>
              <h2
                id="process-changes-heading"
                className="text-2xl font-semibold text-gray-900 leading-snug"
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
        id="governance-tools"
        aria-labelledby="tools-heading"
        className="bg-duni-bg border-t border-duni-border"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <SectionLabel className="mb-4">Governance Tools</SectionLabel>
          <h2
            id="tools-heading"
            className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-snug mb-10"
          >
            Governance Tools
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {tools.map((tool) => (
              <Card key={tool.name} hover className="flex flex-col gap-4">
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-gray-900">
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
