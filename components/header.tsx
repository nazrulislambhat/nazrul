import Link from 'next/link';
import { useState } from 'react';
import { FaTimes, FaMinus, FaWindowRestore, FaBars } from 'react-icons/fa';
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
    <div className="header flex justify-between bg-background opacity-95 px-12 mt-4 relative items-center ">
      <div className="logo">
        <motion.a
          className="animate-text font-bold text-2xl xl:text-2xl bg-gradient-to-r from-green to-primary bg-clip-text text-transparent opacity-100 uppercase"
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
            className="rounded-full border-1 border-1-background hover:bg-darkBackground"
          />
        </motion.a>
      </div>
      <AnimatePresence>
        <Nav />
      </AnimatePresence>
    </div>
  );
}
