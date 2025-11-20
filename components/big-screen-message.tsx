'use client';
import { useEffect, useState } from 'react';

export default function BigScreenMessage() {
  const [is4K, setIs4K] = useState(false);

  useEffect(() => {
    const checkResolution = () => {
      if (window.screen.width >= 2440) {
        setIs4K(true);
      } else {
        setIs4K(false);
      }
    };

    checkResolution();
    window.addEventListener('resize', checkResolution);

    return () => window.removeEventListener('resize', checkResolution);
  }, []);

  if (!is4K) return null;

  return (
    <div
      className="fixed top-1/2 right-0 -translate-y-1/2 bg-red text-white p-8 text-4xl tracking-widest h-screen flex items-center justify-center"
      style={{
        writingMode: 'vertical-rl',
      }}
    >
      WOW YOU HAVE A NICE & BIG MONITOR
    </div>
  );
}
