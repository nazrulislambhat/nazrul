import Link from 'next/link';

import { FaExternalLinkAlt } from 'react-icons/fa';
import Nav from './nav';
import Image from 'next/image';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
export default function Header() {
  return (
    <div className="header flex justify-between  opacity-95  px-6 xl:px-12 my-4 relative items-center ">
      <div className="logo">
        <motion.a
          href="/"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={logo}
            alt="logo"
            width={50}
            height={50}
            className="rounded-full border-1 border-1-background hover:bg-secondary "
          />
        </motion.a>
      </div>
      <Nav />
      <motion.a
        href="https://cal.com/nazrul"
        target="_blank"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        rel="noopener noreferrer"
        className="hover:animate-text  hover:text-secondary text-xs font-semibold text-background border-b-transparent link pb-0.5 hover:scale-95 xl:flex xl:items-center hidden"
      >
        meeting
        <FaExternalLinkAlt className="ml-1 text-background border-b-transparent text-[10px] link pb-0.5 flex items-center" />
      </motion.a>
    </div>
  );
}
