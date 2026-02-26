import Link from "next/link";
import { ExternalLink } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "DUNI", href: "/duni" },
  { label: "Governance", href: "/governance" },
  { label: "Delegate & Vote", href: "/delegate" },
  { label: "FAQs", href: "/faq" },
];

const externalLinks = [
  { label: "Agora", href: "https://vote.uniswapfoundation.org/" },
  { label: "Tally", href: "https://www.tally.xyz/gov/uniswap" },
  {
    label: "Uniswap Foundation",
    href: "https://uniswapfoundation.org/",
  },
  {
    label: "Governance Forum",
    href: "https://gov.uniswap.org/",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-duni-border bg-duni-surface" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          {/* Brand */}
          <div className="space-y-3">
            <Link
              href="/"
              className="text-lg font-bold text-gray-900 tracking-tight hover:text-duni-pink transition-colors"
              aria-label="DUNI — home"
            >
              DUNI
            </Link>
            <p className="text-sm text-duni-muted leading-relaxed">
              The home of Uniswap Governance
            </p>
          </div>

          {/* Internal nav */}
          <nav aria-label="Footer navigation">
            <p className="text-xs font-semibold uppercase tracking-widest text-duni-muted mb-4">
              Pages
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-duni-secondary hover:text-gray-900 transition-colors focus-visible:outline-2 focus-visible:outline-duni-pink focus-visible:rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* External links */}
          <nav aria-label="External governance resources">
            <p className="text-xs font-semibold uppercase tracking-widest text-duni-muted mb-4">
              Resources
            </p>
            <ul className="space-y-2">
              {externalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${link.label} (opens in new tab)`}
                    className="inline-flex items-center gap-1.5 text-sm text-duni-secondary hover:text-gray-900 transition-colors focus-visible:outline-2 focus-visible:outline-duni-pink focus-visible:rounded-sm"
                  >
                    {link.label}
                    <ExternalLink className="h-3 w-3 opacity-50" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom rule */}
        <div className="mt-12 border-t border-duni-border pt-6">
          <p className="text-xs text-duni-muted">
            DUNI — Uniswap Governance
          </p>
        </div>
      </div>
    </footer>
  );
}
