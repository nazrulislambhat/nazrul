'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

export function PopInline({
  children,
  delay = 0,
  inView = false,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  inView?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();

  // Hero: play on mount. Below the fold: play once when scrolled into view.
  const entrance = inView
    ? {
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true, margin: '-60px' },
      }
    : { animate: { opacity: 1, scale: 1 } };

  return (
    <motion.span
      initial={reduce ? false : { opacity: 0, scale: 0.6 }}
      {...entrance}
      transition={{ type: 'spring', stiffness: 260, damping: 16, delay }}
      whileHover={reduce ? undefined : { scale: 1.05, rotate: -2 }}
      className={`inline-block origin-center ${className}`}
    >
      {children}
    </motion.span>
  );
}
