'use client';

import React from 'react';
import { Providers } from '@/app/providers';
import { ThemeGlassProvider } from '@/components/context/theme-glass-context';
import GlassControls from '@/components/ui/glass-controls';
import BigScreenMessage from '@/components/big-screen-message';
import CwvBadge from '@/components/ui/cwv-badge';
import ConsoleGreeting from '@/components/ui/console-greeting';
import QuickJumpModal from './ui/quick-jump-modal';
import CalFloatingWidget from '@/components/ui/cal-floating-widget';
export default function AppClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeGlassProvider>
      <Providers>
        {children}
        <GlassControls />
        <QuickJumpModal />
        <ConsoleGreeting />
        <BigScreenMessage />
        <CwvBadge />
        <CalFloatingWidget />
      </Providers>
    </ThemeGlassProvider>
  );
}
