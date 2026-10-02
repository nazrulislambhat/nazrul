'use client';

import React, { useRef, useState, useCallback } from 'react';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from 'motion/react';
import { BookOpen, Volume2, VolumeX } from 'lucide-react';

const READING_LIST: BookItem[] = [
  {
    id: 'enjoy-your-life',
    title: 'Enjoy Your Life',
    author: 'Dr. Muhammad Abd Al-Rahman Al-Arifi',
    category: 'Interpersonal Art',
    status: 'reading',
    statusLabel: 'Currently Reading',
    coreIdea:
      'Practical interpersonal skills, empathy, and emotional intelligence synthesized with classical Islamic wisdom.',
    statusColor: '#3139fb',
    width: 44,
    height: 254,
    tiltDeg: -2.2,
    renderSpine: () => (
      <div className="w-full h-full bg-[#f8fafc] text-slate-900 flex flex-col justify-between py-3 items-center border-l border-r border-slate-300">
        <div className="w-6 h-6 rounded-full border border-blue-600 flex items-center justify-center text-[10px] font-bold text-blue-600">
          AR
        </div>
        <div className="w-full bg-[#1e3a8a] py-4 px-1 flex-1 flex items-center justify-center my-2">
          <span className="font-sans font-bold text-[10px] uppercase tracking-widest -rotate-90 whitespace-nowrap text-white drop-shadow-xs">
            ENJOY YOUR LIFE
          </span>
        </div>
        <div className="w-3 h-3 rounded-full bg-blue-600 shadow-2xs" />
      </div>
    ),
  },
  {
    id: 'story-of-prophets',
    title: 'Stories of the Prophets',
    author: 'Ibn Kathir',
    category: 'History & Guidance',
    status: 'almost-done',
    statusLabel: 'Almost Done',
    coreIdea:
      'Chronicles of perseverance, moral convictions, leadership under pressure, and enduring faith.',
    statusColor: '#ccf380',
    width: 42,
    height: 246,
    tiltDeg: 1.8,
    renderSpine: () => (
      <div className="w-full h-full bg-[#3e2723] text-amber-200 flex flex-col justify-between py-3 items-center border-l border-r border-stone-900">
        <div className="w-2 h-2 rounded-full border border-amber-500/60" />
        <div className="flex-1 flex items-center justify-center my-2">
          <span className="font-serif font-bold text-[10px] uppercase tracking-widest -rotate-90 whitespace-nowrap text-amber-100">
            STORIES OF THE PROPHETS
          </span>
        </div>
        <div className="w-3 h-3 border border-amber-500/40 rotate-45" />
      </div>
    ),
  },
  {
    id: 'the-alchemist',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    category: 'Allegory & Purpose',
    status: 'almost-done',
    statusLabel: 'Almost Done',
    coreIdea:
      'When you want something, all the universe conspires in helping you to achieve it.',
    statusColor: '#ccf380',
    width: 32,
    height: 220,
    tiltDeg: -1.5,
    renderSpine: () => (
      <div className="w-full h-full bg-[#1a0f0a] text-yellow-500 flex flex-col justify-between py-3 items-center border-l border-r border-amber-950">
        <span className="font-serif text-[9px] text-yellow-600">PC</span>
        <div className="flex-1 flex items-center justify-center my-2">
          <span className="font-serif font-bold text-[10px] uppercase tracking-wider -rotate-90 whitespace-nowrap text-yellow-300">
            THE ALCHEMIST
          </span>
        </div>
        <div className="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_6px_#f59e0b]" />
      </div>
    ),
  },
  {
    id: 'subtle-art',
    title: 'The Subtle Art of Not Giving a F*ck',
    author: 'Mark Manson',
    category: 'Practical Philosophy',
    status: 'almost-done',
    statusLabel: 'Almost Done',
    coreIdea:
      'A counterintuitive approach to living a good life: choose what struggles and values are genuinely worth your finite attention.',
    statusColor: '#ccf380',
    width: 36,
    height: 232,
    tiltDeg: 2.5,
    renderSpine: () => (
      <div className="w-full h-full bg-[#c2410c] text-white flex flex-col justify-between py-3 items-center border-l border-r border-orange-950">
        <span className="font-sans font-black text-[9px]">MM</span>
        <div className="flex-1 flex items-center justify-center my-2">
          <span className="font-sans font-extrabold text-[9.5px] uppercase tracking-tight -rotate-90 whitespace-nowrap text-orange-100">
            THE SUBTLE ART
          </span>
        </div>
        <div className="w-2 h-2 rounded-full bg-white/80" />
      </div>
    ),
  },
  {
    id: 'deep-work',
    title: 'Deep Work',
    author: 'Cal Newport',
    category: 'Cognitive Output',
    status: 'almost-done',
    statusLabel: 'Almost Done',
    coreIdea:
      'Rules for focused success in a distracted world: deep, uninterrupted flow produces disproportionate leverage.',
    statusColor: '#ccf380',
    width: 38,
    height: 236,
    tiltDeg: -0.8,
    renderSpine: () => (
      <div className="w-full h-full bg-[#eab308] text-black flex flex-col justify-between py-3 items-center border-l border-r border-yellow-600">
        <span className="font-mono font-bold text-[9px]">CN</span>
        <div className="flex-1 flex items-center justify-center my-2">
          <span className="font-sans font-black text-[11px] uppercase tracking-widest -rotate-90 whitespace-nowrap text-black">
            DEEP WORK
          </span>
        </div>
        <div className="w-2 h-2 rounded-full bg-black" />
      </div>
    ),
  },
  {
    id: 'psychology-of-money',
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    category: 'Behavioral Finance',
    status: 'almost-done',
    statusLabel: 'Almost Done',
    coreIdea:
      'Doing well with money has a little to do with how smart you are and a lot to do with how you behave.',
    statusColor: '#ccf380',
    width: 40,
    height: 240,
    tiltDeg: 3.2,
    renderSpine: () => (
      <div className="w-full h-full bg-[#fdfbf7] text-slate-900 flex flex-col justify-between py-3 items-center border-l border-r border-slate-300">
        <span className="font-serif font-black text-[10px] text-slate-800">
          $
        </span>
        <div className="flex-1 flex items-center justify-center my-2">
          <span className="font-serif font-bold text-[10px] tracking-tight -rotate-90 whitespace-nowrap text-slate-900">
            PSYCHOLOGY OF MONEY
          </span>
        </div>
        <span className="font-mono text-[8px] text-slate-600">MH</span>
      </div>
    ),
  },
  {
    id: 'atomic-habits',
    title: 'Atomic Habits',
    author: 'James Clear',
    category: 'Systemic Improvement',
    status: 'almost-done',
    statusLabel: 'Almost Done',
    coreIdea:
      'You do not rise to the level of your goals, you fall to the level of your systems. 1% compounding daily.',
    statusColor: '#ccf380',
    width: 42,
    height: 246,
    tiltDeg: -2.8,
    renderSpine: () => (
      <div className="w-full h-full bg-[#fafaf9] text-stone-900 flex flex-col justify-between py-3 items-center border-l border-r border-stone-300">
        <div className="w-2.5 h-2.5 rounded-full border border-stone-400 flex items-center justify-center">
          <div className="w-1 h-1 bg-stone-900 rounded-full" />
        </div>
        <div className="flex-1 flex items-center justify-center my-2">
          <span className="font-sans font-black text-[11px] uppercase tracking-wider text-stone-900 -rotate-90 whitespace-nowrap">
            ATOMIC HABITS
          </span>
        </div>
        <span className="font-sans font-bold text-[8.5px] text-stone-600">
          JC
        </span>
      </div>
    ),
  },
  {
    id: 'pragmatic-programmer',
    title: 'The Pragmatic Programmer',
    author: 'David Thomas & Andrew Hunt',
    category: 'Software Architecture',
    status: 'partially-read',
    statusLabel: 'Partially Read',
    coreIdea:
      'Care about your craft. Software development is continuous refactoring, proactive testing, and eliminating entropy.',
    statusColor: '#f43c00',
    width: 36,
    height: 234,
    tiltDeg: 1.4,
    renderSpine: () => (
      <div className="w-full h-full bg-[#451a03] text-amber-200 flex flex-col justify-between py-3 items-center border-l border-r border-stone-900">
        <span className="font-mono text-[8.5px] text-amber-400">20th</span>
        <div className="flex-1 flex items-center justify-center my-2">
          <span className="font-mono font-bold text-[9.5px] tracking-tight -rotate-90 whitespace-nowrap text-amber-100">
            PRAGMATIC PROGRAMMER
          </span>
        </div>
        <span className="font-mono text-[8px] text-amber-400">P</span>
      </div>
    ),
  },
  {
    id: 'cracking-coding-interview',
    title: 'Cracking the Coding Interview',
    author: 'Gayle Laakmann McDowell',
    category: 'Algorithms & Systems',
    status: 'partially-read',
    statusLabel: 'Partially Read',
    coreIdea:
      'Foundational algorithmic problem solving, time-space complexity tradeoffs, and edge-case dissection.',
    statusColor: '#f43c00',
    width: 56,
    height: 262,
    tiltDeg: -3.0,
    renderSpine: () => (
      <div className="w-full h-full bg-[#84cc16] text-black flex flex-col justify-between py-3 items-center border-l border-r border-lime-700">
        <div className="text-[9px] font-mono font-black text-black">6TH</div>
        <div className="flex-1 flex items-center justify-center my-2">
          <span className="font-sans font-black text-[10.5px] uppercase tracking-tight -rotate-90 whitespace-nowrap text-black">
            CRACKING THE CODING INTERVIEW
          </span>
        </div>
        <div className="w-4 h-4 rounded-full bg-black text-[#84cc16] flex items-center justify-center text-[8px] font-bold">
          GL
        </div>
      </div>
    ),
  },
];
export interface BookItem {
  id: string;
  title: string;
  author: string;
  category: string;
  status: 'reading' | 'partially-read' | 'almost-done';
  statusLabel: string;
  coreIdea: string;
  statusColor: string;
  width: number;
  height: number;
  tiltDeg?: number;
  renderSpine: () => React.ReactNode;
}

