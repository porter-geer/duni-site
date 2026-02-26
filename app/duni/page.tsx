import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  hero,
  features,
  membership,
  operations,
  resources,
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
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(252,114,255,0.08) 0%, transparent 65%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <h1
              id="duni-hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-gray-900 mb-8"
            >
              {hero.headline}
            </h1>
            <BodyText text={hero.subCopy} />
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────────── */}
      <section
        aria-labelledby="features-heading"
        className="bg-duni-surface"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <SectionLabel className="mb-4">{features.sectionLabel}</SectionLabel>
          <h2
            id="features-heading"
            className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-snug mb-12"
          >
            {features.headline}
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
                      "linear-gradient(135deg, rgba(252,114,255,0.7) 0%, rgba(245,13,180,0.3) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {item.number}
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-duni-secondary leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Membership ───────────────────────────────────────────── */}
      <section
        aria-labelledby="membership-heading"
        className="bg-duni-surface-pink border-t border-duni-border"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl space-y-8">
            <h2
              id="membership-heading"
              className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-snug"
            >
              {membership.headline}
            </h2>

            <BodyText text={membership.body} />

            <Callout>
              <p className="text-base font-medium text-gray-900">
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
        className="bg-duni-bg border-t border-duni-border"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl space-y-8">
            <h2
              id="operations-heading"
              className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-snug"
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

      {/* ── Resources ────────────────────────────────────────────── */}
      <section
        aria-labelledby="resources-heading"
        className="bg-duni-surface border-t border-duni-border"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <SectionLabel className="mb-4">{resources.sectionLabel}</SectionLabel>
          <h2
            id="resources-heading"
            className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-snug mb-12"
          >
            {resources.headline}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-16 gap-y-10">
            {resources.groups.map((group) => (
              <div key={group.label}>
                <p className="text-xs font-semibold uppercase tracking-widest text-duni-muted mb-4">
                  {group.label}
                </p>
                <ul className="divide-y divide-duni-border">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="group flex items-center justify-between gap-4 py-3.5 text-sm text-gray-900 hover:text-duni-pink transition-colors duration-150"
                      >
                        <span className="leading-snug">
                          {item.label}
                        </span>
                        {item.external ? (
                          <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-duni-muted group-hover:text-duni-pink transition-colors" aria-hidden="true" />
                        ) : (
                          <ArrowRight className="h-3.5 w-3.5 shrink-0 text-duni-muted group-hover:text-duni-pink transition-colors" aria-hidden="true" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
