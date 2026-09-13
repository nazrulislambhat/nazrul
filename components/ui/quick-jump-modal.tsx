// components/ui/quick-jump-modal.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { Command, CornerDownLeft } from 'lucide-react';

export default function QuickJumpModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-md p-4 rounded-2xl liquid-glass border border-borderGlass shadow-2xl font-mono text-xs"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 pb-3 border-b border-borderGlass text-textMuted">
          <Command className="w-3.5 h-3.5 text-signal" />
          <span className="text-textMain font-semibold">Quick Navigation</span>
          <span className="ml-auto text-[10px] text-textMuted/60">
            ESC to close
          </span>
        </div>
        <ul className="divide-y divide-borderGlass/40 pt-2">
          {[
            { label: 'Jump to Architecture & Projects', href: '#projects' },
            { label: 'Inspect Work Experience', href: '#experience' },
            { label: 'View Technical Stack', href: '#skills' },
            { label: 'Open Printable Resume', href: '/resume' },
          ].map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-2 px-1 text-textMuted hover:text-signal hover:bg-surface/50 rounded-sm transition-colors"
              >
                <span>{item.label}</span>
                <CornerDownLeft className="w-3 h-3 text-textMuted/40" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
