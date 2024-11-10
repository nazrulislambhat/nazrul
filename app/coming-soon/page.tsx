'use client';
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Link from 'next/link';
import logo from '../../assets/logo.png';
import Image from 'next/image';
const ComingSoon = () => {
  const textRef = useRef(null);
  const subTextRef = useRef(null);

  useEffect(() => {
    // GSAP animation for text scaling and opacity
    gsap.fromTo(
      textRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: 'power4.out' }
    );

    gsap.fromTo(
      subTextRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.5, duration: 1, ease: 'power2.out' }
    );
  }, []);

  return (
    <div className="relative flex flex-col items-center text-center justify-center h-screen bg-gradient-to-br from-third via-red to-primary text-white overflow-hidden">
      <motion.div
        className="absolute h-80 w-80 xl:w-[800px] xl:h-[800px] bg-white bg-opacity-10 rounded-full"
        animate={{
          scale: [0.9, 1, 0.9],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: 'easeInOut',
        }}
      />

      <div>
        {/* <motion.a
          href="/"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="logo inline-block my-8"
        >
          <Image
            src={logo}
            alt="logo"
            width={50}
            height={50}
            className="rounded-full border-1 border-1-background z-10 bg-primary hover:bg-secondary "
          />
        </motion.a> */}
        <h1
          ref={textRef}
          className="text-base xl:text-xl font-bold tracking-wide mb-8"
        >
          something
          <span className="bg-secondary px-2 py-4 rounded-lg xl:px-4 xl:py-6 text-primary xl:rounded-2xl">
            awesome
          </span>
          is coming soon
        </h1>

        <motion.p className="text-sm mt-8">
          <a href="mailto:nazrul@nazrulislam.dev" className="hover:link link">
            nazrul@nazrulislam.dev
          </a>{' '}
          |{' '}
          <a href="tel:+919469444007" className="hover:link link">
            9469444007
          </a>
        </motion.p>
      </div>
    </div>
  );
};

export default ComingSoon;
