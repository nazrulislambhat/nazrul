'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyPillProps {
  value: string;
  label: string;
  icon: React.ElementType;
  className?: string;
}

export default function CopyPill({
  value,
  label,
  icon: Icon,
  className = '',
}: CopyPillProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback for older browser contexts
      const textarea = document.createElement('textarea');
      textarea.value = value;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <div className="relative inline-flex items-center">
      <button
        type="button"
        onClick={handleCopy}
        title={`Click to copy ${label}`}
        className={`group flex items-center gap-3 text-textMain hover:text-signal transition-colors font-mono text-xs md:text-sm cursor-pointer select-none ${className}`}
      >
        <div className="w-8 h-8 rounded-lg border border-borderGlass bg-surface/80 flex items-center justify-center text-signal group-hover:border-signal-dim/50 group-hover:bg-surface transition-all">
          <Icon className="w-4 h-4 text-signal shrink-0" />
        </div>
        <span>{value}</span>
        <span className="p-1 rounded bg-surface border border-borderGlass/60 text-textMuted/60 group-hover:text-signal group-hover:border-signal-dim/40 transition-all ml-1">
          {copied ? (
            <Check className="w-3 h-3 text-volt" />
          ) : (
            <Copy className="w-3 h-3" />
          )}
        </span>
      </button>

      {/* Floating Micro-Toast Feedback */}
      {copied && (
        <div
          role="status"
          aria-live="polite"
          className="absolute -top-8 left-10 z-30 flex items-center gap-1.5 px-2.5 py-1 rounded-full liquid-glass border border-volt/50 shadow-voltGlow font-mono text-[10px] text-textMain animate-in fade-in zoom-in-95 duration-200 pointer-events-none"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-volt animate-ping shrink-0" />
          <span>COPIED TO CLIPBOARD</span>
        </div>
      )}
    </div>
  );
}
