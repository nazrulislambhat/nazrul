'use client';

import Link from 'next/link';
import { MoveRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { ReactNode, ElementType } from 'react';

interface AnimatedLinkProps {
  href: string;
  children: string;
  className?: string;
  showIcon?: boolean;
  icon?: ElementType;
  onClick?: () => void;
  target?: '_blank' | '_self';
  rel?: string;
}

export default function AnimatedLink({
  href,
  children,
  className = '',
  showIcon = true,
  onClick,
  icon: Icon = MoveRight,
}: AnimatedLinkProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Link
        href={href}
        onClick={onClick}
        className="group relative inline-block overflow-hidden"
      >
        <motion.div
          className={`text-xs font-semibold transition-all duration-300 flex items-center ${className}`}
          whileHover={{ scale: 1 }}
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
                key={`${char}-${index}-${href}`}
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
              className="ml-1"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              whileHover={{
                x: 4,
                transition: { duration: 0.2 },
              }}
            >
              <Icon className="w-4 h-4" />
            </motion.div>
          )}
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-current w-full translate-x-[-100%]"
          whileHover={{ translateX: '100%' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />
      </Link>
    </motion.div>
  );
}
