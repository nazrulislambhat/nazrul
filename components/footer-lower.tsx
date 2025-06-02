import Link from 'next/link';
import React from 'react';

export default function FooterLower() {
  return (
    <div className="relative bg-background py-2 px-6 md:px-12 xl:px-16 2xl:px-24 flex items-center justify-center gap-1 flex-col flex-wrap text-center">
      <p className="text-[10px] font-semibold">
        Cooked with code & caffeine ☕ under{' '}
        <Link
          href="https://stacknothing.com"
          className="text-[10px] text-primary font-bold link-center"
        >
          StackNothing
        </Link>
      </p>
    </div>
  );
}
