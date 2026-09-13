// components/ui/text-reveal.tsx
'use client';

import React from 'react';
import { motion } from 'motion/react';

interface TextRevealProps {
  children: string;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
  animationType?: 'words' | 'fade-down';
  delay?: number;
}

export default function TextReveal({
  children,
  tag = 'h2',
  className = '',
  animationType = 'words',
  delay = 0,
}: TextRevealProps) {
  const Tag = motion[tag];

  if (animationType === 'fade-down') {
    return (
      <Tag
        initial={{ opacity: 0, y: -12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay }}
        className={className}
      >
        {children}
      </Tag>
    );
  }

  const words = children.split(' ');

  return (
    <Tag className={className} aria-label={children}>
      <span className="sr-only">{children}</span>
      <span aria-hidden="true">
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: delay + i * 0.035 }}
            className={`inline-block ${i < words.length - 1 ? 'mr-[0.28em]' : ''}`}
          >
            {word}
          </motion.span>
        ))}
      </span>
    </Tag>
  );
}
