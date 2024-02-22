import React from 'react';
import Image from 'next/image';
import Logo from '../assets/logo.png';
import Link from 'next/link';
export default function NavCpt() {
  return (
    <nav className="rounded-full bg-white flex items-center justify-between px-16 py-2 my-2">
      <Link href="/">
        <Image
          className="bg-orange rounded-full cursor-pointer"
          src={Logo}
          alt="logo"
          width={48}
          height={48}
        />
      </Link>
      <ul className="flex items-center gap-16 font-bold">
        <li>
          <Link href="#" className="active hover:opacity-100 hover:text-orange">
            home.
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="opacity-50 hover:opacity-100 hover:text-orange"
          >
            works.
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="opacity-50 hover:opacity-100 hover:text-orange"
          >
            contact.
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="opacity-50 hover:opacity-100 hover:text-orange"
          >
            about.
          </Link>
        </li>
      </ul>
    </nav>
  );
}
