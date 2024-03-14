import Image from 'next/image';
import Logo from '../assets/logo.png';
import Link from 'next/link';
import { useState } from 'react';
import { FaTimes, FaMinus, FaRegWindowRestore } from 'react-icons/fa';

export default function Header() {
  const [showIcon, setShowIcon] = useState(false);
  const [minimizeIcon, setMinimizeIcon] = useState(false);
  const [resizeIcon, setResizeIcon] = useState(false);
  return (
    <div className="header flex align-middle justify-start items-center">
      <div className="icons-container flex items-center gap-2">
        <span
          className="icon cancel bg-orange rounded-full w-[15px] h-[15px] flex items-center justify-center"
          onMouseEnter={() => setShowIcon(true)}
          onMouseLeave={() => setShowIcon(false)}
        >
          {showIcon && (
            <FaTimes className="show-icon text-background text-[10px]" />
          )}
        </span>
        <span
          className="icon minimize bg-yellow rounded-full w-[15px] h-[15px] flex items-center justify-center"
          onMouseEnter={() => setMinimizeIcon(true)}
          onMouseLeave={() => setMinimizeIcon(false)}
        >
          {minimizeIcon && (
            <FaMinus className="minimize-icon text-background text-[10px]" />
          )}
        </span>
        <span
          className="icon minimize bg-green rounded-full w-[15px] h-[15px] flex items-center justify-center"
          onMouseEnter={() => setResizeIcon(true)}
          onMouseLeave={() => setResizeIcon(false)}
        >
          {resizeIcon && (
            <FaRegWindowRestore className="resize-icon text-background text-[10px]" />
          )}
        </span>{' '}
      </div>
      <Link href="/">
        <Image
          className="bg-purple rounded-full cursor-pointer"
          src={Logo}
          alt="logo"
          width={48}
          height={48}
        />
      </Link>
    </div>
  );
}