type Filter = 'all' | BookItem['status'];

const FILTERS: { key: Filter; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'reading', label: 'Reading' },
  { key: 'almost-done', label: 'Almost done' },
  { key: 'partially-read', label: 'Partial' },
];

function Spine({
  book,
  index,
  dimmed,
  mouseX,
  onHover,
}: {
  book: BookItem;
  index: number;
  dimmed: boolean;
  mouseX: MotionValue<number>;
  onHover: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Distance from pointer to this book's centre → proximity lift
  const distance = useTransform(mouseX, (v) => {
    const r = ref.current?.getBoundingClientRect();
    return r ? v - (r.left + r.width / 2) : 9999;
  });
  const lift = useSpring(useTransform(distance, [-140, 0, 140], [0, -18, 0]), {
    stiffness: 260,
    damping: 22,
  });

  const enter = () => {
    setHovered(true);
    onHover();
  };

  return (
    <motion.div
      ref={ref}
      style={{ width: book.width, height: book.height, y: lift }}
      animate={{
        opacity: dimmed ? 0.25 : 1,
        filter: dimmed ? 'grayscale(1)' : 'grayscale(0)',
      }}
      className="relative flex flex-col items-center justify-end"
    >
      <div
        style={{ transform: `rotate(${hovered ? 0 : book.tiltDeg || 0}deg)` }}
        className="transition-transform duration-300"
      >
        <motion.div
          aria-label={`${book.title} by ${book.author}`}
          onMouseEnter={enter}
          onMouseLeave={() => setHovered(false)}
          onTouchStart={enter}
          onTouchEnd={() => setTimeout(() => setHovered(false), 900)}
          animate={{ y: hovered ? -16 : 0, z: hovered ? 36 : 0 }}
          transition={{ duration: 0.16, ease: 'easeOut' }}
          style={{
            width: book.width,
            height: book.height,
            transformStyle: 'preserve-3d',
            transformOrigin: 'bottom center',
          }}
          className="relative rounded-t-sm shadow-[4px_0_12px_rgba(0,0,0,0.85)]"
        >
          <div className="relative w-full h-full rounded-t-sm overflow-hidden shadow-inner">
            {book.renderSpine()}
            <div className="absolute inset-0 bg-linear-to-r from-black/60 via-white/10 to-black/40 pointer-events-none" />
            {/* sheen that sweeps across on hover */}
            <motion.div
              aria-hidden
              initial={false}
              animate={{ x: hovered ? '120%' : '-120%' }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="absolute inset-y-0 w-1/2 bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none"
            />
          </div>

          {/* status tab: grows on hover */}
          <motion.div
            animate={{ height: hovered ? 10 : 8 }}
            style={{
              backgroundColor: book.statusColor,
              boxShadow: `0 0 10px ${book.statusColor}`,
            }}
            className="absolute -top-2 left-1/2 -translate-x-1/2 w-3/5 rounded-t-xs z-20 pointer-events-none"
          />
        </motion.div>
      </div>

      {/* hover label */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.14 }}
            className="absolute -top-20 left-1/2 -translate-x-1/2 z-40 w-48 rounded-lg border border-borderGlass bg-surface px-3 py-2 text-center pointer-events-none"
          >
            <div className="text-[11px] font-semibold text-textMain">
              {book.title}
            </div>
            <div className="font-mono text-[9px] text-textMuted">
              {book.author}
            </div>
            <div className="mt-1 flex items-center justify-center gap-1.5 font-mono text-[9px] text-textMuted">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: book.statusColor }}
              />
              {book.statusLabel}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-0 w-full h-2 bg-black/90 blur-xs rounded-full pointer-events-none translate-y-1" />
    </motion.div>
  );
}

