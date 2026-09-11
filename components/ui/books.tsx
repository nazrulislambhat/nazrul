'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Bookmark,
  Sparkles,
} from 'lucide-react';

export interface BookItem {
  id: string;
  title: string;
  author: string;
  category: string;
  status: 'reading' | 'partially-read' | 'almost-done';
  statusLabel: string;
  coreIdea: string;
  coverGradient: string;
  spineColor: string;
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
      'Practical interpersonal skills, empathy, and emotional intelligence synthesized with classical wisdom.',
    coverGradient: 'from-[#081a14] via-[#05110d] to-[#020705]',
    spineColor: '#00F58C',
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
    coverGradient: 'from-[#0c1926] via-[#081018] to-[#03060a]',
    spineColor: '#38bdf8',
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
    coverGradient: 'from-[#0c1926] via-[#081018] to-[#03060a]',
    spineColor: '#38bdf8',
  },
  {
    id: 'deep-work',
    title: 'Deep Work',
    author: 'Cal Newport',
    category: 'Cognitive Output',
    status: 'almost-done',
    statusLabel: 'Almost Done',
    coreIdea:
      'Rules for focused success in a distracted world: deep, uninterrupted flow produces disproportionate intellectual leverage.',
    coverGradient: 'from-[#0c1926] via-[#081018] to-[#03060a]',
    spineColor: '#38bdf8',
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
    coverGradient: 'from-[#0c1926] via-[#081018] to-[#03060a]',
    spineColor: '#38bdf8',
  },
  {
    id: 'the-alchemist',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    category: 'Allegory & Purpose',
    status: 'almost-done',
    statusLabel: 'Almost Done',
    coreIdea:
      'When you want something, all the universe conspires in helping you to achieve it. Embracing the journey over destination.',
    coverGradient: 'from-[#0c1926] via-[#081018] to-[#03060a]',
    spineColor: '#38bdf8',
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
    coverGradient: 'from-[#0c1926] via-[#081018] to-[#03060a]',
    spineColor: '#38bdf8',
  },
  {
    id: 'pragmatic-programmer',
    title: 'The Pragmatic Programmer',
    author: 'David Thomas & Andrew Hunt',
    category: 'Software Architecture',
    status: 'partially-read',
    statusLabel: 'Partially Read',
    coreIdea:
      'Care about your craft. Software development is continuous refactoring, proactive testing, and ruthless elimination of entropy.',
    coverGradient: 'from-[#14171a] via-[#0e1012] to-[#060708]',
    spineColor: '#64748b',
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
    coverGradient: 'from-[#14171a] via-[#0e1012] to-[#060708]',
    spineColor: '#64748b',
  },
];

