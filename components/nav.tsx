import React from 'react';
import Image from 'next/image';
import Logo from '../assets/logo.png';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
export default function NavCpt() {
  return (
    <nav className="rounded-full bg-white flex items-center justify-between px-4 py-2 sm:py-4 sm:px-4 my-2 mx-2 xl:mx-12">
      <Link href="/">
        <Image
          className="bg-orange rounded-full cursor-pointer"
          src={Logo}
          alt="logo"
          width={48}
          height={48}
        />
      </Link>

      <ul className="flex gap-6 xl:gap-10 font-bold items-end">
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
