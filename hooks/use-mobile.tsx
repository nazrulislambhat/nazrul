'use client';

import { useEffect, useState } from 'react';

export function useMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window === 'undefined') {
      return;
    }

    // Function to check if the device is mobile
    const checkMobile = () => {
      const userAgent =
        navigator.userAgent || navigator.vendor || (window as any).opera;

      // Check for mobile devices based on user agent
      const mobileRegex =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

      // Also check screen width for responsive design
      const isMobileDevice =
        mobileRegex.test(userAgent) || window.innerWidth < 768;

      setIsMobile(isMobileDevice);
    };

    // Check initially
    checkMobile();

    // Add event listener for resize to update on orientation change
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return isMobile;
}
