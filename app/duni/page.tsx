import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  hero,
  features,
  membership,
  operations,
} from "@/content/duni.mdx";
import { Card } from "@/components/ui/Card";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Callout } from "@/components/ui/Callout";
import { BodyText } from "@/components/ui/BodyText";

export const metadata: Metadata = {
  title: "DUNI",
  description:
    "Uniswap Governance's legal home — a Wyoming Decentralized Unincorporated Nonprofit Association.",
};

export default function DuniPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section
        aria-labelledby="duni-hero-heading"
        className="relative overflow-hidden border-b border-duni-border"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(252,114,255,0.10) 0%, transparent 65%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <h1
              id="duni-hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white mb-8"
            >
              {hero.headline}
            </h1>
            <BodyText
              text={hero.subCopy}
              className="text-lg text-duni-secondary leading-[1.7]"
            />
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────────── */}
      <section
        aria-labelledby="features-heading"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28"
      >
        <SectionLabel className="mb-4">{features.sectionLabel}</SectionLabel>
        <h2
          id="features-heading"
          className="text-3xl sm:text-4xl font-semibold text-white leading-snug mb-12"
        >
          {features.sectionLabel}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {features.items.map((item) => (
            <Card
              key={item.number}
              hover
              className="flex flex-col gap-5 relative overflow-hidden"
            >
              {/* Large pink number */}
              <div
                className="text-7xl font-bold leading-none select-none"
                aria-hidden="true"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(252,114,255,0.6) 0%, rgba(245,13,180,0.2) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {item.number}
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-duni-secondary leading-relaxed">
                  {item.body}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Membership ───────────────────────────────────────────── */}
      <section
        aria-labelledby="membership-heading"
        className="border-t border-duni-border"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl space-y-8">
            <h2
              id="membership-heading"
              className="text-3xl sm:text-4xl font-semibold text-white leading-snug"
            >
              {membership.headline}
            </h2>

            <BodyText text={membership.body} />

            <Callout>
              <p className="text-base font-medium text-white">
                {membership.callout}
              </p>
            </Callout>

            <Link
              href={membership.link.href}
              className="inline-flex items-center gap-2 text-sm font-medium text-duni-pink hover:underline focus-visible:outline-2 focus-visible:outline-duni-pink focus-visible:rounded-sm"
            >
              {membership.link.label}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Operations ───────────────────────────────────────────── */}
      <section
        aria-labelledby="operations-heading"
        className="border-t border-duni-border"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl space-y-8">
            <h2
              id="operations-heading"
              className="text-3xl sm:text-4xl font-semibold text-white leading-snug"
            >
              {operations.headline}
            </h2>

            <BodyText text={operations.body} />

            <Link
              href={operations.link.href}
              className="inline-flex items-center gap-2 text-sm font-medium text-duni-pink hover:underline focus-visible:outline-2 focus-visible:outline-duni-pink focus-visible:rounded-sm"
            >
              {operations.link.label}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
