'use client';

import { useEffect, useState } from 'react';

const BatteryStatus = () => {
  const [level, setLevel] = useState(1);
  const [charging, setCharging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    let battery: BatteryManager;

    const updateBatteryStatus = () => {
      setLevel(battery.level);
      setCharging(battery.charging);
    };

    const detectDevice = () => {
      const userAgent = navigator.userAgent || navigator.vendor;
      const isMobileDevice = /android|iphone|ipad|ipod|windows phone/i.test(
        userAgent.toLowerCase()
      );
      setIsMobile(isMobileDevice);
    };

    detectDevice();

    navigator.getBattery?.().then((bat) => {
      battery = bat;
      updateBatteryStatus();

      battery.addEventListener('levelchange', updateBatteryStatus);
      battery.addEventListener('chargingchange', updateBatteryStatus);
    });

    return () => {
      battery?.removeEventListener('levelchange', updateBatteryStatus);
      battery?.removeEventListener('chargingchange', updateBatteryStatus);
    };
  }, []);

  const batteryPercentage = Math.round(level * 100);
  const batteryColor =
    batteryPercentage > 60
      ? 'bg-green'
      : batteryPercentage > 30
      ? 'bg-yellow'
      : 'bg-red';

  return (
    <div className="flex float-right items-center gap-2 text-secondary bg-transparent w-fit">
      {/* Battery Icon */}
      <div className="relative w-10 h-3 border-1 border-background rounded-sm">
        <div
          className={`absolute top-0 left-0 h-full ${batteryColor}`}
          style={{ width: `${batteryPercentage}%` }}
        />
        {/* <div className="absolute right-[-10px] top-[5px] w-[5px] m h-2 bg-red rounded-sm" /> */}
        {/* Charging bolt */}
        {charging && (
          <svg
            className="absolute top-[0px] left-[80%] transform -translate-x-1/2 text-red"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path d="M7.5 0L3 9h4v7l5-10H8L11 0H7.5z" />
          </svg>
        )}
      </div>

      {/* Label */}
      <div className="text-[8px] font-bold text-background">
        {batteryPercentage}%
      </div>
    </div>
  );
};

export default BatteryStatus;
