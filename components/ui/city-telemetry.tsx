'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';

interface CityConfig {
  code: 'BLR' | 'SXR' | 'SYD';
  name: string;
  tag: string;
  coords: string;
  timezone: string;
  tzLabel: string;
  future?: boolean;
}

const CITIES: CityConfig[] = [
  {
    code: 'BLR',
    name: 'Bengaluru',
    tag: 'Tech',
    coords: '12.9716° N, 77.5946° E',
    timezone: 'Asia/Kolkata',
    tzLabel: 'IST',
  },
  {
    code: 'SXR',
    name: 'Srinagar',
    tag: 'Home',
    coords: '34.0837° N, 74.7973° E',
    timezone: 'Asia/Kolkata',
    tzLabel: 'IST',
  },
  {
    code: 'SYD',
    name: 'Sydney',
    tag: 'Future',
    coords: '33.8688° S, 151.2093° E',
    timezone: 'Australia/Sydney',
    tzLabel: 'AEST',
    future: true,
  },
];

export default function CityTelemetry() {
  const [cityIndex, setCityIndex] = useState(0);
  const [timeStr, setTimeStr] = useState('');
  const [isWorkingHours, setIsWorkingHours] = useState(false);

  const activeCity = CITIES[cityIndex];

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeFormatter = new Intl.DateTimeFormat('en-GB', {
        timeZone: activeCity.timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      setTimeStr(timeFormatter.format(now));

      const hour = parseInt(
        new Intl.DateTimeFormat('en-GB', {
          timeZone: activeCity.timezone,
          hour: '2-digit',
          hour12: false,
        }).format(now),
        10,
      );
      // Working sprint window: 09:30 to 19:00 local
      setIsWorkingHours(hour >= 9 && hour < 19);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [activeCity.timezone]);

  const toggleCity = () => {
    setCityIndex((prev) => (prev + 1) % CITIES.length);
  };

  return (
    <div
      onClick={toggleCity}
      title="Click to toggle engineering hub"
      className="group inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full liquid-glass border border-borderGlass font-mono text-xs select-none cursor-pointer transition-all mx-auto md:mx-0"
    >
      {/* Dynamic Working State Beacon */}
      <span className="relative flex h-2 w-2">
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
            isWorkingHours ? 'bg-red' : 'bg-signal'
          }`}
        />
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${
            isWorkingHours ? 'bg-red shadow-red' : 'bg-signal shadow-signalGlow'
          }`}
        />
      </span>

      {/* Animated City Switcher */}
      <div className="flex items-center gap-1.5 text-textMain font-semibold overflow-hidden">
        <MapPin className="w-3.5 h-3.5 text-signal shrink-0" />
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCity.code}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="flex items-center gap-1.5"
          >
            <span>{activeCity.name}</span>
            <span className="text-[10px] text-textMuted/70 border border-borderGlass px-1 py-0.5 rounded bg-surface/80">
              {activeCity.code}
            </span>
            <span className="hidden sm:inline-block text-[9.5px] text-textMuted/60 font-normal">
              ({activeCity.tag})
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      <span className="text-textMain">|</span>

      {/* Real-time Local Clock */}
      <div className="flex items-center gap-1.5 text-textMuted font-normal">
        <Clock className="w-3 h-3 text-signal" />
        <span className="text-textMain font-medium">
          {timeStr || '--:--:--'}
        </span>
        <span className="text-[10px] text-textMuted/80">
          {activeCity.tzLabel}
        </span>
      </div>
    </div>
  );
}
