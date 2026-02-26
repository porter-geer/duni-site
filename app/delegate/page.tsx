import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import {
  intro,
  delegationExplainer,
  agoraSteps,
  tallySteps,
  voting,
  importantNotes,
} from "@/content/delegate.mdx";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Callout } from "@/components/ui/Callout";
import { StepList } from "@/components/ui/StepList";

export const metadata: Metadata = {
  title: "Delegate & Vote",
  description:
    "How to activate your UNI voting power and participate in Uniswap Governance.",
};

export default function DelegatePage() {
  return (
    <>
      {/* ── Intro ─────────────────────────────────────────────────── */}
      <section
        aria-labelledby="delegate-heading"
        className="border-b border-duni-border"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(252,114,255,0.08) 0%, transparent 70%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl">
            <SectionLabel className="mb-4">Participation</SectionLabel>
            <h1
              id="delegate-heading"
              className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 leading-tight mb-6"
            >
              {intro.headline}
            </h1>
            <p className="text-duni-secondary leading-[1.7] text-base mb-10">
              {intro.body}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href={intro.ctaAgora.href}
                variant="primary"
                size="lg"
                external
                aria-label="Go to Agora governance platform (opens in new tab)"
              >
                {intro.ctaAgora.label}
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button
                href={intro.ctaTally.href}
                variant="secondary"
                size="lg"
                external
                aria-label="Go to Tally governance platform (opens in new tab)"
              >
                {intro.ctaTally.label}
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Understanding Delegation ──────────────────────────────── */}
      <section
        aria-labelledby="delegation-explainer-heading"
        className="bg-duni-surface"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl space-y-8">
            <div>
              <h2
                id="delegation-explainer-heading"
                className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-snug mb-4"
              >
                {delegationExplainer.headline}
              </h2>
              <p className="text-duni-secondary leading-[1.7]">
                {delegationExplainer.body}
              </p>
            </div>

            {/* Key callout */}
            <Callout>
              <p className="text-base font-medium text-gray-900">
                {delegationExplainer.callout}
              </p>
            </Callout>

            {/* Requirements */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-duni-muted mb-3">
                You will need
              </p>
              <div className="flex flex-wrap gap-2">
                {delegationExplainer.requirements.map((req) => (
                  <span
                    key={req}
                    className="inline-flex items-center px-3 py-1.5 rounded-full border border-duni-border bg-duni-surface text-sm text-duni-secondary"
                  >
                    {req}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How-to cards ──────────────────────────────────────────── */}
      <section
        aria-labelledby="how-to-heading"
        className="bg-duni-surface-pink border-t border-duni-border"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <SectionLabel className="mb-4">Step-by-Step</SectionLabel>
          <h2
            id="how-to-heading"
            className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-snug mb-10"
          >
            How to Delegate
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* ── Agora card ── */}
            <Card className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">
                  {agoraSteps.platform}
                </h3>
                <a
                  href={agoraSteps.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Agora (opens in new tab)"
                  className="text-duni-muted hover:text-duni-pink transition-colors focus-visible:outline-2 focus-visible:outline-duni-pink focus-visible:rounded-sm"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              <div className="space-y-8 flex-1">
                {agoraSteps.options.map((option) => (
                  <div key={option.label} className="space-y-4">
                    <h4 className="text-sm font-semibold text-duni-pink">
                      {option.label}
                    </h4>
                    <StepList steps={option.steps} />
                    <p className="text-xs text-duni-muted italic leading-relaxed">
                      {option.confirmation}
                    </p>
                  </div>
                ))}
              </div>

              <Button
                href={agoraSteps.href}
                variant="primary"
                external
                aria-label="Open Agora governance platform (opens in new tab)"
                className="mt-auto w-full justify-center"
              >
                Open {agoraSteps.platform}
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </Button>
            </Card>

            {/* ── Tally card ── */}
            <Card className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">
                  {tallySteps.platform}
                </h3>
                <a
                  href={tallySteps.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Tally (opens in new tab)"
                  className="text-duni-muted hover:text-duni-pink transition-colors focus-visible:outline-2 focus-visible:outline-duni-pink focus-visible:rounded-sm"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              <div className="flex-1">
                <StepList steps={tallySteps.steps} />
              </div>

              <Button
                href={tallySteps.href}
                variant="secondary"
                external
                aria-label="Open Tally governance platform (opens in new tab)"
                className="mt-auto w-full justify-center"
              >
                Open {tallySteps.platform}
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* ── How to Vote ───────────────────────────────────────────── */}
      <section
        aria-labelledby="voting-heading"
        className="bg-duni-surface border-t border-duni-border"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl space-y-8">
            <div>
              <h2
                id="voting-heading"
                className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-snug mb-4"
              >
                {voting.headline}
              </h2>
              <p className="text-duni-secondary leading-[1.7]">{voting.body}</p>
            </div>
            <StepList steps={voting.steps} />
            <Callout>
              <p className="text-sm font-semibold text-gray-900 mb-3">Important Notes</p>
              <ul className="space-y-3" role="list">
                {importantNotes.map((note, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm text-duni-secondary leading-relaxed"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 rounded-full bg-duni-pink shrink-0"
                      aria-hidden="true"
                    />
                    {note}
                  </li>
                ))}
              </ul>
            </Callout>
          </div>
        </div>
      </section>
    </>
  );
}
