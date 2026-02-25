"use client";

import { useState } from "react";
import { Copy, Check, ExternalLink } from "lucide-react";
import { Badge } from "./Badge";

interface ContractRowProps {
  name: string;
  address: string;
  abiLabel: string;
  abiHref: string;
  deprecated?: boolean;
  note?: string;
}

function truncateAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function ContractRow({
  name,
  address,
  abiLabel,
  abiHref,
  deprecated = false,
  note,
}: ContractRowProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: do nothing
    }
  }

  return (
    <div className="flex flex-col gap-2 rounded-xl border border-duni-border bg-duni-surface p-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-semibold text-duni-text text-sm">{name}</span>
        {deprecated && <Badge variant="deprecated">Deprecated</Badge>}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        {/* Address */}
        <code className="font-mono text-xs text-duni-secondary bg-black/30 px-2 py-1 rounded-md select-all">
          {truncateAddress(address)}
        </code>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          aria-label={`Copy ${name} contract address to clipboard`}
          className="flex items-center gap-1.5 text-xs text-duni-muted hover:text-duni-pink transition-colors focus-visible:outline-2 focus-visible:outline-duni-pink rounded"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-green-400" aria-hidden="true" />
          ) : (
            <Copy className="h-3.5 w-3.5" aria-hidden="true" />
          )}
          <span>{copied ? "Copied!" : "Copy"}</span>
        </button>

        {/* ABI link */}
        <a
          href={abiHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${name} ABI on ${abiLabel}`}
          className="flex items-center gap-1 text-xs text-duni-pink hover:underline transition-colors focus-visible:outline-2 focus-visible:outline-duni-pink rounded"
        >
          <span>{abiLabel}</span>
          <ExternalLink className="h-3 w-3" aria-hidden="true" />
        </a>
      </div>

      {note && (
        <p className="text-xs text-duni-muted leading-relaxed">{note}</p>
      )}
    </div>
  );
}
