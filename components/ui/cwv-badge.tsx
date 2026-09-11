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

      // 3. Observe Cumulative Layout Shift (CLS)
      const clsObserver = new PerformanceObserver((entryList) => {
        let clsScore = 0;
        for (const entry of entryList.getEntries()) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          if (!(entry as any).hadRecentInput) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            clsScore += (entry as any).value;
          }
        }
        setMetrics((prev) => ({
          ...prev,
          cls: parseFloat(clsScore.toFixed(3)),
        }));
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
      className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-3 px-3.5 py-1.5 rounded-full liquid-glass border border-borderGlass shadow-lg font-mono text-[10.5px] select-none text-textMuted transition-all duration-300 hover:border-green/50 hover:shadow-[0_0_20px_-5px_rgba(204,243,128,0.18)]"
    >
      {/* Status Signal with #CCF380 Accent */}
      <div className="flex items-center gap-1.5 font-semibold text-textMain">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-80" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green" />
        </span>
        <Activity className="w-3 h-3 text-green" />
        <span className="tracking-wider">CWV</span>
      </div>

      <span className="text-borderGlass">|</span>

      {/* FCP metric */}
      <div className="flex items-center gap-1">
        <span>FCP</span>
        <span className="font-bold text-green">
          {metrics.fcp ? `${metrics.fcp}ms` : 'calc...'}
        </span>
      </div>

      <span>•</span>

      {/* LCP metric */}
      <div className="flex items-center gap-1">
        <span>LCP</span>
        <span className="font-bold text-green">
          {metrics.lcp ? `${(metrics.lcp / 1000).toFixed(2)}s` : 'calc...'}
        </span>
      </div>

      <span>•</span>

      {/* CLS metric */}
      <div className="flex items-center gap-1">
        <span>CLS</span>
        <span className="font-bold text-green">{metrics.cls}</span>
      </div>
    </aside>
  );
}
