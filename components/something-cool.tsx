import React from 'react';
import Link from 'next/link';
import { Mail, ExternalLink } from 'lucide-react';

export default function ComingSoonComponent() {
  return (
    <div className=" bg-third">
      <div className="px-6 md:px-12 xl:px-16 2xl:px-24 py-8">
        <p className="text-secondary text-xs font-semibold w-fit">
          🚧 Pardon our dust –--- greatness is in progress! 🚀
        </p>
        <p className="text-background text-xs my-4">
          This site is under construction & bugs are welcomed at{' '}
          <Link
            href="mailto:n@nazrulislam.dev"
            className="hover:border-b-1 border-secondary font-bold text-secondary hover:text-background hover:border-background"
          >
            nazrul@nazrulislam.dev
          </Link>{' '}
          🐞
        </p>
        <p className="text-background text-xs">
          Progress is here:{' '}
          <Link
            href="https://github.com/nazrulislambhat/nazrul"
            target="_blank"
            rel="noopener noreferrer"
            className="border-secondary hover:border-b-1 font-bold text-secondary hover:text-background hover:border-background"
          >
            GitHub
          </Link>
          ⚡
        </p>
      </div>
    </div>
  );
}
