import React from 'react';
import Image from 'next/image';
import Logo from '../assets/logo.png';
export default function NavCpt() {
  return (
    <nav>
      <Image src={Logo} alt="logo" width={64} height={64} />
    </nav>
  );
}
