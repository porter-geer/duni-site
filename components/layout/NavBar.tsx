"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "DUNI", href: "/duni" },
  { label: "Governance", href: "/governance" },
  { label: "Delegate & Vote", href: "/delegate" },
  { label: "FAQs", href: "/faq" },
];

function useIsActive(href: string) {
  const pathname = usePathname();
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

function NavLink({ href, label }: { href: string; label: string }) {
  const active = useIsActive(href);
  return (
    <Link
      href={href}
      className={[
        "relative text-sm font-medium transition-colors pb-0.5",
        "focus-visible:outline-2 focus-visible:outline-duni-pink focus-visible:rounded-sm",
        active ? "text-white" : "text-duni-secondary hover:text-white",
        "after:absolute after:bottom-0 after:left-0 after:h-px after:w-full",
        "after:origin-left after:transition-transform after:duration-200",
        active
          ? "after:bg-duni-pink after:scale-x-100"
          : "after:bg-duni-pink after:scale-x-0 hover:after:scale-x-100",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}

export function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on route change
  const pathname = usePathname();
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Close on Escape key
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className="sticky top-0 z-40 w-full border-b border-duni-border bg-duni-bg/95 backdrop-blur-sm"
        aria-label="Main navigation"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Wordmark */}
          <Link
            href="/"
            className="text-lg font-bold text-white tracking-tight hover:text-duni-pink transition-colors focus-visible:outline-2 focus-visible:outline-duni-pink focus-visible:rounded-sm"
            aria-label="DUNI — home"
          >
            DUNI
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <div key={link.href} role="listitem">
                <NavLink href={link.href} label={link.label} />
              </div>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center h-9 w-9 rounded-lg text-duni-secondary hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-duni-pink"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 md:hidden"
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        ref={drawerRef}
        className={[
          "fixed top-16 right-0 z-40 h-[calc(100vh-4rem)] w-72 md:hidden",
          "bg-duni-surface border-l border-duni-border",
          "flex flex-col px-6 py-8 gap-1",
          "transition-transform duration-200",
          mobileOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        aria-hidden={!mobileOpen}
        role="dialog"
        aria-label="Mobile navigation"
      >
        {navLinks.map((link) => (
          <MobileNavLink
            key={link.href}
            href={link.href}
            label={link.label}
          />
        ))}
      </div>
    </>
  );
}

function MobileNavLink({ href, label }: { href: string; label: string }) {
  const active = useIsActive(href);
  return (
    <Link
      href={href}
      className={[
        "flex items-center py-3 px-4 rounded-xl text-base font-medium transition-colors",
        "focus-visible:outline-2 focus-visible:outline-duni-pink",
        active
          ? "text-duni-pink bg-duni-pink/10"
          : "text-duni-secondary hover:text-white hover:bg-white/5",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}
