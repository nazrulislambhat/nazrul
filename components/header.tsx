'use client';
import Nav from './Navbar';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import logo from '../assets/logo.png';
export default function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="bg-transparent"
    >
      <div className="header py-4 relative flex justify-between z-50 items-center bg-primary px-6 md:px-12 xl:px-16 2xl:px-24">
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
    </motion.div>
  );
}
