import React from 'react';
import { motion } from 'framer-motion';
import { SquareArrowOutUpRight } from 'lucide-react';
import Link from 'next/link';
function Years() {
  return (
    <div className="bg-primary selection:bg-secondary py-20 text-white selection:text-primary h-full px-6 md:px-12 xl:px-16 flex flex-col xl:flex-row justify-between items-center">
      <div>
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
          <strong className="text-secondary">Senior Software Engineer</strong>{' '}
          at <strong className="text-secondary">HCLTech</strong>. In this role,
          I lead the development of scalable and performance-oriented frontend
          architectures using <strong className="text-secondary">React</strong>{' '}
          and <strong className="text-secondary">TypeScript</strong>, focusing
          on maintainability, accessibility, and production-grade UI systems. I
          actively collaborate with cross-functional teams, contribute to
          architectural decisions, and mentor engineers on best practices.
          <br />
          <br />
          Prior to this, I worked as a{' '}
          <strong className="text-secondary">
            Frontend Software Engineer (L3)
          </strong>{' '}
          at <strong className="text-secondary">Axelerant</strong>. There, I
          designed and built modular, reusable React components and
          design-system-driven interfaces that significantly improved feature
          delivery speed, reduced regressions, and enhanced code consistency
          across large-scale projects.
          <br />
          <br />I am also the{' '}
          <strong className="text-secondary">Founder and CEO</strong> of{' '}
          <Link
            href="https://stacknothing.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-secondary"
          >
            StackNothing
            <SquareArrowOutUpRight className="w-3 h-3 mx-1 mb-1 inline text-secondary" />
          </Link>
          . While pursuing my master’s degree, I worked as a developer and
          strategic partner with national and international organizations
          including BaylinMedia (USA), Phandroid (USA), and IIT Roorkee. I
          handled projects end-to-end—spanning frontend, backend, deployment,
          and client communication—while managing multiple freelance and agency
          engagements simultaneously.
          <br />
          <br />I founded{' '}
          <Link
            href="https://stacknothing.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-secondary"
          >
            StackNothing
            <SquareArrowOutUpRight className="w-3 h-3 mx-1 mb-1 inline text-secondary" />
          </Link>{' '}
          with a vision of digital integration and innovation, delivering
          scalable solutions using{' '}
          <strong className="text-secondary">React</strong>,{' '}
          <strong className="text-secondary">JavaScript</strong>, and{' '}
          <strong className="text-secondary">Next.js</strong>. During this
          journey, I launched and managed multiple media platforms, including
          FossNoobs Media and HackingSaga Media, and built long-term
          partnerships with global brands such as ExpressVPN, NordVPN, AtlasVPS,
          and Surfshark.
        </motion.p>
      </div>
    </div>
  );
}

export default Years;
