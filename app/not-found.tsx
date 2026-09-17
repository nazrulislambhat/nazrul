'use client';

import React from 'react';
import Link from 'next/link';
import { Terminal, ArrowLeft, Home, RefreshCw } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-[85vh] w-full flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full p-8 md:p-10 rounded-3xl liquid-glass border border-borderGlass shadow-2xl flex flex-col items-center text-center gap-6">
        {/* Status Pill */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-red/40 bg-red/10 font-mono text-xs text-red">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red" />
          </span>
          <span className="font-semibold">Error 404 // Route Not Found</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight text-textMain font-mono">
            404
          </h1>
          <p className="text-xs md:text-sm text-textMuted leading-relaxed">
            The telemetry interface or artifact you are looking for does not
            exist, was deprecated, or has been unmounted.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full pt-2">
          <Link
            href="/"
            className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black font-mono text-xs font-bold hover:bg-volt hover:text-black dark:hover:bg-volt dark:hover:text-black transition-all shadow-xs cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Return to Core</span>
          </Link>
          <button
            onClick={() => window.location.reload()}
            className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-borderGlass bg-surface font-mono text-xs font-semibold text-textMain hover:border-signal-dim hover:text-signal transition-all cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Re-sync Node</span>
          </button>
        </div>
      </div>
    </main>
  );
}
