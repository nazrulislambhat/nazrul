import Link from 'next/link';
import { useState } from 'react';
import {
  FaTimes,
  FaMinus,
  FaWindowRestore,
  FaExternalLinkAlt,
  FaBars,
} from 'react-icons/fa';
import Nav from './nav';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
export default function Header() {
  const [showIcon, setShowIcon] = useState(false);
  const [minimizeIcon, setMinimizeIcon] = useState(false);
  const [resizeIcon, setResizeIcon] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="header flex justify-between  opacity-95  px-12 my-4 relative items-center ">
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
            className="rounded-full border-1 border-1-background hover:bg-secondary"
          />
        </motion.a>
      </div>
      <AnimatePresence>
        <Nav />
      </AnimatePresence>
      <Link
        href="https://cal.com/nazrul"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:animate-text hover:bg-gradient-to-r hover:from-secondary hover:to-orange hover:bg-clip-text hover:text-transparent opacity-100 font-bold text-background border-b-transparent link pb-0.5 flex items-center"
      >
        meeting
        <FaExternalLinkAlt className="ml-1 hover:animate-text hover:bg-gradient-to-r hover:from-secondary hover:to-orange hover:bg-clip-text hover:text-transparent opacity-100 text-background border-b-transparent text-xs link pb-0.5 flex items-center" />
      </Link>
    </div>
  );
}
