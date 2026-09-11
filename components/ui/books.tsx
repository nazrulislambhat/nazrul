'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  Bookmark,
  Sparkles,
  X,
  Volume2,
  VolumeX,
} from 'lucide-react';

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
  renderSpine: () => React.ReactNode;
  renderCover: () => React.ReactNode;
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
    renderSpine: () => (
      <div className="w-full h-full bg-[#063321] text-[#7ee787] flex flex-col justify-between py-3 items-center border-l border-r border-[#0e4d31]">
        <div className="w-4/5 h-1 bg-[#10b981]/40 rounded-xs" />
        <div className="flex-1 flex items-center justify-center my-2">
          <span className="font-serif font-black text-[11px] uppercase tracking-widest -rotate-90 whitespace-nowrap text-[#d1fae5] drop-shadow-md">
            ENJOY YOUR LIFE
          </span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-[7.5px] font-mono tracking-wider uppercase text-[#6ee7b7]">
            AL-ARIFI
          </span>
          <div className="w-2.5 h-2.5 rounded-full border border-[#10b981]/60 flex items-center justify-center">
            <div className="w-1 h-1 bg-signal rounded-full" />
          </div>
        </div>
      </div>
    ),
    renderCover: () => (
      <div className="relative w-full h-full p-6 flex flex-col justify-between bg-gradient-to-b from-[#063321] via-[#021d13] to-[#01110b] text-[#d1fae5] border-2 border-[#10b981]/40">
        <div className="text-center font-mono text-[8px] uppercase tracking-widest text-[#6ee7b7] border-b border-[#10b981]/30 pb-1">
          Classical Guidance &amp; Character
        </div>
        <div className="my-auto text-center space-y-2">
          <div className="w-12 h-12 mx-auto rounded-full border border-[#10b981]/50 flex items-center justify-center text-signal">
            <Sparkles className="w-6 h-6" />
          </div>
          <h4 className="text-xl font-serif font-black tracking-wide text-white drop-shadow-lg">
            ENJOY YOUR LIFE
          </h4>
          <p className="text-xs font-mono text-[#a7f3d0]">
            Dr. Muhammad Abd Al-Rahman Al-Arifi
          </p>
        </div>
        <div className="text-center text-[8px] font-mono text-[#6ee7b7]/80 uppercase tracking-widest border-t border-[#10b981]/30 pt-1.5">
          Interpersonal Art &amp; Empathy
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
    renderSpine: () => (
      <div className="w-full h-full bg-[#f97316] text-black flex flex-col justify-between py-3 items-center">
        <div className="w-full h-1.5 bg-black" />
        <div className="flex-1 flex items-center justify-center my-2">
          <span className="font-sans font-black text-[11px] uppercase tracking-tight -rotate-90 whitespace-nowrap">
            THE SUBTLE ART OF NOT GIVING A F*CK
          </span>
        </div>
        <span className="text-[8px] font-black uppercase tracking-wider">
          MANSON
        </span>
      </div>
    ),
    renderCover: () => (
      <div className="relative w-full h-full p-6 flex flex-col justify-between bg-[#f97316] text-black">
        <div className="font-mono text-[9px] font-black uppercase tracking-wider">
          #1 New York Times Bestseller
        </div>
        <div className="my-auto space-y-1">
          <h4 className="text-2xl font-black uppercase tracking-tighter leading-none">
            The Subtle Art
            <br />
            of Not Giving
            <br />a F*ck
          </h4>
          <p className="text-sm font-bold pt-2">Mark Manson</p>
        </div>
        <div className="text-[8.5px] font-bold uppercase tracking-tight">
          A Counterintuitive Approach to Living a Good Life
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
    renderSpine: () => (
      <div className="w-full h-full bg-[#fcfaf7] text-stone-900 flex flex-col justify-between py-3 items-center border-l border-r border-stone-300">
        <div className="w-2.5 h-2.5 rounded-full border border-amber-600 flex items-center justify-center">
          <div className="w-1 h-1 bg-amber-600 rounded-full" />
        </div>
        <div className="flex-1 flex items-center justify-center my-2">
          <span className="font-sans font-black text-[11px] uppercase tracking-wider text-stone-950 -rotate-90 whitespace-nowrap">
            ATOMIC HABITS
          </span>
        </div>
        <span className="text-[8px] font-mono uppercase text-stone-600 font-bold">
          CLEAR
        </span>
      </div>
    ),
    renderCover: () => (
      <div className="relative w-full h-full p-6 flex flex-col justify-between bg-[#fcfaf7] text-stone-900">
        <div className="text-[8.5px] font-mono uppercase tracking-widest text-stone-500 font-bold">
          Tiny Changes, Remarkable Results
        </div>
        <div className="my-auto text-center space-y-2">
          <h4 className="text-2xl font-black tracking-tight uppercase text-stone-900">
            Atomic Habits
          </h4>
          <div className="w-16 h-1 mx-auto bg-amber-600 rounded-full" />
          <p className="text-sm font-medium text-stone-700">James Clear</p>
        </div>
        <div className="text-center text-[8px] font-mono text-stone-500 uppercase tracking-widest">
          An Easy &amp; Proven Way to Build Good Habits
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
    renderSpine: () => (
      <div className="w-full h-full bg-[#0a0f1d] text-white flex flex-col justify-between py-3 items-center border-l border-r border-slate-800">
        <div className="w-3 h-3 rounded-full border border-sky-400" />
        <div className="flex-1 flex items-center justify-center my-2">
          <span className="font-mono font-bold text-[10.5px] uppercase tracking-wider -rotate-90 whitespace-nowrap text-white">
            DEEP WORK
          </span>
        </div>
        <span className="text-[7.5px] font-mono text-sky-400 font-bold">
          NEWPORT
        </span>
      </div>
    ),
    renderCover: () => (
      <div className="relative w-full h-full p-6 flex flex-col justify-between bg-[#0a0f1d] text-white">
        <div className="text-[8px] font-mono uppercase tracking-widest text-sky-400">
          Cognitive Output Series
        </div>
        <div className="my-auto space-y-2 text-center">
          <div className="w-14 h-14 mx-auto border border-sky-400/40 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 border border-volt rounded-full" />
          </div>
          <h4 className="text-2xl font-mono font-black uppercase tracking-widest">
            DEEP WORK
          </h4>
          <p className="text-xs font-mono text-sky-300">Cal Newport</p>
        </div>
        <div className="text-center text-[8px] font-mono text-slate-400 uppercase">
          Rules for Focused Success in a Distracted World
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
    renderSpine: () => (
      <div className="w-full h-full bg-[#f1f5f9] text-slate-900 flex flex-col justify-between py-3 items-center border-l border-r border-slate-300">
        <span className="font-serif font-black text-xs text-emerald-700">
          $
        </span>
        <div className="flex-1 flex items-center justify-center my-2">
          <span className="font-serif font-bold text-[10px] tracking-tight -rotate-90 whitespace-nowrap text-slate-950">
            THE PSYCHOLOGY OF MONEY
          </span>
        </div>
        <span className="text-[7.5px] font-mono text-slate-600 font-bold">
          HOUSEL
        </span>
      </div>
    ),
    renderCover: () => (
      <div className="relative w-full h-full p-6 flex flex-col justify-between bg-[#f8fafc] text-slate-900">
        <div className="text-[8px] font-mono uppercase tracking-widest text-slate-500 font-bold">
          Timeless Lessons on Wealth
        </div>
        <div className="my-auto text-center space-y-2">
          <div className="w-12 h-12 mx-auto rounded-full border-2 border-emerald-600 flex items-center justify-center text-emerald-700 font-black text-lg">
            $
          </div>
          <h4 className="text-xl font-serif font-black tracking-tight text-slate-900">
            The Psychology of Money
          </h4>
          <p className="text-xs font-mono text-slate-600">Morgan Housel</p>
        </div>
        <div className="text-center text-[8px] font-mono text-slate-500 uppercase">
          Greed, Happiness &amp; Risk Tolerance
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
    renderSpine: () => (
      <div className="w-full h-full bg-[#201407] text-[#fef08a] flex flex-col justify-between py-3 items-center border-l border-r border-amber-900">
        <div className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_6px_#f59e0b]" />
        <div className="flex-1 flex items-center justify-center my-2">
          <span className="font-serif font-bold text-[11px] uppercase tracking-widest -rotate-90 whitespace-nowrap text-amber-200">
            THE ALCHEMIST
          </span>
        </div>
        <span className="text-[7.5px] font-serif italic text-amber-300">
          COELHO
        </span>
      </div>
    ),
    renderCover: () => (
      <div className="relative w-full h-full p-6 flex flex-col justify-between bg-[#1f150b] text-[#fef08a] border border-amber-500/30">
        <div className="text-[8px] font-mono uppercase tracking-widest text-amber-400/80 text-center">
          International Bestseller
        </div>
        <div className="my-auto text-center space-y-2">
          <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-tr from-amber-600 to-yellow-300 shadow-[0_0_20px_rgba(234,179,8,0.4)]" />
          <h4 className="text-2xl font-serif font-black tracking-widest uppercase text-amber-100">
            The Alchemist
          </h4>
          <p className="text-xs font-serif italic text-amber-300">
            Paulo Coelho
          </p>
        </div>
        <div className="text-center text-[8px] font-mono text-amber-400/70 uppercase">
          A Fable About Following Your Personal Legend
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
    renderSpine: () => (
      <div className="w-full h-full bg-[#032419] text-emerald-300 flex flex-col justify-between py-3 items-center border-l border-r border-emerald-900">
        <div className="w-2.5 h-2.5 border border-emerald-400 rotate-45" />
        <div className="flex-1 flex items-center justify-center my-2">
          <span className="font-serif font-bold text-[10px] uppercase tracking-widest -rotate-90 whitespace-nowrap text-emerald-100">
            STORIES OF THE PROPHETS
          </span>
        </div>
        <span className="text-[7.5px] font-mono text-emerald-400">
          IBN KATHIR
        </span>
      </div>
    ),
    renderCover: () => (
      <div className="relative w-full h-full p-6 flex flex-col justify-between bg-[#041f17] text-emerald-200 border-2 border-emerald-500/40">
        <div className="text-[8px] font-mono uppercase tracking-widest text-emerald-400 text-center">
          Classical Islamic History
        </div>
        <div className="my-auto text-center space-y-2">
          <div className="w-12 h-12 mx-auto border border-emerald-400/60 rotate-45 flex items-center justify-center">
            <span className="-rotate-45 font-serif font-bold text-sm text-emerald-300">
              ن
            </span>
          </div>
          <h4 className="text-lg font-serif font-bold tracking-wider uppercase text-emerald-100">
            Stories of the Prophets
          </h4>
          <p className="text-xs font-mono text-emerald-300">Ibn Kathir</p>
        </div>
        <div className="text-center text-[8px] font-mono text-emerald-400/80 uppercase">
          From Adam to Muhammad (PBUT)
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
    renderSpine: () => (
      <div className="w-full h-full bg-[#181615] text-stone-300 flex flex-col justify-between py-3 items-center border-l border-r border-stone-800">
        <div className="w-3.5 h-0.5 bg-signal/80 rounded-full" />
        <div className="flex-1 flex items-center justify-center my-2">
          <span className="font-mono font-bold text-[10px] tracking-tight -rotate-90 whitespace-nowrap text-stone-100">
            THE PRAGMATIC PROGRAMMER
          </span>
        </div>
        <span className="text-[7.5px] font-mono text-stone-500 font-bold">
          &lt;/&gt;
        </span>
      </div>
    ),
    renderCover: () => (
      <div className="relative w-full h-full p-6 flex flex-col justify-between bg-[#141211] text-stone-200 border border-stone-700">
        <div className="text-[8px] font-mono uppercase tracking-widest text-signal">
          20th Anniversary Edition
        </div>
        <div className="my-auto space-y-2 text-center">
          <div className="w-12 h-12 mx-auto border border-stone-600 rounded bg-stone-900/80 flex items-center justify-center font-mono text-sm text-signal">
            &lt;/&gt;
          </div>
          <h4 className="text-lg font-serif font-bold text-stone-100">
            The Pragmatic Programmer
          </h4>
          <p className="text-xs font-mono text-stone-400">
            David Thomas &amp; Andrew Hunt
          </p>
        </div>
        <div className="text-center text-[8px] font-mono text-stone-500 uppercase">
          From Journeyman to Master
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
    renderSpine: () => (
      <div className="w-full h-full bg-[#032a19] text-emerald-300 flex flex-col justify-between py-3 items-center border-l border-r border-emerald-800">
        <div className="text-[8.5px] font-mono text-emerald-400 font-bold">
          189
        </div>
        <div className="flex-1 flex items-center justify-center my-2">
          <span className="font-sans font-black text-[10px] uppercase tracking-tight -rotate-90 whitespace-nowrap text-white">
            CRACKING THE CODING INTERVIEW
          </span>
        </div>
        <span className="text-[7.5px] font-mono text-emerald-400 font-bold">
          GAYLE
        </span>
      </div>
    ),
    renderCover: () => (
      <div className="relative w-full h-full p-6 flex flex-col justify-between bg-[#032415] text-white border-t-4 border-emerald-400">
        <div className="text-[8px] font-mono uppercase tracking-widest text-emerald-400">
          189 Programming Questions
        </div>
        <div className="my-auto space-y-2 text-center">
          <h4 className="text-xl font-sans font-black uppercase tracking-tight text-white leading-tight">
            Cracking the
            <br />
            Coding Interview
          </h4>
          <p className="text-xs font-mono text-emerald-300">
            Gayle Laakmann McDowell
          </p>
        </div>
        <div className="text-center text-[8px] font-mono text-emerald-400/80 uppercase">
          Technical Interview Dissection
        </div>
      </div>
    ),
  },
];

export default function Books() {
  const [selectedBook, setSelectedBook] = useState<BookItem | null>(null);
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

  // 1. Friction Slider Hover Sound
  const playHoverSound = () => {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      const duration = 0.045;
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
      filter.frequency.setValueAtTime(1400, now);
      filter.Q.setValueAtTime(3.5, now);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.018, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start(now);
    } catch {}
  };

  // 2. Real Physical Book Opening & Page Turning Acoustic
  const playBookOpenSound = () => {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      // Layer 1: Cover hinge friction creak
      const duration1 = 0.18;
      const buffer1 = ctx.createBuffer(
        1,
        Math.floor(ctx.sampleRate * duration1),
        ctx.sampleRate,
      );
      const data1 = buffer1.getChannelData(0);
      for (let i = 0; i < data1.length; i++) {
        data1[i] = Math.random() * 2 - 1;
      }
      const noise1 = ctx.createBufferSource();
      noise1.buffer = buffer1;

      const filter1 = ctx.createBiquadFilter();
      filter1.type = 'bandpass';
      filter1.frequency.setValueAtTime(450, now);
      filter1.frequency.exponentialRampToValueAtTime(1800, now + 0.1);
      filter1.Q.setValueAtTime(4, now);

      const gain1 = ctx.createGain();
      gain1.gain.setValueAtTime(0.001, now);
      gain1.gain.linearRampToValueAtTime(0.08, now + 0.04);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + duration1);

      noise1.connect(filter1);
      filter1.connect(gain1);
      gain1.connect(ctx.destination);
      noise1.start(now);

      // Layer 2: Crisp physical paper sweep flutter
      const duration2 = 0.28;
      const buffer2 = ctx.createBuffer(
        1,
        Math.floor(ctx.sampleRate * duration2),
        ctx.sampleRate,
      );
      const data2 = buffer2.getChannelData(0);
      for (let i = 0; i < data2.length; i++) {
        data2[i] =
          (Math.random() * 2 - 1) * Math.sin((i / data2.length) * Math.PI);
      }
      const noise2 = ctx.createBufferSource();
      noise2.buffer = buffer2;

      const filter2 = ctx.createBiquadFilter();
      filter2.type = 'bandpass';
      filter2.frequency.setValueAtTime(1100, now + 0.08);
      filter2.frequency.exponentialRampToValueAtTime(3600, now + 0.18);
      filter2.frequency.exponentialRampToValueAtTime(1200, now + duration2);
      filter2.Q.setValueAtTime(2.2, now);

      const gain2 = ctx.createGain();
      gain2.gain.setValueAtTime(0.001, now + 0.08);
      gain2.gain.linearRampToValueAtTime(0.09, now + 0.14);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + duration2);

      noise2.connect(filter2);
      filter2.connect(gain2);
      gain2.connect(ctx.destination);
      noise2.start(now + 0.08);
    } catch {}
  };

  const handleSelectBook = (book: BookItem) => {
    playBookOpenSound();
    setSelectedBook(book);
  };

  const handleClose = () => {
    playBookOpenSound();
    setSelectedBook(null);
  };

  return (
    <section
      id="reading"
      className="relative w-full overflow-hidden bg-background text-textMain pt-8 md:pt-12 pb-16 md:pb-24 selection:bg-volt selection:text-black"
    >
      <div className="max-w-site mx-auto px-4 sm:px-8 md:px-12 xl:px-16">
        <div className="rounded-3xl liquid-glass border border-borderGlass p-6 sm:p-8 md:p-12 xl:p-14">
          {/* Eyebrow & Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 mb-10 border-b-2 border-borderGlass">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-textMuted uppercase tracking-widest mb-2.5">
                <BookOpen className="w-4 h-4 text-signal" />
                <span>Intellectual Inputs</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-textMain leading-tight">
                Reading Shelf
              </h2>
            </div>

            {/* Audio Toggle & State Legend */}
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
                    <span>AUDIO ON</span>
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

          {/* Bookcase Enclosure (Inspired by reference) */}
          <div className="relative pt-6 pb-4 select-none overflow-x-auto overflow-y-visible">
            {/* Outer Wooden Bookcase Cavity */}
            <div className="relative min-w-[760px] mx-auto bg-[#1c1b18] border-8 border-[#3b3a36] shadow-[inset_0_15px_30px_rgba(0,0,0,0.85)] rounded-md px-6 pt-10 pb-0 flex flex-col justify-end">
              {/* Backing Depth Shadow */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40 pointer-events-none" />

              {/* Shelf Books Row */}
              <div className="relative z-10 flex items-end justify-center gap-1.5 sm:gap-2 px-6 [perspective:1400px]">
                {READING_LIST.map((book) => {
                  const isSelected = selectedBook?.id === book.id;

                  return (
                    <div
                      key={book.id}
                      className="relative flex flex-col items-center justify-end"
                      style={{
                        width: `${book.width}px`,
                        height: `${book.height}px`,
                      }}
                    >
                      {/* Realistic Physics-Based Hover Pull */}
                      <motion.div
                        onClick={() => handleSelectBook(book)}
                        onMouseEnter={playHoverSound}
                        whileHover={{
                          y: -16,
                          z: 42,
                          scale: 1.04,
                          transition: { duration: 0.18, ease: 'easeOut' },
                        }}
                        style={{
                          width: `${book.width}px`,
                          height: `${book.height}px`,
                          transformStyle: 'preserve-3d',
                        }}
                        className={`relative rounded-t-xs cursor-pointer flex flex-col justify-between shadow-[4px_0_12px_rgba(0,0,0,0.7)] transition-opacity ${
                          isSelected ? 'opacity-20' : 'opacity-100'
                        }`}
                      >
                        {/* Book Spine Graphic */}
                        <div className="relative w-full h-full rounded-t-xs overflow-hidden shadow-inner">
                          {book.renderSpine()}

                          {/* 3D Convex Spine Cylinder Lighting */}
                          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-white/18 to-black/40 pointer-events-none" />
                        </div>

                        {/* Top Headband Cloth Rim */}
                        <div className="absolute -top-1 left-0 right-0 h-1 bg-[#d1d5db] border-t border-black/60 opacity-80" />

                        {/* Reading State Accent Tag (Top Ribbon) */}
                        <div
                          style={{ backgroundColor: book.statusColor }}
                          className="absolute -top-2 left-1/2 -translate-x-1/2 w-3/5 h-2 rounded-t-xs shadow-[0_0_8px_currentColor] z-20 pointer-events-none"
                        />
                      </motion.div>

                      {/* Cast Shelf Contact Shadow */}
                      <div className="w-full h-2 bg-black/70 blur-xs rounded-full mt-0.5 pointer-events-none" />
                    </div>
                  );
                })}
              </div>

              {/* Bottom Shelf Base Plank (Thick Molded Edge) */}
              <div className="relative w-full mt-1">
                {/* Plank Top Edge */}
                <div className="h-3 w-full bg-gradient-to-r from-[#2c2b27] via-[#45443e] to-[#2c2b27] border-t border-[#65645c]/40 shadow-inner" />
                {/* Plank Face Bevel */}
                <div className="h-5 w-full bg-gradient-to-b from-[#23221f] to-[#12110f] border-b border-black/80 shadow-[0_12px_24px_rgba(0,0,0,0.9)]" />
              </div>
            </div>

            <p className="text-center font-mono text-xs text-textMuted/60 mt-4">
              Click any book on the shelf to inspect
            </p>
          </div>

          {/* Modal Overlay: Practical 3D Pull-Out with Page-Turn Inspection */}
          <AnimatePresence>
            {selectedBook && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
                onClick={handleClose}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.6, y: 120, rotateX: 25 }}
                  animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, scale: 0.7, y: 100, rotateX: -20 }}
                  transition={{ type: 'spring', damping: 24, stiffness: 260 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative w-full max-w-2xl rounded-3xl liquid-glass border border-borderGlass p-6 sm:p-8 shadow-2xl overflow-hidden [perspective:1400px]"
                >
                  <button
                    type="button"
                    onClick={handleClose}
                    className="absolute top-5 right-5 z-20 p-2 rounded-xl border border-borderGlass bg-surface text-textMuted hover:text-signal hover:border-signal-dim transition-all cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                    {/* Realistic 3D Cover Display */}
                    <div className="sm:col-span-5 flex justify-center py-4">
                      <motion.div
                        animate={{ rotateY: [-14, -6, -14] }}
                        transition={{
                          repeat: Infinity,
                          duration: 6,
                          ease: 'easeInOut',
                        }}
                        style={{ transformStyle: 'preserve-3d' }}
                        className="relative w-48 h-68 rounded-r-xl rounded-l-xs shadow-[22px_22px_45px_rgba(0,0,0,0.95)]"
                      >
                        {/* 3D Spine Thickness */}
                        <div
                          style={{
                            transform: 'rotateY(-90deg) translateZ(8px)',
                            backgroundColor: selectedBook.statusColor,
                          }}
                          className="absolute top-0 bottom-0 -left-4 w-4 rounded-l-xs opacity-95 border-r border-black/50 shadow-inner flex items-center justify-center overflow-hidden"
                        >
                          <span className="text-[8px] font-mono font-black text-black rotate-90 whitespace-nowrap uppercase tracking-widest opacity-90">
                            {selectedBook.category}
                          </span>
                        </div>

                        {/* Front Cover Canvas */}
                        <div className="relative w-full h-full rounded-r-xl rounded-l-xs overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                          {selectedBook.renderCover()}
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent pointer-events-none" />
                          <div className="absolute top-0 bottom-0 left-2 w-1.5 bg-gradient-to-r from-black/40 via-transparent to-white/10 pointer-events-none" />
                        </div>
                      </motion.div>
                    </div>

                    {/* Metadata & Synopsis */}
                    <div className="sm:col-span-7 space-y-4">
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full border border-borderGlass bg-surface/80 font-mono text-[10px] text-textMuted uppercase tracking-wider">
                            {selectedBook.category}
                          </span>

                          <span
                            style={{
                              borderColor: `${selectedBook.statusColor}50`,
                              backgroundColor: `${selectedBook.statusColor}18`,
                              color: selectedBook.statusColor,
                            }}
                            className="inline-flex items-center gap-1 font-mono text-[10px] px-2.5 py-0.5 rounded-full border"
                          >
                            <Bookmark className="w-2.5 h-2.5" />
                            <span className="uppercase font-semibold">
                              {selectedBook.statusLabel}
                            </span>
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-textMain leading-tight">
                          {selectedBook.title}
                        </h3>
                        <p className="font-mono text-xs text-signal">
                          by {selectedBook.author}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl liquid-glass-subtle border border-borderGlass/60 space-y-1.5">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-textMuted font-bold">
                          Key Thesis &amp; Application
                        </span>
                        <p className="text-xs sm:text-sm text-textMain/90 leading-relaxed font-normal">
                          “{selectedBook.coreIdea}”
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={handleClose}
                        className="w-full py-2.5 rounded-xl border border-borderGlass bg-surface text-textMain font-mono text-xs hover:border-signal-dim hover:text-signal transition-all cursor-pointer"
                      >
                        Return to Shelf
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
