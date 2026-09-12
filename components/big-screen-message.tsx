'use client';

import { useEffect, useState } from 'react';
import { Monitor, Sparkles, X } from 'lucide-react';

export default function BigScreenMessage() {
  const [isUltraWide, setIsUltraWide] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const checkResolution = () => {
      const width = window.innerWidth;
      setViewportWidth(width);
      setIsUltraWide(width >= 2440);
    };

    checkResolution();
    window.addEventListener('resize', checkResolution);
    return () => window.removeEventListener('resize', checkResolution);
  }, []);

  if (!isUltraWide || dismissed) return null;

  return (
    <aside
      aria-label="Ultra-wide screen detector"
      className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3.5 px-4 py-2.5 rounded-2xl liquid-glass border border-signal-dim/40 shadow-[0_0_30px_-5px_rgba(5,223,114,0.25)] font-mono text-xs text-textMain selection:bg-volt selection:text-black animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-volt opacity-80" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-signal shadow-[0_0_8px_#CCF380]" />
        </span>
        <Monitor className="w-4 h-4 text-signal" />
      </div>

      <div className="flex items-center gap-1.5">
        <span className="font-semibold text-textMain">
          Ultra-wide display detected
        </span>
        <span className="text-textMuted/60">•</span>
        <span className="text-signal font-bold">{viewportWidth}px</span>
        <Sparkles className="w-3.5 h-3.5 text-volt ml-0.5" />
      </div>

      <button
        onClick={() => setDismissed(true)}
        className="p-1 -mr-1 rounded-lg text-textMuted hover:text-textMain hover:bg-surface transition-colors"
        aria-label="Dismiss banner"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </aside>
  );
}
