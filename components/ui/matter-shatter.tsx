'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
  RotateCcw,
  Trash2,
  Sparkles,
  Flame,
  CheckCircle2,
  Mail,
  ExternalLink,
} from 'lucide-react';

const hireNotes = [
  '⚡ Destructured down to raw AST. Clean architecture for your next project.',
  '📦 Shipped into recycling. Ready to lead your frontend systems.',
  '🧪 Component unmounted cleanly. Zero layout thrashing in production.',
  '🧹 Garbage-collected. Let’s talk senior engineering roles.',
];

interface ActiveNote {
  id: string;
  note: string;
}

export default function MatterShatter({
  isActive = true,
  onDeactivate = () => {},
}: {
  isActive?: boolean;
  onDeactivate?: () => void;
}) {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isSwinging, setIsSwinging] = useState(false);
  const [recycledCount, setRecycledCount] = useState(0);
  const [activeNote, setActiveNote] = useState<ActiveNote | null>(null);
  const [isIncinerating, setIsIncinerating] = useState(false);

  const binRef = useRef<HTMLDivElement | null>(null);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const noteTimerRef = useRef<NodeJS.Timeout | null>(null);

  // 1. Desktop Hammer Cursor Tracking
  useEffect(() => {
    if (!isActive) return;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isActive]);

  // 2. Shred & Vacuum Stream with Delayed Single Note Swap
  const vacuumElement = useCallback((el: HTMLElement) => {
    if (el.getAttribute('data-shredded') === 'true') return;

    const rect = el.getBoundingClientRect();
    const binEl = document.getElementById('shredder-dustbin');
    if (!binEl) return;

    const binRect = binEl.getBoundingClientRect();
    const targetX = binRect.left + binRect.width / 2;
    const targetY = binRect.top + 20;

    // Mark original card safely and disable hit testing completely
    el.setAttribute('data-shredded', 'true');
    el.style.opacity = '0';
    el.style.pointerEvents = 'none';

    // Increment bin counter
    setRecycledCount((prev) => prev + 1);

    // If a note is currently showing, hide it immediately to prepare for the delay transition
    setActiveNote(null);
    if (noteTimerRef.current) clearTimeout(noteTimerRef.current);

    // Set a delay before displaying the new single note card
    noteTimerRef.current = setTimeout(() => {
      const randomNote =
        hireNotes[Math.floor(Math.random() * hireNotes.length)];
      setActiveNote({
        id: Math.random().toString(),
        note: randomNote,
      });
    }, 350); // 350ms delay for smooth cadence

    // Generate Direct Suction Particles (Ribbons pulled into the bin)
    const particleCount = 14;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'vacuum-stream-particle';

      const startX = rect.left + Math.random() * rect.width;
      const startY = rect.top + Math.random() * rect.height;
      const width = 18 + Math.random() * 26;
      const height = 10 + Math.random() * 16;

      particle.style.position = 'fixed';
      particle.style.left = `${startX}px`;
      particle.style.top = `${startY}px`;
      particle.style.width = `${width}px`;
      particle.style.height = `${height}px`;
      particle.style.zIndex = '100';
      particle.style.pointerEvents = 'none';
      particle.style.borderRadius = '4px';
      particle.style.background =
        i % 2 === 0 ? 'rgba(204, 243, 128, 0.85)' : 'rgba(5, 223, 114, 0.85)';

      particle.style.boxShadow = '0 0 10px rgba(5, 223, 114, 0.4)';
      particle.style.transition = `all ${0.45 + Math.random() * 0.25}s cubic-bezier(0.22, 1, 0.36, 1)`;

      document.body.appendChild(particle);

      requestAnimationFrame(() => {
        particle.style.transform = `translate3d(${targetX - startX}px, ${targetY - startY}px, 0) scale(0.1) rotate(${
          (Math.random() - 0.5) * 720
        }deg)`;
        particle.style.opacity = '0';
      });

      setTimeout(() => {
        particle.remove();
      }, 700);
    }

    // Trigger dustbin absorption reaction
    setTimeout(() => {
      setIsIncinerating(true);
      setTimeout(() => setIsIncinerating(false), 250);
    }, 450);
  }, []);

  // 3. Pointer Strike Listeners
  useEffect(() => {
    if (!isActive) return;

    const handleAction = (target: HTMLElement) => {
      if (
        target.closest('#shatter-hud') ||
        target.closest('#shredder-dustbin') ||
        target.closest('#glass-controls-island') ||
        target.closest('.recycled-note-card a')
      ) {
        return;
      }

      setIsSwinging(true);
      setTimeout(() => setIsSwinging(false), 120);

      const candidateCards = Array.from(
        document.querySelectorAll<HTMLElement>(
          '.liquid-glass-subtle, .liquid-glass',
        ),
      ).filter(
        (card) =>
          card.id !== 'shatter-hud' &&
          card.id !== 'shredder-dustbin' &&
          !card.closest('#shatter-hud') &&
          !card.closest('#shredder-dustbin') &&
          card.id !== 'glass-controls-island' &&
          !card.closest('#glass-controls-island') &&
          card.getAttribute('data-shredded') !== 'true',
      );

      const targetCard = candidateCards.find((card) => card.contains(target));
      if (targetCard) {
        vacuumElement(targetCard);
      }
    };

    const handleClick = (e: MouseEvent) => {
      handleAction(e.target as HTMLElement);
    };

    const handleTouch = (e: TouchEvent) => {
      if (e.changedTouches.length > 0) {
        const touch = e.changedTouches[0];
        const target = document.elementFromPoint(
          touch.clientX,
          touch.clientY,
        ) as HTMLElement;
        if (target) handleAction(target);
      }
    };

    window.addEventListener('click', handleClick, true);
    window.addEventListener('touchend', handleTouch, true);

    return () => {
      window.removeEventListener('click', handleClick, true);
      window.removeEventListener('touchend', handleTouch, true);
    };
  }, [isActive, vacuumElement]);

  // 4. Shred Everything in Sequence
  const shredEverything = () => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    if (noteTimerRef.current) clearTimeout(noteTimerRef.current);

    const cards = Array.from(
      document.querySelectorAll<HTMLElement>(
        '.liquid-glass-subtle, .liquid-glass',
      ),
    ).filter(
      (el) =>
        el.id !== 'shatter-hud' &&
        el.id !== 'shredder-dustbin' &&
        !el.closest('#shatter-hud') &&
        !el.closest('#shredder-dustbin') &&
        el.id !== 'glass-controls-island' &&
        !el.closest('#glass-controls-island') &&
        el.getAttribute('data-shredded') !== 'true',
    );

    cards.forEach((card, idx) => {
      const timeout = setTimeout(() => {
        vacuumElement(card);
      }, idx * 120);
      timeoutsRef.current.push(timeout);
    });
  };

  // 5. Restore All Instantly
  const restoreAll = () => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    if (noteTimerRef.current) clearTimeout(noteTimerRef.current);

    document
      .querySelectorAll('.vacuum-stream-particle')
      .forEach((el) => el.remove());
    setActiveNote(null);
    setRecycledCount(0);

    document
      .querySelectorAll<HTMLElement>('[data-shredded="true"]')
      .forEach((el) => {
        el.removeAttribute('data-shredded');
        el.style.opacity = '';
        el.style.pointerEvents = '';
        el.style.visibility = '';
      });

    onDeactivate();
  };

  if (!isActive) return null;

  return (
    <>
      {/* Desktop Hammer Cursor */}
      <div
        style={{
          transform: `translate3d(${cursorPos.x}px, ${cursorPos.y - 32}px, 0) rotate(${
            isSwinging ? '-65deg' : '0deg'
          })`,
          transformOrigin: 'bottom left',
        }}
        className="hidden md:block pointer-events-none fixed top-0 left-0 z-[110] transition-transform duration-75 ease-out select-none"
      >
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect
            x="22"
            y="16"
            width="5"
            height="28"
            rx="2"
            className="fill-amber-900 stroke-black stroke-1"
          />
          <rect
            x="11"
            y="8"
            width="27"
            height="13"
            rx="2"
            className="fill-neutral-200 stroke-black stroke-2 shadow-2xl"
          />
        </svg>
      </div>

      {/* Top Floating Action HUD & Single Active Note Card Side-by-Side */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[105] flex flex-col items-center gap-3 w-full max-w-lg px-4 pointer-events-none">
        {/* The Action HUD */}
        <aside
          id="shatter-hud"
          aria-label="Interactive Vacuum Shredder HUD"
          className="flex flex-wrap items-center justify-center gap-3 px-5 py-2.5 rounded-xl liquid-glass border border-signal-dim/40 shadow-2xl font-mono text-xs text-textMain selection:bg-volt selection:text-black pointer-events-auto"
        >
          <div className="flex items-center gap-2 text-signal font-bold uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-volt opacity-80" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-signal shadow-[0_0_8px_#CCF380]" />
            </span>
            <Sparkles className="w-3.5 h-3.5 text-volt" />
            <span>Clean Recycler</span>
          </div>

          <span className="text-textMuted/60">•</span>
          <span>
            Recycled: <strong className="text-signal">{recycledCount}</strong>{' '}
            cards
          </span>

          <button
            onClick={shredEverything}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-red/40 bg-red/10 text-red font-bold hover:bg-red hover:text-white transition-all shadow-xs cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Shred All</span>
          </button>

          <button
            onClick={restoreAll}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black text-white dark:bg-white dark:text-black font-semibold hover:bg-volt hover:text-black dark:hover:bg-volt dark:hover:text-black transition-all shadow-xs cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Empty &amp; Restore</span>
          </button>
        </aside>

        {/* Exactly ONE "Hire Nazrul" Note Card with Delayed Swap Animation */}
        {activeNote && (
          <div
            key={activeNote.id}
            className="recycled-note-card w-full p-4 flex flex-col items-center justify-center text-center rounded-2xl border border-signal-dim/40 bg-black/90 text-white shadow-2xl backdrop-blur-md pointer-events-auto transition-all animate-in fade-in zoom-in-95 duration-300"
          >
            <span className="font-mono text-xs text-signal font-bold uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-volt animate-ping" />
              [ DEPOSITED TO DUSTBIN ]
            </span>
            <p className="font-bold text-xs sm:text-sm mb-3 max-w-md text-white leading-relaxed">
              {activeNote.note}
            </p>
            <a
              href="mailto:nazrulislambhat@gmail.com"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-volt text-black hover:bg-white font-mono text-xs font-bold transition-all shadow-[0_0_15px_-3px_rgba(204,243,128,0.4)] cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Hire Nazrul</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        )}
      </div>

      {/* Industrial Liquid Glass Dustbin */}
      <div
        id="shredder-dustbin"
        ref={binRef}
        className={`fixed bottom-4 right-4 md:bottom-6 md:right-8 z-[95] w-40 sm:w-48 h-36 rounded-3xl liquid-glass border-2 transition-all duration-300 pointer-events-none p-3.5 flex flex-col justify-between items-center text-center ${
          isIncinerating
            ? 'border-signal scale-105 shadow-[0_0_35px_rgba(5,223,114,0.45)]'
            : 'border-borderGlass shadow-xl'
        }`}
      >
        <div className="w-full flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-textMuted">
          <span className="flex items-center gap-1 font-semibold text-textMain">
            <Flame
              className={`w-3.5 h-3.5 ${isIncinerating ? 'text-volt animate-bounce' : 'text-signal'}`}
            />
            Recycler
          </span>
          <span className="text-signal font-bold">{recycledCount} IN BIN</span>
        </div>

        {/* Dustbin Vacuum Slot */}
        <div className="relative w-full h-14 rounded-2xl border border-borderGlass bg-surface/80 flex items-center justify-center overflow-hidden">
          <div
            className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-signal to-transparent ${
              isIncinerating ? 'opacity-100 animate-pulse' : 'opacity-30'
            }`}
          />
          <Trash2
            className={`w-7 h-7 transition-transform duration-200 ${
              isIncinerating ? 'text-volt scale-125 rotate-6' : 'text-textMuted'
            }`}
          />
        </div>

        <span className="font-mono text-[9px] text-textMuted flex items-center gap-1">
          <CheckCircle2 className="w-2.5 h-2.5 text-signal" />
          Auto-compacted • 0 Debris
        </span>
      </div>
    </>
  );
}
