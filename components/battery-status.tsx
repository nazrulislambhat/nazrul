'use client';

import { useEffect, useState } from 'react';
import {
  BatteryWarning,
  Zap,
  BatteryCharging,
  Coffee,
  TriangleAlert,
} from 'lucide-react';
import { useMobile } from '@/hooks/use-mobile';

interface NavigatorWithBattery extends Navigator {
  getBattery?: () => Promise<BatteryManager>;
}

interface BatteryManager extends EventTarget {
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
  level: number;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject
  ): void;
}

interface BatteryStatus {
  charging: boolean;
  level: number;
  chargingTime: number | null;
  dischargingTime: number | null;
}

const lowBatteryMessages = [
  {
    text: 'Uh-oh, juice is running low!',
    icon: <BatteryWarning className="h-5 w-5 text-red" />,
  },
  {
    text: "Battery's taking a nap. Plug me in!",
    icon: <Coffee className="h-5 w-5 text-yellow" />,
  },
  {
    text: 'I’m feeling weak... need power!',
    icon: <TriangleAlert className="h-5 w-5 text-orange" />,
  },
  {
    text: 'Danger! Battery on strike!',
    icon: <BatteryCharging className="h-5 w-5 text-red" />,
  },
  {
    text: 'It’s not me, it’s the battery.',
    icon: <Zap className="h-5 w-5 text-yellow" />,
  },
  {
    text: 'Low battery. High drama.',
    icon: <TriangleAlert className="h-5 w-5 text-orange" />,
  },
  {
    text: 'Feed me volts!',
    icon: <BatteryCharging className="h-5 w-5 text-green" />,
  },
  {
    text: 'SOS! Battery thirst is real.',
    icon: <BatteryWarning className="h-5 w-5 text-red" />,
  },
  {
    text: 'Power me up, captain!',
    icon: <Zap className="h-5 w-5 text-primary" />,
  },
  {
    text: 'Your device is hangry.',
    icon: <Coffee className="h-5 w-5 text-yellow" />,
  },
];

export default function BatteryStatus() {
  const [batteryStatus, setBatteryStatus] = useState<BatteryStatus | null>(
    null
  );
  const [supported, setSupported] = useState<boolean>(true);
  const isMobile = useMobile();
  const [randomMessage, setRandomMessage] = useState<{
    text: string;
    icon: JSX.Element;
  } | null>(null);

  useEffect(() => {
    const nav = navigator as NavigatorWithBattery;
    if (!nav.getBattery) {
      setSupported(false);
      return;
    }

    const updateBatteryStatus = (battery: BatteryManager) => {
      const updateStatus = () => {
        const newStatus = {
          charging: battery.charging,
          level: battery.level * 100,
          chargingTime:
            battery.chargingTime !== Number.POSITIVE_INFINITY
              ? battery.chargingTime
              : null,
          dischargingTime:
            battery.dischargingTime !== Number.POSITIVE_INFINITY
              ? battery.dischargingTime
              : null,
        };

        setBatteryStatus(newStatus);

        if (!battery.charging && newStatus.level < 200) {
          const msg =
            lowBatteryMessages[
              Math.floor(Math.random() * lowBatteryMessages.length)
            ];
          setRandomMessage(msg);
        } else {
          setRandomMessage(null);
        }
      };

      updateStatus();

      battery.addEventListener('chargingchange', updateStatus);
      battery.addEventListener('levelchange', updateStatus);
      battery.addEventListener('chargingtimechange', updateStatus);
      battery.addEventListener('dischargingtimechange', updateStatus);

      return () => {
        battery.removeEventListener('chargingchange', updateStatus);
        battery.removeEventListener('levelchange', updateStatus);
        battery.removeEventListener('chargingtimechange', updateStatus);
        battery.removeEventListener('dischargingtimechange', updateStatus);
      };
    };

    nav.getBattery?.().then(updateBatteryStatus);
  }, []);

  if (!supported) {
    return (
      <div className="flex items-center gap-2 px-4 py-2 text-sm bg-yellow-50 text-yellow-800 rounded-lg">
        <BatteryWarning className="h-5 w-5" />
        <span>Battery API not supported on this device</span>
      </div>
    );
  }

  if (!batteryStatus) {
    return (
      <div className="text-sm text-muted-foreground px-4 py-2">
        Checking battery status...
      </div>
    );
  }

  const getBatteryColor = () => {
    const { level, charging } = batteryStatus;
    if (charging || level >= 50) return 'bg-green';
    if (level >= 20) return 'bg-yellow';
    return 'bg-red';
  };

  const getBatteryBorderColor = () => {
    const { level, charging } = batteryStatus;
    if (charging || level >= 50) return 'border-green';
    if (level >= 20) return 'border-yellow';
    return 'border-red';
  };

  return (
    <div className="flex items-center gap-4 rounded-lg bg-card text-card-foreground shadow-sm touch-manipulation p-4">
      {/* Battery icon */}
      <div className="relative">
        <div
          className={`h-6 w-10 ${getBatteryBorderColor()} rounded-md relative`}
        >
          {/* Terminal */}
          <div
            className={`absolute right-[-4px] top-1/2 transform -translate-y-1/2 h-3 w-1 ${getBatteryBorderColor().replace(
              'border',
              'bg'
            )} rounded-r-sm`}
          ></div>

          {/* Fill */}
          <div
            className={`absolute left-0.5 top-0.5 bottom-0.5 ${getBatteryColor()} rounded-sm transition-all duration-300 ease-in-out`}
            style={{ width: `calc(${batteryStatus.level}% - 1%)` }}
          >
            {batteryStatus.charging && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Zap className="h-3 w-3 text-background" />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span
            className={`text-xs font-medium ${
              batteryStatus.charging
                ? 'text-green'
                : batteryStatus.level >= 50
                ? 'text-green'
                : batteryStatus.level >= 20
                ? 'text-yellow'
                : 'text-red'
            }`}
          >
            {Math.round(batteryStatus.level)}%
          </span>
        </div>

        {isMobile && randomMessage && (
          <div className="text-xs text-muted-foreground mt-2 flex items-center gap-2">
            {randomMessage.icon} {randomMessage.text}
          </div>
        )}
      </div>
    </div>
  );
}
