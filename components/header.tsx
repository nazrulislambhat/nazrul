import Link from 'next/link';

import Nav from './nav';
import Image from 'next/image';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
export default function Header() {
  return (
    <div className="header relative flex justify-between px-6 xl:px-12 top-4 z-50 items-center boxed ">
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
          className="rounded-full border-1 absolute  border-1-background z-10 bg-primary hover:bg-secondary "
        />
      </motion.a>
      <Nav />
    </div>
  );
}
