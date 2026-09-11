'use client';

import React, { useEffect, useState } from 'react';
import { Activity } from 'lucide-react';

interface VitalsMetrics {
  lcp: number | null;
  cls: number;
  fcp: number | null;
}

export default function CwvBadge() {
  const [metrics, setMetrics] = useState<VitalsMetrics>({
    lcp: null,
    cls: 0,
    fcp: null,
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    try {
      // 1. Observe Paint timing (FCP)
      const paintObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntriesByName(
          'first-contentful-paint',
        )) {
          setMetrics((prev) => ({ ...prev, fcp: Math.round(entry.startTime) }));
        }
      });
      paintObserver.observe({ type: 'paint', buffered: true });

      // 2. Observe Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          setMetrics((prev) => ({
            ...prev,
            lcp: Math.round(lastEntry.startTime),
          }));
        }
      });
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

      // 3. Observe Cumulative Layout Shift (CLS) with proper Session Windows
      let sessionValue = 0;
      let sessionEntries: PerformanceEntry[] = [];

      const clsObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          const layoutShift = entry as any;

          // Ignore layout shifts that occur within 500ms of user input
          if (!layoutShift.hadRecentInput) {
            const firstSessionEntry = sessionEntries[0];
            const lastSessionEntry = sessionEntries[sessionEntries.length - 1];

            // If entry is part of existing session window (< 1s gap, max 5s total window)
            if (
              sessionValue &&
              entry.startTime - lastSessionEntry.startTime < 1000 &&
              entry.startTime - firstSessionEntry.startTime < 5000
            ) {
              sessionValue += layoutShift.value;
              sessionEntries.push(entry);
            } else {
              // New session window
              sessionValue = layoutShift.value;
              sessionEntries = [entry];
            }

            setMetrics((prev) => ({
              ...prev,
              cls: parseFloat(Math.max(prev.cls, sessionValue).toFixed(3)),
            }));
          }
        }
      });
      clsObserver.observe({ type: 'layout-shift', buffered: true });

      return () => {
        paintObserver.disconnect();
        lcpObserver.disconnect();
        clsObserver.disconnect();
      };
    } catch {
      // Gracefully fall back if observer throws in unsupported engines
    }
  }, []);

  return (
    <aside
      aria-label="Live Performance Metrics"
      className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-3 px-3.5 py-1.5 rounded-full liquid-glass border border-borderGlass shadow-lg font-mono text-[10.5px] select-none text-textMuted transition-all duration-300 hover:border-signal-dim/50"
    >
      <div className="flex items-center gap-1.5 font-semibold text-textMain">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-volt opacity-80" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-signal shadow-[0_0_6px_#00F58C]" />
        </span>
        <Activity className="w-3 h-3 text-signal" />
        <span className="tracking-wider">CWV</span>
      </div>

      <span className="text-borderGlass">|</span>

      {/* FCP metric */}
      <div className="flex items-center gap-1">
        <span>FCP</span>
        <span className="font-bold text-signal">
          {metrics.fcp ? `${metrics.fcp}ms` : 'calc...'}
        </span>
      </div>

      <span>•</span>

      {/* LCP metric */}
      <div className="flex items-center gap-1">
        <span>LCP</span>
        <span className="font-bold text-signal">
          {metrics.lcp ? `${(metrics.lcp / 1000).toFixed(2)}s` : 'calc...'}
        </span>
      </div>

      <span>•</span>

      {/* CLS metric */}
      <div className="flex items-center gap-1">
        <span>CLS</span>
        <span className="font-bold text-signal">{metrics.cls}</span>
      </div>
    </aside>
  );
}
