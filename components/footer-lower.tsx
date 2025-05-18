import Link from 'next/link';
import React from 'react';

export default function FooterLower() {
  return (
    <div className="relative bg-coolWhite py-6 px-6 md:px-12 xl:px-16 2xl:px-24">
      <ul className="flex justify-center items-center">
        <li>
          <p className="text-[10px] font-semibold">
            Developed with 🧑🏻‍💻 by{' '}
            <Link
              href="https://nazrulislam.dev"
              className="lin-primary text-primary"
            >
              Nazrul Islam
            </Link>
          </p>
        </li>
        <span className="mx-1">-</span>
        <li>
          <p className="text-[10px] font-semibold">Copyright © 2025</p>
        </li>
      </ul>
    </div>
  );
}
