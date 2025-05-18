'use client';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
function partner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className="h-screen px-8 xl:px-24 2xl:px-0 pt-36 pb-24 xl:pt-48 flex flex-col xl:flex-row items-center gap-8 xl:gap-0 xl:justify-between">
        <div className="left w-[100%] xl:min-w-[50%]">
          <p className="bg-secondary inline-block mb-8 text-black rounded-md px-4 py-2 font-bold uppercase text-xs">
            Services
          </p>
          <p className="text-3xl xl:text-4xl text-white font-bold">
            Your full web solutions partner
          </p>
        </div>
        <div className="right">
          <p className="text-secondary text-sm xl:text-base uppercase mb-8 font-semibold">
            Over a decade of experience in building products for clients across
            several countries
          </p>
          <div className="flex items-start justify-start gap-4">
            <ul className="font-semibold text-white text-sm">
              <li className="flex items-center gap-2">
                <span className="min-w-[5px] min-h-[5px] inline-block bg-secondary rotate-45"></span>
                Web Development
              </li>
              <li className="flex items-center gap-2">
                <span className="min-w-[5px] min-h-[5px] inline-block bg-secondary rotate-45"></span>
                Web Designing
              </li>
              <li className="flex items-center gap-2">
                <span className="min-w-[5px] min-h-[5px] inline-block bg-secondary rotate-45"></span>
                Drupal Development
              </li>
              <li className="flex items-center gap-2">
                <span className="min-w-[5px] min-h-[5px] inline-block bg-secondary rotate-45"></span>
                Online Branding
              </li>
            </ul>
            <ul className="font-semibold text-white text-sm">
              <li className="flex items-center gap-2">
                <span className="min-w-[5px] min-h-[5px] inline-block bg-secondary rotate-45"></span>
                E-Commerce Development
              </li>
              <li className="flex items-center gap-2">
                <span className="min-w-[5px] min-h-[5px] inline-block bg-secondary rotate-45"></span>
                WordPress Development
              </li>
              <li className="flex items-center gap-2">
                <span className="min-w-[5px] min-h-[5px] inline-block bg-secondary rotate-45"></span>
                <Link href="/services" className="link text-secondary">
                  more
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default partner;
