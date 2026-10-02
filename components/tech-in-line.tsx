'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

type Tech =
  | 'react'
  | 'next'
  | 'ts'
  | 'js'
  | 'tailwind'
  | 'graphql'
  | 'redux'
  | 'node'; 

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
function JSLogo({ animate }: { animate: boolean }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      className="h-[1.35em] w-[1.35em]"
      animate={
        animate ? { rotate: [0, 6, -6, 0], y: [0, -1.5, 0, 0] } : undefined
      }
      transition={{ duration: 2.8, ease: 'easeInOut', repeat: Infinity }}
      aria-hidden="true"
    >
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <text
        x="12.5"
        y="19"
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fill="#000"
      >
        JS
      </text>
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
      {/* Circle and strokes invert between themes so the N is always visible */}
      <circle cx="12" cy="12" r="12" className="fill-black dark:fill-white" />
      <motion.path
        d="M8.5 16.5V7.5l7.5 9"
        fill="none"
        className="stroke-white dark:stroke-black"
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
        className="stroke-white dark:stroke-black"
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

function TailwindLogo({ animate }: { animate: boolean }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      className="h-[1.35em] w-[1.35em]"
      animate={animate ? { x: [0, 1.5, 0, -1.5, 0] } : undefined}
      transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity }}
      aria-hidden="true"
    >
      <path
        fill="#38BDF8"
        d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
      />
    </motion.svg>
  );
}

function GraphQLLogo({ animate }: { animate: boolean }) {
  const pts: [number, number][] = [
    [12, 3],
    [19.8, 7.5],
    [19.8, 16.5],
    [12, 21],
    [4.2, 16.5],
    [4.2, 7.5],
  ];
  return (
    <motion.svg
      viewBox="0 0 24 24"
      className="h-[1.35em] w-[1.35em] text-[#E10098]"
      animate={animate ? { rotate: -360 } : undefined}
      transition={{ duration: 12, ease: 'linear', repeat: Infinity }}
      aria-hidden="true"
    >
      <g
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        strokeLinejoin="round"
      >
        <polygon points={pts.map((p) => p.join(',')).join(' ')} />
        <polygon points="12,3 19.8,16.5 4.2,16.5" />
        <polygon points="12,21 4.2,7.5 19.8,7.5" />
      </g>
      {pts.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="1.6" fill="currentColor" />
      ))}
    </motion.svg>
  );
}

// Simplified "state loop" mark in Redux purple
function ReduxLogo({ animate }: { animate: boolean }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      className="h-[1.35em] w-[1.35em] text-[#764ABC]"
      animate={animate ? { rotate: 360 } : undefined}
      transition={{ duration: 6, ease: 'linear', repeat: Infinity }}
      aria-hidden="true"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      >
        <path d="M12 3.5a8.5 8.5 0 0 1 7.4 4.3" />
        <path d="M20.5 12a8.5 8.5 0 0 1-4.3 7.4" />
        <path d="M12 20.5a8.5 8.5 0 0 1-7.4-4.3" />
        <path d="M3.5 12a8.5 8.5 0 0 1 4.3-7.4" />
      </g>
      <circle cx="12" cy="12" r="2.4" fill="currentColor" />
    </motion.svg>
  );
}

function NodeLogo({ animate }: { animate: boolean }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      className="h-[1.35em] w-[1.35em]"
      animate={animate ? { scale: [1, 1.08, 1] } : undefined}
      transition={{ duration: 2.2, ease: 'easeInOut', repeat: Infinity }}
      aria-hidden="true"
    >
      <polygon
        points="12,1.5 21.5,7 21.5,17 12,22.5 2.5,17 2.5,7"
        fill="#5FA04E"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fontSize="10"
        fontWeight="700"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fill="#fff"
      >
        JS
      </text>
    </motion.svg>
  );
}

/* ---------- Inline chip ---------- */

const LABELS: Record<Tech, string> = {
  react: 'React.js',
  next: 'Next.js',
  ts: 'TypeScript',
  js: 'JavaScript',
  tailwind: 'Tailwind CSS',
  graphql: 'GraphQL',
  redux: 'Redux',
  node: 'Node.js',
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
    js: <JSLogo animate={animate} />,
    tailwind: <TailwindLogo animate={animate} />,
    graphql: <GraphQLLogo animate={animate} />,
    redux: <ReduxLogo animate={animate} />,
    node: <NodeLogo animate={animate} />,
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
