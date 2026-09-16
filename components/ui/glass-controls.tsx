'use client';

import React, { useState, useEffect } from 'react';
import {
  Sun,
  Moon,
  Sliders,
  X,
  Hammer,
  Palette,
  Activity,
  Cpu,
  Wifi,
  Globe,
  Battery,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useThemeGlass } from '../context/theme-glass-context';
import MatterShatter from './matter-shatter';

const ACCENT_COLORS = [
  { name: 'Signal Green', value: 'signal', bgClass: 'bg-signal' },
  { name: 'Crimson Red', value: 'red', bgClass: 'bg-red-500' },
  { name: 'Volt Yellow', value: 'volt', bgClass: 'bg-volt' },
  { name: 'Cyan Blue', value: 'cyan', bgClass: 'bg-cyan-400' },
  { name: 'Electric Violet', value: 'violet', bgClass: 'bg-violet-500' },
];

export default function GlassControls() {
  const { isDark, toggleTheme, glassIntensity, setGlassIntensity } =
    useThemeGlass();
  const [open, setOpen] = useState(false);
  const [gravityActive, setGravityActive] = useState(false);
  const [activeColor, setActiveColor] = useState('signal');

  // Telemetry States
  const [fps, setFps] = useState(60);
  const [battery, setBattery] = useState<{
    level: number;
    charging: boolean;
  } | null>(null);
  const [isOnline, setIsOnline] = useState(true);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // 1. Mouse coordinates
    const handleMouseMove = (e: MouseEvent) => {
      setCoordinates({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 2. Network Status
    setIsOnline(navigator.onLine);
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // 3. Battery API
    if ('getBattery' in navigator) {
      (navigator as any).getBattery().then((bat: any) => {
        const updateBattery = () => {
          setBattery({
            level: Math.round(bat.level * 100),
            charging: bat.charging,
          });
        };
        updateBattery();
        bat.addEventListener('levelchange', updateBattery);
        bat.addEventListener('chargingchange', updateBattery);
      });
    }

    // 4. FPS counter
    let frameCount = 0;
    let lastTime = performance.now();
    const calcFps = (time: number) => {
      frameCount++;
      if (time - lastTime >= 1000) {
        setFps(frameCount);
        frameCount = 0;
        lastTime = time;
      }
      requestAnimationFrame(calcFps);
    };
    const animId = requestAnimationFrame(calcFps);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      cancelAnimationFrame(animId);
    };
  }, []);

  const handleColorChange = (colorValue: string) => {
    setActiveColor(colorValue);
    document.documentElement.setAttribute('data-accent', colorValue);
  };

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
              className="mb-3 p-5 w-80 rounded-2xl liquid-glass border border-borderGlass shadow-2xl flex flex-col gap-4 text-xs"
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

              {/* Primary Color Selectors */}
              <div className="flex flex-col gap-2 pt-1 border-t border-borderGlass">
                <div className="flex items-center justify-between text-textMuted">
                  <span className="flex items-center gap-1.5">
                    <Palette className="w-3.5 h-3.5" /> Accent Theme
                  </span>
                  <span className="text-textMain capitalize font-semibold">
                    {activeColor}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-1.5 pt-1">
                  {ACCENT_COLORS.map((color) => {
                    const isSelected = activeColor === color.value;
                    return (
                      <button
                        key={color.value}
                        onClick={() => handleColorChange(color.value)}
                        title={color.name}
                        className={`h-6 flex-1 cursor-pointer rounded-md ${color.bgClass} transition-all duration-200 ${
                          isSelected
                            ? 'ring-2 ring-offset-2 ring-offset-surface ring-white scale-105 shadow-md'
                            : 'opacity-60 hover:opacity-100 hover:scale-105'
                        }`}
                        aria-label={color.name}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Slider */}
              <div className="flex flex-col gap-2 pt-1 border-t border-borderGlass">
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
                  onChange={(e) => {
                    setGlassIntensity(Number(e.target.value));
                  }}
                  className="w-full h-1.5 bg-black/10 dark:bg-white/20 rounded-lg appearance-none cursor-pointer accent-signal"
                />
              </div>

              {/* Spaceship Telemetry HUD Readout Section */}
              <div className="flex flex-col gap-2 pt-2 border-t border-borderGlass text-[10px] text-textMuted">
                <div className="flex items-center justify-between text-signal font-bold uppercase tracking-wider">
                  <span className="flex items-center gap-1">
                    <Activity className="w-3 h-3 animate-pulse" /> Telemetry //
                    ENDURANCE-01
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 bg-surface/50 p-2 rounded-lg border border-borderGlass">
                  <div className="flex items-center gap-1.5">
                    <Cpu className="w-3 h-3 text-textMuted" />
                    <span>
                      FPS: <strong className="text-textMain">{fps}</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Wifi
                      className={`w-3 h-3 ${isOnline ? 'text-signal' : 'text-red-500'}`}
                    />
                    <span
                      className={
                        isOnline ? 'text-textMain' : 'text-red-500 font-bold'
                      }
                    >
                      {isOnline ? 'SYNCED' : 'OFFLINE'}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 col-span-2">
                    <Globe className="w-3 h-3 text-textMuted" />
                    <span>
                      POS:{' '}
                      <strong className="text-textMain">
                        [{coordinates.x}, {coordinates.y}]
                      </strong>
                    </span>
                  </div>
                  {battery && (
                    <div className="flex items-center gap-1.5 col-span-2">
                      <Battery className="w-3 h-3 text-textMuted" />
                      <span>
                        PWR:{' '}
                        <strong className="text-textMain">
                          {battery.level}% {battery.charging ? '⚡' : ''}
                        </strong>
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Google Gravity Hammer Button */}
              <div className="pt-2 border-t border-borderGlass flex items-center justify-center">
                <button
                  onClick={() => {
                    setOpen(false);
                    setGravityActive(true);
                  }}
                  className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-red/40 bg-red/10 text-red w-full justify-center hover:bg-red hover:text-white transition-all font-semibold"
                >
                  <Hammer className="w-3 h-3 group-hover:rotate-12 transition-transform" />
                  <span className="cursor-pointer">Equip Hammer</span>
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
          <span className="hidden sm:inline cursor-pointer">Settings</span>
        </button>
      </div>

      <MatterShatter
        isActive={gravityActive}
        onDeactivate={() => setGravityActive(false)}
      />
    </>
  );
}
