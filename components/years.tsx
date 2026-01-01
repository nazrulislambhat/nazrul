import React from 'react';
import { motion } from 'framer-motion';
import { SquareArrowOutUpRight } from 'lucide-react';
import years from '../assets/years.png';
import Link from 'next/link';
import Image from 'next/image';
function Years() {
  return (
    <div className="bg-primary py-12 text-white selection:bg-primary h-full selection:text-secondary px-6 md:px-12 xl:px-16 2xl:px-24 flex flex-col xl:flex-row justify-between items-center">
      <div className="xl:max-w-[50%]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-primary bg-secondary px-2 py-1 rounded font-semibold w-fit mb-8"
        >
          Over The Years
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white text-base"
        >
          Since December 2024, I have been working as a{' '}
          <strong className="text-secondary">Senior Software Engineer </strong>
          at <strong className="text-secondary">HCLTech</strong>. In this role,
          he has led the development of scalable frontend architecture using{' '}
          <strong className="text-secondary">React </strong>
          and TypeScript. <br />
          <br />I worked as a Frontend Software Engineer (L3) at{' '}
          <strong className="text-secondary">Axelerant</strong>. During this
          period, I built and maintained scalable and modular React components
          that improved feature delivery speed and reduced rework.
          <br />
          <br />I am the{' '}
          <strong className="text-secondary">Founder and CEO</strong> of{' '}
          <Link
            href="https://stacknothing.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-secondary"
          >
            StackNothing
            <SquareArrowOutUpRight className="w-3 h-3 mx-1 inline text-secondary" />
          </Link>
          . While pursuing his master’s degree, I worked as a developer and
          partner with national and international organizations such as
          BaylinMedia (USA), Phandroid (USA), and IIT Roorkee. I managed
          multiple freelance and agency projects end-to-end, handling both
          frontend and backend responsibilities. I founded{' '}
          <Link
            href="https://stacknothing.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-secondary"
          >
            StackNothing Technologies
            <SquareArrowOutUpRight className="w-3 h-3 mx-1 inline text-secondary" />
          </Link>
          with a vision of digital integration and innovation, delivering
          solutions using <strong className="text-secondary">React</strong>,{' '}
          <strong className="text-secondary">JavaScript</strong>,{' '}
          <strong className="text-secondary">Next.js</strong>,{' '}
          <strong className="text-secondary">Drupal</strong>, and{' '}
          <strong className="text-secondary">WordPress</strong>. During this
          time, I launched and managed multiple media platforms including
          FossNoobs Media and HackingSaga Media, and built long-term
          partnerships with brands such as ExpressVPN, NordVPN, AtlasVPS,
          Surfshark, and others.
        </motion.p>
      </div>
      <div>
        <Image src={years} alt="years" className=" mt-8 xl:ml-8 xl:mt-0" />
      </div>
    </div>
  );
}

export default Years;
