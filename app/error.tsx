'use client';

import React, { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Runtime Application Exception:', error);
  }, [error]);

  return (
    <main className="min-h-[85vh] w-full flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full p-8 md:p-10 rounded-3xl liquid-glass border border-borderGlass shadow-2xl flex flex-col items-center text-center gap-6">
        <div className="p-3 rounded-2xl bg-red/10 border border-red/30 text-red">
          <AlertTriangle className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <h1 className="text-xl font-bold tracking-tight text-textMain font-mono">
            System Execution Fault
          </h1>
          <p className="text-xs text-textMuted leading-relaxed">
            An unexpected client exception occurred during runtime execution.
            Our telemetry guardrails have logged the trace.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full pt-2">
          <button
            onClick={() => reset()}
            className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-signal text-black font-mono text-xs font-bold hover:opacity-90 transition-all shadow-xs cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Attempt Recovery</span>
          </button>
          <Link
            href="/"
            className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-borderGlass bg-surface font-mono text-xs font-semibold text-textMain hover:border-signal transition-all cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
