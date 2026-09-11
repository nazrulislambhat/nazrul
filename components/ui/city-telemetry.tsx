'use client';

import React, { useState, useEffect } from 'react';
import { MapPin, Clock, ArrowLeftRight } from 'lucide-react';

interface CityConfig {
  code: 'BLR' | 'SXR';
  name: string;
  tag: string;
  coords: string;
}

const CITIES: CityConfig[] = [
  {
    code: 'BLR',
    name: 'Bengaluru',
    tag: 'Tech Hub',
    coords: '12.9716° N, 77.5946° E',
  },
  {
    code: 'SXR',
    name: 'Srinagar',
    tag: 'Home Base',
    coords: '34.0837° N, 74.7973° E',
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
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      setTimeStr(timeFormatter.format(now));

      const hour = parseInt(
        new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          hour12: false,
        }).format(now),
        10,
      );
      // Working sprint window: 09:30 to 19:00 IST
      setIsWorkingHours(hour >= 9 && hour < 19);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleCity = () => {
    setCityIndex((prev) => (prev + 1) % CITIES.length);
  };

  return (
    <div
      onClick={toggleCity}
      title="Click to toggle primary engineering base"
      className="group inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full liquid-glass border border-borderGlass shadow-sm font-mono text-xs select-none cursor-pointer hover:border-signal-dim/50 transition-all"
    >
      {/* Dynamic Status Beacon */}
      <span className="relative flex h-2 w-2">
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
            isWorkingHours ? 'bg-volt' : 'bg-signal'
          }`}
        />
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${
            isWorkingHours ? 'bg-volt' : 'bg-signal'
          }`}
        />
      </span>

      {/* City & Node */}
      <div className="flex items-center gap-1.5 text-textMain font-semibold">
        <MapPin className="w-3.5 h-3.5 text-signal" />
        <span>{activeCity.name}</span>
        <span className="text-[10px] text-textMuted/70 border border-borderGlass px-1 py-0.2 rounded bg-surface/50">
          {activeCity.code}
        </span>
      </div>

      <span className="text-borderGlass">|</span>

      {/* Real-time IST Clock */}
      <div className="flex items-center gap-1.5 text-textMuted font-normal">
        <Clock className="w-3 h-3 text-signal" />
        <span>{timeStr || '--:--:--'}</span>
        <span className="text-[10px] text-textMuted/80">IST</span>
      </div>

      {/* Interactive Switch Hint */}
      <ArrowLeftRight className="w-3 h-3 text-textMuted/40 group-hover:text-signal group-hover:rotate-180 transition-all ml-0.5" />
    </div>
  );
}
