import type { Metadata } from "next";
import { intro, faqSections } from "@/content/faq.mdx";
import { terms } from "@/content/glossary.mdx";
import {
  note,
  activeContracts,
  deprecatedContracts,
  miscAddresses,
} from "@/content/contracts.mdx";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Accordion } from "@/components/ui/Accordion";
import { ContractRow } from "@/components/ui/ContractRow";
import { MiscAddressCard } from "@/components/ui/MiscAddressCard";

export const metadata: Metadata = {
  title: "FAQs & Resources",
  description:
    "Common questions about DUNI, membership, governance, and technical contracts.",
};

export default function FaqPage() {
  return (
    <>
      {/* ── Intro ─────────────────────────────────────────────────── */}
      <section
        aria-labelledby="faq-heading"
        className="border-b border-duni-border"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(252,114,255,0.08) 0%, transparent 70%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <SectionLabel className="mb-4">Resources</SectionLabel>
            <h1
              id="faq-heading"
              className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 leading-tight mb-6"
            >
              {intro.headline}
            </h1>
            <p className="text-duni-secondary leading-[1.7] text-base">
              {intro.body}
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ Accordion sections ────────────────────────────────── */}
      <section aria-label="Frequently asked questions" className="bg-duni-surface">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 space-y-16">
          {faqSections.map((section) => (
            <div key={section.id} id={section.id}>
              {/* Section heading */}
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">
                  {section.label}
                </h2>
              </div>

              {/* Accordion items for this section */}
              <Accordion items={section.items} />
            </div>
          ))}
        </div>
      </section>

      {/* ── Glossary ──────────────────────────────────────────────── */}
      <section
        aria-labelledby="glossary-heading"
        className="bg-duni-surface-pink border-t border-duni-border"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <h2
            id="glossary-heading"
            className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-snug mb-10"
          >
            Glossary
          </h2>

          <dl className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {terms.map((item) => (
              <div
                key={item.term}
                className="rounded-2xl border border-duni-border bg-duni-surface p-6 space-y-3"
              >
                <dt className="text-base font-semibold text-gray-900">
                  {item.term}
                </dt>
                <dd className="text-sm text-duni-secondary leading-relaxed">
                  {item.definition}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Technical Contracts ───────────────────────────────────── */}
      <section
        aria-labelledby="contracts-heading"
        className="bg-duni-bg border-t border-duni-border"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 space-y-14">
          <div>
            <SectionLabel className="mb-4">Technical</SectionLabel>
            <h2
              id="contracts-heading"
              className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-snug mb-4"
            >
              Governance Contracts
            </h2>
            <p className="text-base text-duni-secondary leading-[1.7] max-w-3xl">
              The Uniswap protocol is governed through a set of smart contracts deployed on Ethereum mainnet. Uniswap&apos;s governance architecture was originally forked from Compound&apos;s Governor contracts — one of the earliest and most widely adopted onchain governance frameworks — and later upgraded to Governor Bravo in 2021 for improved upgradability and safety. These contracts manage the full lifecycle of governance proposals, from submission and voting through to execution, and control the UNI token and treasury.
            </p>
          </div>

          {/* Active contracts */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-duni-muted mb-4">
              Active Contracts
            </h3>
            <div className="space-y-3">
              {activeContracts.map((contract) => (
                <ContractRow
                  key={contract.address}
                  name={contract.name}
                  address={contract.address}
                  abiLabel={contract.abiLabel}
                  abiHref={contract.abiHref}
                />
              ))}
            </div>
          </div>

          {/* Deprecated contracts */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-duni-muted mb-4">
              Deprecated Contracts
            </h3>
            <div className="space-y-3">
              {deprecatedContracts.map((contract) => (
                <ContractRow
                  key={contract.address}
                  name={contract.name}
                  address={contract.address}
                  abiLabel={contract.abiLabel}
                  abiHref={contract.abiHref}
                  deprecated
                  note={contract.note}
                />
              ))}
            </div>
          </div>

          {/* Miscellaneous addresses */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-duni-muted mb-4">
              Miscellaneous Addresses
            </h3>
            <div className="space-y-3">
              {miscAddresses.map((entry) => (
                <MiscAddressCard key={entry.name} entry={entry} />
              ))}
            </div>
          </div>

          {/* Note */}
          <p className="text-xs text-duni-muted border-t border-duni-border pt-6">
            {note}
          </p>
        </div>
      </section>
    </>
  );
}
