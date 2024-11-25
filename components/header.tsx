'use client';
import Nav from './nav';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import logo from '../assets/logo.png';
export default function Header() {
  return (
    <div className="bg-transparent">
      <div className="header py-4 relative flex justify-between z-50 items-center  boxed px-8 xl:px-24 2xl:px-0">
        <Link href="/" className="logo">
          <Image
            src={logo}
            alt="logo"
            width={50}
            height={50}
            className="rounded-full border-secondary border-2 z-10 hover:bg-secondary bg-transparent "
          />
        </Link>
        <Nav />
      </div>
    </div>
  );
}
