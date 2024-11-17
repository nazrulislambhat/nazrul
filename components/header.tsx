'use client';
import Nav from './nav';
import Image from 'next/image';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
export default function Header() {
  return (
    <div className="header  pt-8 bg-primary relative flex justify-between px-8 xl:px-24 2xl:px-0 z-50 items-center max-width-[1440px] ">
      <motion.a
        href="/"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="logo"
      >
        <Image
          src={logo}
          alt="logo"
          width={50}
          height={50}
          className="rounded-full absolute border-secondary border-2 z-10 hover:bg-secondary bg-transparent "
        />
      </motion.a>
      <Nav />
    </div>
  );
}
