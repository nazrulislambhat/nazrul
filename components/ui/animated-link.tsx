// components/ui/animated-link.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  icon?: LucideIcon;
  className?: string;
  target?: string;
  rel?: string;
}

export default function AnimatedLink({
  href,
  children,
  icon: Icon,
  className = '',
  target,
  rel,
}: AnimatedLinkProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`group inline-flex items-center gap-2 font-mono text-xs font-semibold transition-all duration-200 ${className}`}
    >
      {Icon && (
        <Icon className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
      )}
      <span>{children}</span>
    </Link>
  );
}
