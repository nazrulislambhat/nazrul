import React from 'react';
import Link from 'next/link';
import { Mail, ExternalLink } from 'lucide-react';

export default function SomethingCoolSoon() {
  return (
    <div className="px-6 md:px-12 xl:px-16 2xl:px-24 py-8 border-2 border-white mb-2">
      <p className="text-primary text-xs font-semibold w-fit">
        🚧 Pardon our dust ---- greatness is in progress! 🚀
      </p>
      <p className="text-primary text-xs my-4">
        This site is under construction & bugs are welcomed at:{' '}
        <Link
          href="mailto:n@nazrulislam.dev"
          className="animated-border border-primary font-bold text-black pb-1"
        >
          nazrul@nazrulislam.dev
        </Link>{' '}
        🐞
      </p>
      <p className="text-primary text-xs">
        Progress is here:{' '}
        <Link
          href="https://github.com/nazrulislambhat/nazrul"
          target="_blank"
          rel="noopener noreferrer"
          className="animated-border pb-1 font-bold text-black "
        >
          GitHub
        </Link>
      </p>
    </div>
  );
}
