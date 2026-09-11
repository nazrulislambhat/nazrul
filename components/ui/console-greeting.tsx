'use client';

import { useEffect } from 'react';

export default function ConsoleGreeting() {
  useEffect(() => {
    // Only run once in the browser
    const asciiArt = `
  _   _                            _   ___     _                 
 | \\ | | __ _ _____ __ _   _  | | |_ _|___| | __ _ _ __ ___  
 |  \\| |/ _\` |_  / '__| | | | | |  | |/ __| |/ _\` | '_ \` _ \\ 
 | |\\  | (_| |/ /| |  | |_| | | |  | |\\__ \\ | (_| | | | | | |
 |_| \\_|\\__,_/___|_|   \\__,_| |_| |___|___/_|\\__,_|_| |_| |_|
    `;

    console.clear();
    console.log(
      `%c${asciiArt}`,
      'font-family: monospace; font-weight: 900; color: #4F46E5; line-height: 1.2;',
    );

    console.log(
      '%c⚡ Looking under the hood? I like your style.',
      'font-family: monospace; font-size: 13px; font-weight: bold; color: #10B981; padding: 4px 0;',
    );

    console.log(
      '%cSenior Frontend Engineer • React / Next.js / TypeScript\nAvailable for high-impact roles & technical consulting.\n\n📫 Direct Dispatch: nazrulislambhat@gmail.com\n🐙 GitHub: https://github.com/nazrulislambhat\n💼 LinkedIn: https://linkedin.com/in/nazrulislambhat',
      'font-family: monospace; font-size: 11px; color: #94A3B8; line-height: 1.6;',
    );
  }, []);

  return null;
}
