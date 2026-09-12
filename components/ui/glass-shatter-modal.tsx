'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Sparkles, Terminal, Mail } from 'lucide-react';

const hireMessages = [
  {
    tag: 'SYSTEM INTEGRITY: 0%',
    headline: 'You broke the glass. Now let’s break production benchmarks.',
    body: 'Senior-level React architectures, sub-second CWV optimization, and resilient engineering. Let’s talk about that high-impact role.',
  },
  {
    tag: 'CRITICAL PAYLOAD DEPLOYED',
    headline: 'Frontends shouldn’t be fragile. But this glass was.',
    body: 'Looking for an engineer who builds design systems that don’t crack under pressure? You found him.',
  },
  {
    tag: 'CORE UNLOCKED',
    headline: 'Nice hit. Let’s build something unbreakable together.',
    body: 'Available for technical leadership, enterprise UI engineering, or architecting next-gen web platforms.',
  },
  {
    tag: 'EXCEPTION CAUGHT: 200 OK',
    headline: 'Warning: High-octane frontend craft detected.',
    body: 'From micro-frontends to WebGL, I solve problems cleanly. Reach out to schedule a conversation.',
  },
];

// Pre-calculated geometric polygons for 12 glass shards
const shardPolygons = [
  'polygon(0% 0%, 33% 0%, 25% 35%, 0% 25%)',
  'polygon(33% 0%, 66% 0%, 50% 30%, 25% 35%)',
  'polygon(66% 0%, 100% 0%, 80% 30%, 50% 30%)',
  'polygon(0% 25%, 25% 35%, 30% 65%, 0% 60%)',
  'polygon(25% 35%, 50% 30%, 55% 65%, 30% 65%)',
  'polygon(50% 30%, 80% 30%, 75% 70%, 55% 65%)',
  'polygon(80% 30%, 100% 0%, 100% 50%, 75% 70%)',
  'polygon(0% 60%, 30% 65%, 25% 100%, 0% 100%)',
  'polygon(30% 65%, 55% 65%, 50% 100%, 25% 100%)',
  'polygon(55% 65%, 75% 70%, 70% 100%, 50% 100%)',
  'polygon(75% 70%, 100% 50%, 100% 100%, 70% 100%)',
];

export default function GlassShatterModal({
  isActive,
  onReset,
}: {
  isActive: boolean;
  onReset: () => void;
}) {
  const [currentMessage, setCurrentMessage] = useState(hireMessages[0]);

  useEffect(() => {
    if (isActive) {
      const randomMsg =
        hireMessages[Math.floor(Math.random() * hireMessages.length)];
      setCurrentMessage(randomMsg);
    }
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center overflow-hidden bg-black/85 backdrop-blur-md">
      {/* 1. Exploding Shard Layers */}
      <div className="absolute inset-0 pointer-events-none">
        {shardPolygons.map((poly, idx) => {
          // Calculate random explosion trajectories
          const angle = (idx / shardPolygons.length) * 2 * Math.PI;
          const distance = 450 + Math.random() * 300;
          const targetX = Math.cos(angle) * distance;
          const targetY = Math.sin(angle) * distance;
          const rotate = (Math.random() - 0.5) * 160;

          return (
            <motion.div
              key={idx}
              initial={{
                opacity: 0.9,
                transform: 'translate3d(0, 0, 0) rotate(0deg) scale(1)',
              }}
              animate={{
                opacity: [0.9, 0.7, 0],
                transform: `translate3d(${targetX}px, ${targetY}px, 0) rotate(${rotate}deg) scale(0.6)`,
              }}
              transition={{
                duration: 1.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ clipPath: poly }}
              className="absolute inset-0 bg-white/20 border-2 border-white/60 backdrop-blur-lg"
            />
          );
        })}
      </div>

      {/* 2. Revealed Hidden Message Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.45, ease: 'easeOut' }}
        className="relative max-w-lg mx-6 p-8 md:p-10 rounded-3xl liquid-glass border-2 border-white text-textMain shadow-2xl z-10"
      >
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-third font-bold mb-4">
          <Terminal className="w-4 h-4" />
          <span>{currentMessage.tag}</span>
        </div>

        <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-4">
          {currentMessage.headline}
        </h3>

        <p className="text-sm md:text-base text-neutral-300 font-normal leading-relaxed mb-8">
          {currentMessage.body}
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="mailto:nazrulislambhat@gmail.com"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-white font-mono text-xs font-bold hover:bg-primaryLight transition-all shadow-md"
          >
            <Mail className="w-4 h-4" />
            <span>Send Direct Dispatch</span>
          </a>

          <button
            onClick={onReset}
            className="flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-white/30 bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-semibold transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Restore Glass</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
