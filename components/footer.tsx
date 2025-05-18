import Link from 'next/link';
import React from 'react';

export default function FooterComponentLower() {
  return (
    <div className="relative bg-coolWhite py-20 px-6 md:px-12 xl:px-16 2xl:px-24">
      <ul className="flex justify-center items-center gap-4">
        <li>
          <Link href="/licences" className="link-primary text-xs font-semibold">
            Licences
          </Link>
        </li>
        |
        <li>
          <p className="text-xs font-semibold">
            Developed with 🧑🏻‍💻 by Nazrul Islam
          </p>
        </li>
        |
        <li>
          <Link
            href="/changelog"
            className="link-primary text-xs font-semibold"
          >
            Changelog
          </Link>
        </li>
        |
        <li>
          <p className="text-xs font-semibold">Copyright © 2025</p>
        </li>
      </ul>
    </div>
  );
}
