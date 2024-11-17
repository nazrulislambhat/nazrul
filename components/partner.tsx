import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
function partner() {
  return (
    <motion.div
      className="bg-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className="boxed h-[60vh] px-8 py-12 xl:p-0  flex flex-col xl:flex-row items-center gap-8 xl:gap-0 xl:justify-between">
        <div className="left">
          <p className="bg-secondary inline-block mb-8 text-primary rounded-md px-4 py-2 font-bold uppercase text-base">
            Services
          </p>
          <p className="text-4xl text-primary font-bold">
            Your full web solutions partner
          </p>
        </div>
        <div className="right">
          <p className="text-third uppercase mb-8 font-semibold">
            Over a decade of experience in building products for clients across
            several countries
          </p>
          <div className="flex items-start justify-start gap-4">
            <ul className="font-semibold text-xs text-third">
              <li className="flex items-center gap-2">
                <span className="min-w-[5px] min-h-[5px] inline-block bg-third rotate-45"></span>
                Web Development
              </li>
              <li className="flex items-center gap-2">
                <span className="min-w-[5px] min-h-[5px] inline-block bg-third rotate-45"></span>
                Web Designing
              </li>
              <li className="flex items-center gap-2">
                <span className="min-w-[5px] min-h-[5px] inline-block bg-third rotate-45"></span>
                Drupal Development
              </li>
              <li className="flex items-center gap-2">
                <span className="min-w-[5px] min-h-[5px] inline-block bg-third rotate-45"></span>
                Online Branding
              </li>
            </ul>
            <ul className="font-semibold text-xs text-third">
              <li className="flex items-center gap-2">
                <span className="min-w-[5px] min-h-[5px] inline-block bg-third rotate-45"></span>
                E-Commerce Development
              </li>
              <li className="flex items-center gap-2">
                <span className="min-w-[5px] min-h-[5px] inline-block bg-third rotate-45"></span>
                WordPress Development
              </li>
              <li className="flex items-center gap-2">
                <span className="min-w-[5px] min-h-[5px] inline-block bg-third rotate-45"></span>
                <Link href="/services" className="link-primary text-primary">
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
