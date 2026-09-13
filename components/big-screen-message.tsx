'use client';

import { useEffect, useState } from 'react';
import { Monitor, Sparkles, X } from 'lucide-react';

export default function BigScreenMessage() {
  const [isMounted, setIsMounted] = useState(false);
  const [isUltraWide, setIsUltraWide] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    setIsMounted(true);

    const checkResolution = () => {
      const width = window.innerWidth;
      setViewportWidth(width);

      // Temporarily set to 1200px for easy testing. Change back to 2440 if needed.
      setIsUltraWide(width >= 2440);
    };

    checkResolution();
    window.addEventListener('resize', checkResolution);
    return () => window.removeEventListener('resize', checkResolution);
  }, []);

  if (!isMounted || !isUltraWide || dismissed) return null;

  return (
    <aside
      aria-label="Ultra-wide screen detector"
      className="fixed bottom-24 right-6 flex items-center gap-3.5 px-4 py-2.5 rounded-2xl liquid-glass border border-red-500/40 shadow-[0_0_30px_-5px_rgba(239,68,68,0.25)] font-mono text-xs text-textMain selection:bg-red-500 selection:text-white animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-80" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500 shadow-[0_0_8px_#ef4444]" />
        </span>
        <Monitor className="w-4 h-4 text-red-500" />
      </div>

      <div className="flex items-center gap-1.5">
        <span className="font-semibold text-textMain selection:text-primary">
          Even Cooper's ship couldn't handle a horizon this wide
        </span>
        <span className="text-textMuted/60">•</span>
        <span className="text-red-500 font-bold">{viewportWidth}px</span>
        <Sparkles className="w-3.5 h-3.5 text-red-400 ml-0.5" />
      </div>

      <button
        onClick={() => setDismissed(true)}
        className="p-1 -mr-1 rounded-lg text-textMuted hover:text-red hover:bg-surface transition-colors cursor-pointer"
        aria-label="Dismiss banner"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </aside>
  );
}