export default function Books() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const activeBook = READING_LIST[currentIndex];

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % READING_LIST.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + READING_LIST.length) % READING_LIST.length,
    );
  };

  return (
    <section
      id="reading"
      className="relative w-full overflow-hidden bg-background text-textMain pt-8 md:pt-12 pb-16 md:pb-24 selection:bg-volt selection:text-black"
    >
      <div className="max-w-site mx-auto px-4 sm:px-8 md:px-12 xl:px-16">
        <div className="rounded-3xl liquid-glass border border-borderGlass p-6 sm:p-8 md:p-12 xl:p-14">
          {/* Eyebrow & Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 mb-8 border-b-2 border-borderGlass">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-textMuted uppercase tracking-widest mb-2.5">
                <BookOpen className="w-4 h-4 text-signal" />
                <span>Intellectual Inputs</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-textMain leading-tight">
                Reading Shelf
              </h2>
            </div>

            {/* Stepper Navigation */}
            <div className="flex items-center gap-3 self-start sm:self-auto">
              <span className="font-mono text-xs text-textMuted mr-2">
                {String(currentIndex + 1).padStart(2, '0')} /{' '}
                {String(READING_LIST.length).padStart(2, '0')}
              </span>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Book"
                className="p-2.5 rounded-xl border border-borderGlass bg-surface text-textMuted hover:border-signal-dim hover:text-signal transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Book"
                className="p-2.5 rounded-xl border border-borderGlass bg-surface text-textMuted hover:border-signal-dim hover:text-signal transition-all cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main 3D Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[380px]">
            {/* 3D Book Display Viewport */}
            <div className="lg:col-span-5 flex justify-center py-6 [perspective:1400px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeBook.id}
                  custom={direction}
                  initial={{
                    rotateY: direction > 0 ? -45 : 45,
                    rotateX: 6,
                    opacity: 0,
                    scale: 0.9,
                  }}
                  animate={{
                    rotateY: -18,
                    rotateX: 6,
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    rotateY: direction > 0 ? 80 : -80,
                    opacity: 0,
                    scale: 0.85,
                  }}
                  transition={{
                    duration: 0.55,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="relative w-52 sm:w-60 h-72 sm:h-80 rounded-r-xl rounded-l-sm shadow-[25px_25px_50px_rgba(0,0,0,0.85)] cursor-grab active:cursor-grabbing select-none"
                >
                  {/* Book 3D Spine Depth */}
                  <div
                    style={{
                      transform: 'rotateY(-90deg) translateZ(10px)',
                      backgroundColor: activeBook.spineColor,
                    }}
                    className="absolute top-0 bottom-0 -left-5 w-5 rounded-l-xs opacity-95 border-r border-black/50 shadow-inner flex items-center justify-center overflow-hidden"
                  >
                    <span className="text-[9px] font-mono font-bold text-black rotate-90 whitespace-nowrap uppercase tracking-widest opacity-90">
                      {activeBook.category}
                    </span>
                  </div>

                  {/* Book Spine Fold Ridge */}
                  <div className="absolute top-0 bottom-0 left-3 w-1.5 bg-gradient-to-r from-black/50 via-transparent to-white/10 z-20 pointer-events-none" />

                  {/* Book Front Cover Canvas */}
                  <div
                    className={`relative w-full h-full rounded-r-xl rounded-l-xs bg-gradient-to-br ${activeBook.coverGradient} border border-white/15 p-6 flex flex-col justify-between overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]`}
                  >
                    {/* Ambient Glow */}
                    <div
                      style={{ backgroundColor: activeBook.spineColor }}
                      className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl opacity-25 pointer-events-none"
                    />

                    {/* Top Cover Header */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="font-mono text-[9px] text-white/70 uppercase tracking-widest font-semibold drop-shadow-sm">
                        {activeBook.category}
                      </span>
                      <Sparkles
                        style={{ color: activeBook.spineColor }}
                        className="w-3.5 h-3.5 drop-shadow-sm"
                      />
                    </div>

                    {/* Cover Title Area */}
                    <div className="relative z-10 space-y-2 my-auto">
                      <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white leading-snug drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                        {activeBook.title}
                      </h3>
                      <p className="text-xs font-mono font-medium text-white/80 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                        {activeBook.author}
                      </p>
                    </div>

                    {/* Cover Footer / Status Badge */}
                    <div className="relative z-10 pt-4 border-t border-white/15 flex items-center justify-between font-mono text-[10px]">
                      <span className="text-white/60 font-medium">
                        HARDCOVER
                      </span>
                      <span
                        style={{ color: activeBook.spineColor }}
                        className="font-bold uppercase tracking-wider drop-shadow-sm"
                      >
                        {activeBook.statusLabel}
                      </span>
                    </div>

                    {/* Gloss Reflection Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent pointer-events-none" />
                  </div>

                  {/* Book Page Edge Stack */}
                  <div
                    style={{
                      transform: 'rotateY(90deg) translateZ(230px)',
                    }}
                    className="absolute top-2 bottom-2 right-0 w-8 bg-[#e2e2e2] rounded-r-xs opacity-50 shadow-sm pointer-events-none"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Context Narrative Card */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full border border-borderGlass bg-surface/80 font-mono text-[10.5px] text-textMuted uppercase tracking-wider">
                    {activeBook.category}
                  </span>

                  {/* Dynamic 3-Tier Status Pill */}
                  <span
                    className={`inline-flex items-center gap-1.5 font-mono text-[10.5px] px-2.5 py-0.5 rounded-full border ${
                      activeBook.status === 'reading'
                        ? 'border-signal bg-signal/15 text-signal shadow-[0_0_12px_rgba(0,245,140,0.3)]'
                        : activeBook.status === 'almost-done'
                          ? 'border-sky-400/50 bg-sky-400/10 text-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.25)]'
                          : 'border-slate-500/40 bg-slate-500/10 text-slate-400'
                    }`}
                  >
                    <Bookmark className="w-3 h-3" />
                    <span className="uppercase font-semibold tracking-wider">
                      {activeBook.statusLabel}
                    </span>
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-textMain leading-tight">
                    {activeBook.title}
                  </h3>
                  <p className="font-mono text-sm md:text-base text-signal mt-1">
                    by {activeBook.author}
                  </p>
                </div>
              </div>

              {/* Core Takeaway Block */}
              <div className="p-6 rounded-2xl liquid-glass-subtle border border-borderGlass/60 space-y-2.5">
                <span className="font-mono text-xs uppercase tracking-widest text-textMuted font-bold">
                  Key Thesis &amp; Application
                </span>
                <p className="text-base md:text-lg text-textMain/90 leading-relaxed font-normal">
                  “{activeBook.coreIdea}”
                </p>
              </div>

              {/* Quick Thumbnail Navigation Dots */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                {READING_LIST.map((book, idx) => (
                  <button
                    key={book.id}
                    type="button"
                    onClick={() => {
                      setDirection(idx > currentIndex ? 1 : -1);
                      setCurrentIndex(idx);
                    }}
                    title={`${book.title} (${book.statusLabel})`}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      idx === currentIndex
                        ? book.status === 'reading'
                          ? 'w-8 bg-signal shadow-signalGlow'
                          : book.status === 'almost-done'
                            ? 'w-8 bg-sky-400 shadow-[0_0_8px_#38bdf8]'
                            : 'w-8 bg-slate-400 shadow-[0_0_8px_#94a3b8]'
                        : 'w-2 bg-borderGlass hover:bg-textMuted/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
