'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wrench, Mail, RotateCcw, AlertTriangle } from 'lucide-react';

const secretNotes = [
  '💥 Component shattered! Let’s build something unbreakable together.',
  '🔨 Clean strike! Senior Frontend Architect ready for action.',
  '⚡ Destructured down to raw AST. Reach out to hire me!',
  '🧪 Fault injected. Error handling: 100% resilient.',
];

export default function HammerManager({
  isHammerActive,
  onDeactivate,
}: {
  isHammerActive: boolean;
  onDeactivate: () => void;
}) {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isSwinging, setIsSwinging] = useState(false);
  const [shatteredCount, setShatteredCount] = useState(0);
  const brokenElementsRef = useRef<HTMLElement[]>([]);

  // 1. Hammer Cursor Tracker
  useEffect(() => {
    if (!isHammerActive) return;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHammerActive]);

  // 2. Click-to-Shatter Event Interceptor
  useEffect(() => {
    if (!isHammerActive) return;

    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Avoid breaking our own control widgets
      if (
        target.closest('#hammer-hud') ||
        target.closest('#glass-controls-island')
      ) {
        return;
      }

      // Swing animation
      setIsSwinging(true);
      setTimeout(() => setIsSwinging(false), 200);

      // Find nearest breakable section/card
      const breakable = target.closest(
        '.liquid-glass, .liquid-glass-subtle, article, section > div, .project-card',
      ) as HTMLElement;

      if (breakable && !breakable.dataset.shattered) {
        breakable.dataset.shattered = 'true';
        brokenElementsRef.current.push(breakable);
        setShatteredCount((c) => c + 1);

        const randomMsg =
          secretNotes[Math.floor(Math.random() * secretNotes.length)];

        // Save original styling
        const prevTransition = breakable.style.transition;
        const prevTransform = breakable.style.transform;
        const prevOpacity = breakable.style.opacity;

        // Practical glass fracture effect
        breakable.style.transition = 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
        breakable.style.transform = `perspective(800px) rotateX(12deg) rotateY(-8deg) scale(0.96) translateY(8px)`;
        breakable.style.opacity = '0.4';
        breakable.style.filter = 'blur(1px) contrast(150%)';
        breakable.style.pointerEvents = 'none';

        // Spawn realistic SVG fissure / message badge
        const overlay = document.createElement('div');
        overlay.className =
          'absolute inset-0 z-30 flex flex-col items-center justify-center p-6 text-center bg-black/75 rounded-2xl backdrop-blur-md border-2 border-red text-white shadow-2xl animate-fade-in pointer-events-auto';
        overlay.innerHTML = `
          <div class="font-mono text-xs text-red font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <span>[ SYSTEM BREACH DETECTED ]</span>
          </div>
          <p class="font-bold text-sm md:text-base mb-4 max-w-sm">${randomMsg}</p>
          <a href="mailto:nazrulislambhat@gmail.com" class="px-4 py-2 rounded-lg bg-primary hover:bg-primaryLight text-white font-mono text-xs font-bold transition-all shadow-md">
            Hire This Engineer
          </a>
        `;
        breakable.style.position = 'relative';
        breakable.appendChild(overlay);
      }
    };

    window.addEventListener('click', handleGlobalClick, true);
    return () => window.removeEventListener('click', handleGlobalClick, true);
  }, [isHammerActive]);

  // 3. Restore all elements
  const handleRestoreAll = () => {
    brokenElementsRef.current.forEach((el) => {
      delete el.dataset.shattered;
      el.style.transform = '';
      el.style.opacity = '';
      el.style.filter = '';
      el.style.pointerEvents = '';
      const overlay = el.querySelector('.border-red');
      if (overlay) overlay.remove();
    });
    brokenElementsRef.current = [];
    setShatteredCount(0);
    onDeactivate();
  };

  if (!isHammerActive) return null;

  return (
    <>
      {/* Dynamic Sledgehammer Cursor */}
      <div
        style={{
          transform: `translate3d(${cursorPos.x}px, ${cursorPos.y - 32}px, 0) rotate(${
            isSwinging ? '-55deg' : '0deg'
          })`,
          transformOrigin: 'bottom left',
        }}
        className="pointer-events-none fixed top-0 left-0 z-100 transition-transform duration-100 ease-out select-none"
      >
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          {/* Wood Handle */}
          <rect
            x="22"
            y="16"
            width="5"
            height="28"
            rx="2"
            className="fill-amber-700 stroke-black stroke-1"
          />
          {/* Steel Sledge Head */}
          <rect
            x="12"
            y="8"
            width="25"
            height="12"
            rx="2"
            className="fill-neutral-300 dark:fill-neutral-100 stroke-black stroke-1.5"
          />
          <line x1="20" y1="8" x2="20" y2="20" stroke="#999" strokeWidth="2" />
        </svg>
      </div>

      {/* Floating HUD Controller */}
      <div
        id="hammer-hud"
        className="fixed top-6 left-1/2 -translate-x-1/2 z-90 flex items-center gap-4 px-5 py-2.5 rounded-full liquid-glass border-2 border-red shadow-2xl font-mono text-xs text-textMain animate-bounce"
      >
        <div className="flex items-center gap-2 text-red font-bold uppercase">
          <AlertTriangle className="w-4 h-4" />
          <span>Hammer Mode Active</span>
        </div>
        <span className="text-textMuted">|</span>
        <span>Tap any card to shatter ({shatteredCount})</span>
        <button
          onClick={handleRestoreAll}
          className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black text-white dark:bg-white dark:text-black font-semibold hover:opacity-85 transition-opacity"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Repair All</span>
        </button>
      </div>
    </>
  );
}
