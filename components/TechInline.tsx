'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

type Tech = 'react' | 'next' | 'ts';

/* ---------- Animated logos ---------- */

function ReactLogo({ animate }: { animate: boolean }) {
  return (
    <motion.svg
      viewBox="-11.5 -10.5 23 21"
      className="h-[1.35em] w-[1.35em] text-[#61DAFB]"
      animate={animate ? { rotate: 360 } : undefined}
      transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
      aria-hidden="true"
    >
      <circle r="2" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </motion.svg>
  );
}

function NextLogo({ animate }: { animate: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[1.35em] w-[1.35em]"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="12" className="fill-textMain" />
      {/* "N" strokes draw themselves in a loop */}
      <motion.path
        d="M8.5 16.5V7.5l7.5 9"
        fill="none"
        stroke="#fff"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: animate ? 0 : 1 }}
        animate={animate ? { pathLength: [0, 1, 1, 0] } : undefined}
        transition={{
          duration: 3.2,
          times: [0, 0.4, 0.8, 1],
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />
      <motion.path
        d="M15.5 7.5v4.5"
        stroke="#fff"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
        animate={animate ? { opacity: [0.3, 1, 0.3] } : undefined}
        transition={{ duration: 3.2, repeat: Infinity }}
      />
    </svg>
  );
}

function TSLogo({ animate }: { animate: boolean }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      className="h-[1.35em] w-[1.35em]"
      animate={animate ? { y: [0, -2, 0], rotate: [0, -4, 0] } : undefined}
      transition={{ duration: 2.4, ease: 'easeInOut', repeat: Infinity }}
      aria-hidden="true"
    >
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <text
        x="12.5"
        y="19"
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fill="#fff"
      >
        TS
      </text>
    </motion.svg>
  );
}

/* ---------- Inline chip ---------- */

const LABELS: Record<Tech, string> = {
  react: 'React.js',
  next: 'Next.js',
  ts: 'TypeScript',
};

export function TechInline({
  tech,
  delay = 0,
  inView = false,
}: {
  tech: Tech;
  delay?: number;
  inView?: boolean;
}) {
  const reduce = useReducedMotion();
  const animate = !reduce;

  const logo: Record<Tech, ReactNode> = {
    react: <ReactLogo animate={animate} />,
    next: <NextLogo animate={animate} />,
    ts: <TSLogo animate={animate} />,
  };

  // Hero: play on mount. Below the fold: play once when scrolled into view.
  const entrance = inView
    ? {
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true, margin: '-60px' },
      }
    : { animate: { opacity: 1, scale: 1 } };

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.6 }}
      {...entrance}
      transition={{ type: 'spring', stiffness: 260, damping: 16, delay }}
      whileHover={animate ? { scale: 1.12, rotate: -3 } : undefined}
      className="mx-0.5 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 align-middle text-textMain font-semibold"
    >
      {logo[tech]}
      <span className="text-[0.85em]">{LABELS[tech]}</span>
    </motion.span>
  );
}
