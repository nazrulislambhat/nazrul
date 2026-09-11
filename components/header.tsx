'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import logo from '../assets/logo.png';
export default function Header() {
  return (
    <div className="bg-transparent">
      <div className="header py-4 relative flex justify-between z-50 items-cente mb-2 border-2 border-white px-6 md:px-12 xl:px-16 2xl:px-24">
        <Link href="/" className="logo">
          <Image
            src={logo}
            alt="logo"
            width={50}
            height={50}
            className="rounded-full border-white border-2 z-10  bg-transparent "
          />
        </Link>
      </div>
    </div>
  );
}
