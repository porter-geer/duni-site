import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  hero,
  aboutDuni,
  governanceIntro,
  resources,
} from "@/content/home.mdx";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "DUNI — Uniswap Governance",
  description: hero.subCopy,
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(252,114,255,0.14) 0%, transparent 70%)",
        }}
      >
        {/* Subtle grid overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#FC72FF 1px, transparent 1px), linear-gradient(90deg, #FC72FF 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 md:py-40 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-duni-pink/30 bg-duni-pink/10 px-4 py-1.5 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-duni-pink" aria-hidden="true" />
            <span className="text-xs font-medium text-duni-pink tracking-wide">
              Uniswap Governance
            </span>
          </div>

          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight max-w-4xl mx-auto"
          >
            {/* Split "DUNI" into pink accent */}
            Welcome to{" "}
            <span className="text-duni-pink">DUNI</span>
            {", "}
            <span className="text-white">
              the home of Uniswap Governance
            </span>
          </h1>

          <p className="mt-6 text-lg text-duni-secondary leading-relaxed max-w-2xl mx-auto">
            {hero.subCopy}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={hero.ctaPrimary.href} variant="primary" size="lg">
              {hero.ctaPrimary.label}
            </Button>
            <Button href={hero.ctaSecondary.href} variant="secondary" size="lg">
              {hero.ctaSecondary.label}
            </Button>
          </div>
        </div>
      </section>

      {/* ── About DUNI ───────────────────────────────────────────── */}
      <section
        aria-labelledby="about-heading"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28"
      >
        <div className="max-w-3xl">
          <SectionLabel className="mb-4">{aboutDuni.sectionLabel}</SectionLabel>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl font-semibold text-white leading-snug mb-6"
          >
            {aboutDuni.sectionLabel}
          </h2>
          <p className="text-duni-secondary leading-[1.7] text-base mb-6 whitespace-pre-line">
            {aboutDuni.body}
          </p>
          <Link
            href={aboutDuni.link.href}
            className="inline-flex items-center gap-2 text-sm font-medium text-duni-pink hover:underline focus-visible:outline-2 focus-visible:outline-duni-pink focus-visible:rounded-sm"
          >
            {aboutDuni.link.label}
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ── Governance Process ───────────────────────────────────── */}
      <section
        aria-labelledby="governance-heading"
        className="border-t border-duni-border"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl mb-12">
            <SectionLabel className="mb-4">
              {governanceIntro.sectionLabel}
            </SectionLabel>
            <h2
              id="governance-heading"
              className="text-3xl sm:text-4xl font-semibold text-white leading-snug mb-6"
            >
              {governanceIntro.sectionLabel}
            </h2>
            <p className="text-duni-secondary leading-[1.7] text-base">
              {governanceIntro.body}
            </p>
          </div>

          {/* Phase cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {governanceIntro.phases.map((phase) => (
              <Card key={phase.number} hover>
                <div className="text-4xl font-bold text-duni-pink mb-4 leading-none">
                  {phase.number}
                </div>
                <div className="flex items-start gap-3 mb-3">
                  <h3 className="text-base font-semibold text-white flex-1">
                    {phase.label}
                  </h3>
                </div>
                <Badge variant="default" className="mb-3">
                  {phase.duration}
                </Badge>
                <p className="text-sm text-duni-secondary leading-relaxed">
                  {phase.description}
                </p>
              </Card>
            ))}
          </div>

          <Link
            href={governanceIntro.link.href}
            className="inline-flex items-center gap-2 text-sm font-medium text-duni-pink hover:underline focus-visible:outline-2 focus-visible:outline-duni-pink focus-visible:rounded-sm"
          >
            {governanceIntro.link.label}
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ── Resources ────────────────────────────────────────────── */}
      <section
        aria-labelledby="resources-heading"
        className="border-t border-duni-border"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <SectionLabel className="mb-4">{resources.sectionLabel}</SectionLabel>
          <h2
            id="resources-heading"
            className="text-3xl sm:text-4xl font-semibold text-white leading-snug mb-10"
          >
            {resources.sectionLabel}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {resources.cards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group block focus-visible:outline-2 focus-visible:outline-duni-pink focus-visible:rounded-2xl"
                aria-label={`${card.title} — ${card.description}`}
              >
                <Card
                  hover
                  className="h-full flex flex-col justify-between gap-6 group-hover:border-duni-pink/40"
                >
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-white">
                      {card.title}
                    </h3>
                    <p className="text-sm text-duni-secondary leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm font-medium text-duni-pink group-hover:gap-2.5 transition-all">
                    <span>Explore</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
