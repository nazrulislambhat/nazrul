'use client';

import React, { useState } from 'react';
import { Sun, Moon, Sliders, X, Hammer } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useThemeGlass } from '../context/theme-glass-context';
import MatterShatter from './matter-shatter';

export default function GlassControls() {
  const { isDark, toggleTheme, glassIntensity, setGlassIntensity } =
    useThemeGlass();
  const [open, setOpen] = useState(false);
  const [gravityActive, setGravityActive] = useState(false);

  return (
    <>
      <div
        id="glass-controls-island"
        className="fixed bottom-6 right-6 z-50 font-mono select-none"
      >
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="mb-3 p-5 w-76 rounded-2xl liquid-glass border border-borderGlass shadow-2xl flex flex-col gap-4 text-xs"
            >
              <div className="flex items-center justify-between border-b border-borderGlass pb-2.5">
                <span className="font-bold tracking-wider uppercase text-textMain">
                  Surface &amp; Theme
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="p-1 text-textMuted hover:text-red transition-colors"
                  aria-label="Close Settings"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Mode Toggle */}
              <div className="flex items-center justify-between">
                <span className="text-textMuted">Mode</span>
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-borderGlass bg-surface text-textMain hover:border-signal-dim hover:text-signal transition-all"
                >
                  {isDark ? (
                    <>
                      <Moon className="w-3.5 h-3.5 text-signal" />
                      <span>Dark</span>
                    </>
                  ) : (
                    <>
                      <Sun className="w-3.5 h-3.5 text-signal" />
                      <span>Light</span>
                    </>
                  )}
                </button>
              </div>

              {/* Slider */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-textMuted">
                  <span>Liquid Glass Blur</span>
                  <span className="text-signal font-semibold pl-1">
                    {glassIntensity}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={glassIntensity}
                  onChange={(e) => setGlassIntensity(Number(e.target.value))}
                  className="w-full h-1.5 bg-black/10 dark:bg-white/20 rounded-lg appearance-none cursor-pointer accent-signal"
                />
              </div>

              {/* Google Gravity Hammer Button */}
              <div className="pt-2 border-t border-borderGlass flex items-center justify-between">
                <button
                  onClick={() => {
                    setOpen(false);
                    setGravityActive(true);
                  }}
                  className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-red/40 bg-red/10 text-red mx-2 hover:bg-red hover:text-white transition-all font-semibold"
                >
                  <Hammer className="w-3 h-3 group-hover:rotate-12 transition-transform" />
                  <span>Equip Hammer</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Trigger Button */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full liquid-glass border border-borderGlass shadow-xl text-textMain hover:border-signal-dim/50 hover:scale-105 transition-all text-xs font-semibold"
          aria-label="Settings"
        >
          <Sliders className="w-4 h-4 text-textMain" />
          <span className="hidden sm:inline">Settings</span>
        </button>
      </div>

      {/* Matter.js Google Gravity Simulation Mount */}
      <MatterShatter
        isActive={gravityActive}
        onDeactivate={() => setGravityActive(false)}
      />
    </>
  );
}