export default function Books() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [filter, setFilter] = useState<Filter>('all');
  const audioCtxRef = useRef<AudioContext | null>(null);
  const mouseX = useMotionValue(-9999);

  const getCtx = useCallback(() => {
    if (typeof window === 'undefined') return null;
    if (!audioCtxRef.current) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }
    if (audioCtxRef.current.state === 'suspended') audioCtxRef.current.resume();
    return audioCtxRef.current;
  }, []);

  // Short tone with optional pitch glide
  const tone = useCallback(
    (
      from: number,
      to: number,
      dur: number,
      vol = 0.08,
      type: OscillatorType = 'sine',
    ) => {
      if (!soundEnabled) return;
      try {
        const ctx = getCtx();
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(from, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(to, ctx.currentTime + dur);
        gain.gain.setValueAtTime(vol, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + dur);
      } catch (e) {
        console.error('Audio play error:', e);
      }
    },
    [soundEnabled, getCtx],
  );

  // Each book has its own pitch, so sweeping across the shelf plays a soft scale
  const hoverSound = (i: number) => tone(130 + i * 14, 45 + i * 4, 0.06);

  const counts = (f: Filter) =>
    f === 'all'
      ? READING_LIST.length
      : READING_LIST.filter((b) => b.status === f).length;

  return (
    <section
      id="reading"
      className="relative w-full overflow-hidden bg-background text-textMain pt-8 md:pt-12 pb-8 md:pb-12 selection:bg-primary selection:text-secondary"
    >
      <div className="max-w-site mx-auto px-4 sm:px-8 md:px-12 xl:px-16">
        <div className="rounded-3xl liquid-glass border border-borderGlass p-6 sm:p-8 md:p-12 xl:p-14 space-y-8">
          {/* Header & controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b-2 border-borderGlass">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-textMuted uppercase tracking-widest mb-2.5">
                <BookOpen className="w-4 h-4 text-primary" />
                <span>Intellectual Inputs</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-textMain leading-tight">
                Reading Shelf
              </h2>
            </div>

            <button
              type="button"
              onClick={() => {
                setSoundEnabled(!soundEnabled);
                getCtx();
              }}
              className="self-start sm:self-auto flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-borderGlass bg-surface text-textMuted hover:border-primary-dim hover:text-primary transition-all font-mono text-xs cursor-pointer"
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-primary" />
                  <span>ACOUSTICS ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span>MUTED</span>
                </>
              )}
            </button>
          </div>

          {/* Filter chips (replace the static legend) */}
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => {
                  setFilter(f.key);
                  tone(300, 600, 0.05, 0.04);
                }}
                className={`relative px-3 py-1.5 rounded-xl border font-mono text-xs transition-colors cursor-pointer ${
                  filter === f.key
                    ? 'border-primary text-textMain'
                    : 'border-borderGlass text-textMuted hover:text-textMain'
                }`}
              >
                {filter === f.key && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-xl bg-primary/15"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">
                  {f.label} · {counts(f.key)}
                </span>
              </button>
            ))}
          </div>

          {/* Shelf */}
          <div className="relative pt-2 pb-2 select-none rounded-md overflow-x-auto overflow-y-visible">
            <div
              onMouseMove={(e) => mouseX.set(e.clientX)}
              onMouseLeave={() => mouseX.set(-9999)}
              className="relative min-w-[780px] mx-auto bg-linear-to-b from-surface via-background rounded-xl shadow-[inset_0_20px_40px_rgba(0,0,0,0.5),0_12px_35px_rgba(0,0,0,0.5)] border border-borderGlass"
            >
              <div className="relative z-20 flex items-end justify-center gap-1.5 sm:gap-2 px-14 pt-20 pb-0">
                {READING_LIST.map((b, i) => (
                  <Spine
                    key={b.id}
                    book={b}
                    index={i}
                    dimmed={filter !== 'all' && b.status !== filter}
                    mouseX={mouseX}
                    onHover={() => hoverSound(i)}
                  />
                ))}
              </div>
              <div className="h-3 bg-black/40 border-t border-borderGlass" />
            </div>
          </div>

          <p className="text-center font-mono text-xs text-textMuted/60">
            Sweep across the shelf
          </p>
        </div>
      </div>
    </section>
  );
}
