'use client';

import { motion } from 'framer-motion';
import type { ElementType } from 'react';

interface TextRevealProps {
  children: string;
  tag?: ElementType;
  className?: string;
  animationType?:
    | 'fade-up'
    | 'fade-down'
    | 'fade-left'
    | 'fade-right'
    | 'scale'
    | 'letters'
    | 'words';
  delay?: number;
  duration?: number;
  staggerDelay?: number;
}

export default function TextReveal({
  children,
  tag: Tag = 'div',
  className = '',
  animationType = 'letters',
  delay = 0,
  duration = 0.6,
  staggerDelay = 0.03,
}: TextRevealProps) {
  const getAnimationVariants = () => {
    switch (animationType) {
      case 'fade-up':
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        };
      case 'fade-down':
        return {
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        };
      case 'fade-left':
        return {
          hidden: { opacity: 0, x: -20 },
          visible: { opacity: 1, x: 0 },
        };
      case 'fade-right':
        return {
          hidden: { opacity: 0, x: 20 },
          visible: { opacity: 1, x: 0 },
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        };
      case 'letters':
        return {
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        };
      case 'words':
        return {
          hidden: { opacity: 0, y: 15 },
          visible: { opacity: 1, y: 0 },
        };
      default:
        return {
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        };
    }
  };

  const variants = getAnimationVariants();

  // For letter-by-letter animation
  if (animationType === 'letters') {
    return (
      <Tag className={className}>
        {children.split('').map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{
              delay: delay + index * staggerDelay,
              duration: duration,
              ease: 'easeOut',
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </Tag>
    );
  }

  // For word-by-word animation
  if (animationType === 'words') {
    return (
      <Tag className={className}>
        {children.split(' ').map((word, index) => (
          <motion.span
            key={index}
            className="inline-block mr-1"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{
              delay: delay + index * (staggerDelay * 10),
              duration: duration,
              ease: 'easeOut',
            }}
          >
            {word}
          </motion.span>
        ))}
      </Tag>
    );
  }

  // For whole text animation
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      }}
    >
      <Tag className={className}>{children}</Tag>
    </motion.div>
  );
}
