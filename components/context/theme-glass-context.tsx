'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

interface ThemeGlassContextType {
  isDark: boolean;
  toggleTheme: () => void;
  glassIntensity: number; // 0 to 100
  setGlassIntensity: (val: number) => void;
}

const ThemeGlassContext = createContext<ThemeGlassContextType | undefined>(
  undefined,
);

export function ThemeGlassProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDark, setIsDark] = useState(false);
  const [glassIntensity, setGlassIntensityState] = useState(65);

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    const initialDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    setIsDark(initialDark);
    if (initialDark) {
      document.documentElement.classList.add('dark');
    }

    const savedIntensity = localStorage.getItem('glass-intensity');
    if (savedIntensity) {
      setGlassIntensity(Number(savedIntensity));
    } else {
      setGlassIntensity(65);
    }
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('portfolio-theme', 'light');
    }
  };

  const setGlassIntensity = (val: number) => {
    const clamped = Math.max(0, Math.min(100, val));
    setGlassIntensityState(clamped);
    localStorage.setItem('glass-intensity', clamped.toString());

    // Compute dynamic CSS vars
    const blurPx = Math.round(4 + (clamped / 100) * 28);
    const opacity = (0.2 + (clamped / 100) * 0.6).toFixed(2);
    const specular = (0.3 + (clamped / 100) * 0.7).toFixed(2);

    document.documentElement.style.setProperty('--glass-blur', `${blurPx}px`);
    document.documentElement.style.setProperty('--glass-opacity', opacity);
    document.documentElement.style.setProperty('--glass-specular', specular);
  };

  return (
    <ThemeGlassContext.Provider
      value={{ isDark, toggleTheme, glassIntensity, setGlassIntensity }}
    >
      {children}
    </ThemeGlassContext.Provider>
  );
}

export function useThemeGlass() {
  const context = useContext(ThemeGlassContext);
  if (!context) {
    throw new Error('useThemeGlass must be used inside ThemeGlassProvider');
  }
  return context;
}
