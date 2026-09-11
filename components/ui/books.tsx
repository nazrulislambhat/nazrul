'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Bookmark, Volume2, VolumeX } from 'lucide-react';

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
    statusColor: '#00F58C',
    width: 44,
    height: 254,
    tiltDeg: 0,
    renderSpine: () => (
      <div className="w-full h-full bg-[#082a1d] text-[#00F58C] flex flex-col justify-between py-2.5 items-center border-l border-r border-emerald-900/50">
        <div className="w-4/5 h-1 bg-signal/30 rounded-xs" />
        <div className="flex-1 flex items-center justify-center my-2">
          <span className="font-serif font-black text-[11px] uppercase tracking-widest -rotate-90 whitespace-nowrap text-emerald-100 drop-shadow-sm">
            ENJOY YOUR LIFE
          </span>
        </div>
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
    statusColor: '#38bdf8',
    width: 38,
    height: 236,
    tiltDeg: -0.8,
    renderSpine: () => (
      <div className="w-full h-full bg-[#1e110b] text-orange-400 flex flex-col justify-between py-2.5 items-center border-l border-r border-orange-950/40">
        <div className="w-full h-1 bg-orange-500/50" />
        <div className="flex-1 flex items-center justify-center my-2">
          <span className="font-sans font-black text-[10.5px] uppercase tracking-tight -rotate-90 whitespace-nowrap text-orange-200">
            SUBTLE ART OF NOT GIVING
          </span>
        </div>
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
    statusColor: '#38bdf8',
    width: 42,
    height: 242,
    tiltDeg: 0,
    renderSpine: () => (
      <div className="w-full h-full bg-[#181512] text-amber-200 flex flex-col justify-between py-2.5 items-center border-l border-r border-stone-800">
        <div className="w-2.5 h-2.5 rounded-full border border-amber-500/60 flex items-center justify-center">
          <div className="w-1 h-1 bg-amber-400 rounded-full" />
        </div>
        <div className="flex-1 flex items-center justify-center my-2">
          <span className="font-sans font-black text-[11px] uppercase tracking-wider text-amber-100 -rotate-90 whitespace-nowrap">
            ATOMIC HABITS
          </span>
        </div>
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
    statusColor: '#38bdf8',
    width: 36,
    height: 230,
    tiltDeg: 0,
    renderSpine: () => (
      <div className="w-full h-full bg-[#0a0f1d] text-sky-300 flex flex-col justify-between py-2.5 items-center border-l border-r border-sky-950/60">
        <div className="w-3 h-3 rounded-full border border-sky-400/60" />
        <div className="flex-1 flex items-center justify-center my-2">
          <span className="font-mono font-bold text-[10.5px] uppercase tracking-wider -rotate-90 whitespace-nowrap text-sky-100">
            DEEP WORK
          </span>
        </div>
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
    statusColor: '#38bdf8',
    width: 36,
    height: 232,
    tiltDeg: 0,
    renderSpine: () => (
      <div className="w-full h-full bg-[#111827] text-slate-200 flex flex-col justify-between py-2.5 items-center border-l border-r border-slate-800">
        <span className="font-serif font-black text-xs text-volt">$</span>
        <div className="flex-1 flex items-center justify-center my-2">
          <span className="font-serif font-bold text-[10px] tracking-tight -rotate-90 whitespace-nowrap text-slate-100">
            PSYCHOLOGY OF MONEY
          </span>
        </div>
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
    statusColor: '#38bdf8',
    width: 32,
    height: 220,
    tiltDeg: 1.2,
    renderSpine: () => (
      <div className="w-full h-full bg-[#1c1406] text-yellow-200 flex flex-col justify-between py-2.5 items-center border-l border-r border-amber-950/60">
        <div className="w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_6px_#f59e0b]" />
        <div className="flex-1 flex items-center justify-center my-2">
          <span className="font-serif font-bold text-[10.5px] uppercase tracking-widest -rotate-90 whitespace-nowrap text-yellow-100">
            THE ALCHEMIST
          </span>
        </div>
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
    statusColor: '#38bdf8',
    width: 50,
    height: 256,
    tiltDeg: 0,
    renderSpine: () => (
      <div className="w-full h-full bg-[#051f18] text-teal-200 flex flex-col justify-between py-2.5 items-center border-l border-r border-teal-950">
        <div className="w-2.5 h-2.5 border border-teal-400/60 rotate-45" />
        <div className="flex-1 flex items-center justify-center my-2">
          <span className="font-serif font-bold text-[10px] uppercase tracking-widest -rotate-90 whitespace-nowrap text-teal-100">
            STORIES OF PROPHETS
          </span>
        </div>
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
    statusColor: '#64748b',
    width: 44,
    height: 248,
    tiltDeg: -1.1,
    renderSpine: () => (
      <div className="w-full h-full bg-[#121212] text-stone-300 flex flex-col justify-between py-2.5 items-center border-l border-r border-zinc-800">
        <div className="w-3.5 h-0.5 bg-signal/80 rounded-full" />
        <div className="flex-1 flex items-center justify-center my-2">
          <span className="font-mono font-bold text-[10px] tracking-tight -rotate-90 whitespace-nowrap text-zinc-100">
            PRAGMATIC PROGRAMMER
          </span>
        </div>
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
    statusColor: '#64748b',
    width: 54,
    height: 260,
    tiltDeg: 0,
    renderSpine: () => (
      <div className="w-full h-full bg-[#051c14] text-emerald-300 flex flex-col justify-between py-2.5 items-center border-l border-r border-emerald-950">
        <div className="text-[8.5px] font-mono text-volt font-bold">189</div>
        <div className="flex-1 flex items-center justify-center my-2">
          <span className="font-sans font-black text-[10px] uppercase tracking-tight -rotate-90 whitespace-nowrap text-white">
            CRACKING CODING INTERVIEW
          </span>
        </div>
      </div>
    ),
  },
];

export default function Books() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const getAudioContext = () => {
    if (typeof window === 'undefined') return null;
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    if (!audioCtxRef.current) {
      audioCtxRef.current = new AudioCtx();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  const playHoverSound = () => {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      const duration = 0.04;
      const bufferSize = Math.floor(ctx.sampleRate * duration);
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1600, now);
      filter.Q.setValueAtTime(4.0, now);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.015, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start(now);
    } catch {}
  };

  return (
    <section
      id="reading"
      className="relative w-full overflow-hidden bg-background text-textMain pt-8 md:pt-12 pb-16 md:pb-24 selection:bg-volt selection:text-black"
    >
      <div className="max-w-site mx-auto px-4 sm:px-8 md:px-12 xl:px-16">
        <div className="rounded-3xl liquid-glass border border-borderGlass p-6 sm:p-8 md:p-12 xl:p-14 space-y-10">
          {/* Header & Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b-2 border-borderGlass">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-textMuted uppercase tracking-widest mb-2.5">
                <BookOpen className="w-4 h-4 text-signal" />
                <span>Intellectual Inputs</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-textMain leading-tight">
                Reading Shelf
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-3 self-start sm:self-auto">
              <div className="hidden sm:flex items-center gap-3 font-mono text-[10px] text-textMuted border border-borderGlass px-3 py-1.5 rounded-xl bg-surface/50">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-signal shadow-[0_0_6px_#00F58C]" />
                  Reading
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_6px_#38bdf8]" />
                  Almost Done
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  Partial
                </span>
              </div>

              <button
                type="button"
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-borderGlass bg-surface text-textMuted hover:border-signal-dim hover:text-signal transition-all font-mono text-xs cursor-pointer"
              >
                {soundEnabled ? (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-signal" />
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
          </div>

          {/* Cyber-Industrial Matte Dark Metal Alcove Shelf */}
          <div className="relative pt-2 pb-2 select-none overflow-x-auto overflow-y-visible">
            <div className="relative min-w-[780px] mx-auto bg-gradient-to-b from-[#111318] via-[#090b0e] to-[#040507] rounded-xl shadow-[inset_0_20px_40px_rgba(0,0,0,0.9),0_12px_35px_rgba(0,0,0,0.6)] border border-borderGlass overflow-hidden">
              {/* Subtle Tech Grid Background Pattern */}
              <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#00F58C_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

              {/* Ambient Internal Shadows */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/80 via-black/30 to-transparent pointer-events-none z-10" />
              <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-black/60 to-transparent pointer-events-none z-10" />
              <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-black/60 to-transparent pointer-events-none z-10" />

              {/* Minimalist Wireframe Cyber Plant (Left) */}
              <div className="absolute bottom-[28px] left-4 z-30 flex flex-col items-center pointer-events-none select-none opacity-60">
                <svg
                  className="w-6 h-9 text-signal"
                  viewBox="0 0 24 36"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                >
                  <path
                    d="M12 36V16M12 16C12 10 6 6 2 2M12 16C12 10 18 6 22 2"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="w-4 h-3 bg-surface border border-borderGlass rounded-xs shadow-inner" />
              </div>

              {/* Minimalist Wireframe Cyber Plant (Right) */}
              <div className="absolute bottom-[28px] right-4 z-30 flex flex-col items-center pointer-events-none select-none opacity-60">
                <svg
                  className="w-6 h-9 text-volt"
                  viewBox="0 0 24 36"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                >
                  <path
                    d="M12 36V14M12 14C10 8 4 6 2 4M12 14C14 8 20 6 22 4"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="w-4 h-3 bg-surface border border-borderGlass rounded-xs shadow-inner" />
              </div>

              {/* Books Array */}
              <div className="relative z-20 flex items-end justify-center gap-1.5 sm:gap-2 px-14 pt-12 pb-0 [perspective:1200px]">
                {READING_LIST.map((book) => (
                  <div
                    key={book.id}
                    className="relative flex flex-col items-center justify-end"
                    style={{
                      width: `${book.width}px`,
                      height: `${book.height}px`,
                      transform: `rotate(${book.tiltDeg || 0}deg)`,
                    }}
                  >
                    <motion.div
                      onMouseEnter={playHoverSound}
                      whileHover={{
                        y: -16,
                        z: 36,
                        rotateZ: 0,
                        transition: { duration: 0.16, ease: 'easeOut' },
                      }}
                      style={{
                        width: `${book.width}px`,
                        height: `${book.height}px`,
                        transformStyle: 'preserve-3d',
                      }}
                      className="relative rounded-t-xs cursor-default flex flex-col justify-between shadow-[4px_0_12px_rgba(0,0,0,0.85)]"
                    >
                      <div className="relative w-full h-full rounded-t-xs overflow-hidden shadow-inner">
                        {book.renderSpine()}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-white/10 to-black/40 pointer-events-none" />
                      </div>

                      <div className="absolute -top-1 left-0 right-0 h-1 bg-borderGlass opacity-80" />

                      <div
                        style={{ backgroundColor: book.statusColor }}
                        className="absolute -top-2 left-1/2 -translate-x-1/2 w-3/5 h-2 rounded-t-xs shadow-[0_0_8px_currentColor] z-20 pointer-events-none"
                      />
                    </motion.div>

                    <div className="w-full h-2 bg-black/90 blur-xs rounded-full mt-0.5 pointer-events-none" />
                  </div>
                ))}
              </div>

              {/* Cyber-Industrial Titanium Shelf Base Plank */}
              <div className="relative w-full z-20 mt-1">
                <div className="h-2.5 w-full bg-surface border-t border-borderGlass shadow-inner" />
                <div className="h-5 w-full bg-gradient-to-b from-[#181a20] to-[#0a0c10] border-t border-borderGlass shadow-[0_10px_25px_rgba(0,0,0,0.9)]" />
              </div>
            </div>

            <p className="text-center font-mono text-xs text-textMuted/60 mt-4">
              Cyber-industrial matte titanium alcove • Acoustic feedback enabled
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
