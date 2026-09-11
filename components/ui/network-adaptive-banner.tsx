'use client';

import React, { useState, useEffect } from 'react';
import { WifiOff, Zap, X } from 'lucide-react';

interface NetworkConnection extends EventTarget {
  effectiveType?: '2g' | '3g' | '4g' | 'slow-2g';
  saveData?: boolean;
  addEventListener: (type: string, listener: () => void) => void;
  removeEventListener: (type: string, listener: () => void) => void;
}

export default function NetworkAdaptiveBanner() {
  const [isSlow, setIsSlow] = useState(false);
  const [connectionType, setConnectionType] = useState<string>('');
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !('connection' in navigator)) {
      return;
    }

    const conn = (navigator as unknown as { connection: NetworkConnection })
      .connection;

    const checkNetworkSpeed = () => {
      const slow =
        conn.saveData ||
        conn.effectiveType === '2g' ||
        conn.effectiveType === 'slow-2g' ||
        conn.effectiveType === '3g';

      setIsSlow(Boolean(slow));
      setConnectionType(conn.effectiveType || 'slow');

      // Inject global class to allow CSS rules to throttle blurs/animations automatically
      if (slow) {
        document.documentElement.classList.add('low-bandwidth-mode');
      } else {
        document.documentElement.classList.remove('low-bandwidth-mode');
      }
    };

    checkNetworkSpeed();
    conn.addEventListener('change', checkNetworkSpeed);

    return () => {
      conn.removeEventListener('change', checkNetworkSpeed);
      document.documentElement.classList.remove('low-bandwidth-mode');
    };
  }, []);

  if (!isSlow || isDismissed) return null;

  return (
    <aside
      aria-label="Low bandwidth connection alert"
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] sm:w-auto max-w-lg px-4 py-2 rounded-2xl liquid-glass border border-volt/40 shadow-xl flex items-center justify-between gap-3 font-mono text-xs text-textMain animate-in fade-in slide-in-from-top-2 duration-300"
    >
      <div className="flex items-center gap-2">
        <WifiOff className="w-4 h-4 text-green shrink-0" />
        <p className="leading-tight text-[11px] sm:text-xs">
          <strong className="text-green uppercase">
            {connectionType} connection:
          </strong>{' '}
          Throttling heavy blur shaders &amp; motion to lock Core Web Vitals at
          60 FPS.
        </p>
      </div>

      <button
        type="button"
        onClick={() => setIsDismissed(true)}
        className="p-1 text-textMuted hover:text-textMain transition-colors shrink-0 cursor-pointer"
        aria-label="Dismiss banner"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </aside>
  );
}
