'use client';

import Link from 'next/link';
import { MoveRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface AnimatedLinkProps {
  href: string;
  children: string;
  className?: string;
  showIcon?: boolean;
  icon?: ReactNode;
}

export default function AnimatedLink({
  href,
  children,
  className = '',
  showIcon = true,
  icon,
}: AnimatedLinkProps) {
  // Use custom icon if provided, otherwise default to MoveRight
  const IconComponent = icon || <MoveRight />;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Link href={href} className="group relative overflow-hidden">
        <motion.div
          className={`text-xs font-semibold transition-all duration-300 flex items-center ${className}`}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.span
            className="relative inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            {children.split('').map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3 + index * 0.03,
                  duration: 0.3,
                  ease: 'easeOut',
                }}
                whileHover={{
                  y: -2,
                  transition: { duration: 0.2 },
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.span>

          {showIcon && (
            <motion.div
              className="ml-1 "
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              whileHover={{
                x: 4,
                transition: { duration: 0.2 },
              }}
            >
              {IconComponent}
            </motion.div>
          )}

          {/* Hover overlay effect */}
          <motion.div
            className="absolute inset-0 -translate-x-full"
            whileHover={{
              translateX: '200%',
              transition: { duration: 0.6, ease: 'easeInOut' },
            }}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
}
