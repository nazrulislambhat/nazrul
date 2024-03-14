import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../assets/logo.png';
export default function NavCpt() {
  return (
    <nav className="">
      <Link href="/">
        <Image
          className="bg-orange rounded-full cursor-pointer"
          src={Logo}
          alt="logo"
          width={48}
          height={48}
        />
      </Link>
      <ul className="flex">
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
