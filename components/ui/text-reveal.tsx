'use client';

import React from 'react';
import { motion } from 'motion/react';

interface TextRevealProps {
  children: React.ReactNode;
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
  const Tag = motion[tag] as any;

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

  const renderAnimatedWords = (node: React.ReactNode): React.ReactNode => {
    return React.Children.map(node, (child, index) => {
      if (typeof child === 'string') {
        return child.split(' ').map((word, wIdx) => {
          if (!word) return null;
          return (
            <motion.span
              key={`${index}-${wIdx}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.35,
                delay: delay + (index + wIdx) * 0.03,
              }}
              className="inline-block mr-[0.28em]"
            >
              {word}
            </motion.span>
          );
        });
      }
      if (React.isValidElement(child)) {
        return (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: delay + index * 0.03 }}
            className="inline-block"
          >
            {child}
          </motion.span>
        );
      }
      return child;
    });
  };

  return <Tag className={className}>{renderAnimatedWords(children)}</Tag>;
}
