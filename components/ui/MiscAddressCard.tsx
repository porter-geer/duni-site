"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import type { MiscAddress } from "@/types/content";

function truncate(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

function CopyButton({ address }: { address: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable
    }
  }

  return (
    <button
      onClick={handleCopy}
      aria-label={`Copy address ${address} to clipboard`}
      className="flex items-center gap-1.5 text-xs text-duni-muted hover:text-duni-pink transition-colors focus-visible:outline-2 focus-visible:outline-duni-pink rounded"
    >
      {copied ? (
        <Check className="h-3.5 w-3.5 text-green-400" aria-hidden="true" />
      ) : (
        <Copy className="h-3.5 w-3.5" aria-hidden="true" />
      )}
      <span>{copied ? "Copied!" : "Copy"}</span>
    </button>
  );
}

interface MiscAddressCardProps {
  entry: MiscAddress;
}

export function MiscAddressCard({ entry }: MiscAddressCardProps) {
  return (
    <div className="rounded-xl border border-duni-border bg-duni-surface p-4 space-y-3">
      <div className="space-y-1">
        <p className="text-sm font-semibold text-duni-text">{entry.name}</p>
        <p className="text-xs text-duni-muted leading-relaxed">
          {entry.description}
        </p>
      </div>

      {/* Single address */}
      {entry.address && (
        <div className="flex flex-wrap items-center gap-3">
          <code className="font-mono text-xs text-duni-secondary bg-black/30 px-2 py-1 rounded-md select-all">
            {truncate(entry.address)}
          </code>
          <CopyButton address={entry.address} />
        </div>
      )}

      {/* Multiple addresses */}
      {entry.addresses && (
        <ul className="space-y-2" role="list">
          {entry.addresses.map((addr) => (
            <li key={addr} className="flex flex-wrap items-center gap-3">
              <code className="font-mono text-xs text-duni-secondary bg-black/30 px-2 py-1 rounded-md select-all">
                {truncate(addr)}
              </code>
              <CopyButton address={addr} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
