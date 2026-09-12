'use client';

import React, { useState } from 'react';
import { Calendar, ArrowUpRight, X } from 'lucide-react';

export default function CalFloatingWidget() {
  const [isHovered, setIsHovered] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-6 xl:bottom-24 left-4 md:left-8 z-90 flex items-center gap-2 font-mono">
      {/* Main Floating Cal Trigger */}
      <a
        href="https://cal.com/nazrul"
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center gap-3 px-4 py-3 rounded-2xl liquid-glass border border-signal-dim/40 hover:border-black text-textMain shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-[1.02] cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-signal group-hover:text-black transition-colors" />
          <div className="flex flex-col text-left">
            <span className="text-[10px] uppercase tracking-wider text-textMuted font-semibold">
              Available for hire
            </span>
            <span className="text-xs font-bold text-textMain group-hover:text-black transition-colors">
              Schedule a Sync
            </span>
          </div>
        </div>

        <ArrowUpRight className="w-3.5 h-3.5 text-textMuted group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ml-1" />
      </a>

      {/* Dismiss Button */}
      <button
        onClick={() => setDismissed(true)}
        title="Dismiss widget"
        className="p-2 rounded-xl liquid-glass-subtle border border-borderGlass text-textMuted hover:text-red hover:border-red/40 transition-all cursor-pointer opacity-60 hover:opacity-100"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
