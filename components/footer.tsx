import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin } from 'lucide-react';
import AnimatedLink from './ui/animated-link';
import TextReveal from './ui/text-reveal';
import FooterLower from './footer-lower';

const menuVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

function Footer() {
  return (
    <div>
      <div className="flex flex-col xl:h-screen md:flex-row bg-white justify-between items-center px-6 md:px-12 xl:px-16 2xl:px-24">
        {/* LEFT */}
        <motion.div
          className="left xl:flex-1 md:flex-[0.8] pt-12 pb-6 md:py-12 xl:p-0 flex flex-col items-start justify-center self-stretch"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <TextReveal
            tag="h2"
            className="text-4xl xl:text-6xl font-extrabold mb-4 text-primary selection:text-secondary selection:bg-primary"
            animationType="words"
            delay={0.2}
            staggerDelay={0.1}
          >
            Let’s build something together!
          </TextReveal>

          <TextReveal
            tag="p"
            className="text-lg text-third my-6 selection:text-secondary selection:bg-primary"
            animationType="fade-down"
            delay={0}
          >
            I’d love to connect and explore what’s next. Until then, I’ll be
            learning, building, and probably drinking too much Kombucha.
          </TextReveal>

          {/* CONNECT OPTIONS */}
          <div className="flex flex-wrap gap-4 mt-6">
            <AnimatedLink
              href="mailto:nazrul@nazrulislam.dev"
              icon={Mail}
              className="py-3 px-4 border rounded-md border-primary text-primary hover:text-red hover:border-red"
            >
              Email
            </AnimatedLink>

            <AnimatedLink
              href="tel:+919469444007"
              icon={Phone}
              className="py-3 px-4 border rounded-md border-primary text-primary hover:text-red hover:border-red"
            >
              Phone
            </AnimatedLink>

            <AnimatedLink
              href="https://www.linkedin.com/in/nazrulislambhat"
              icon={Linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 border rounded-md border-primary text-primary hover:text-red hover:border-red"
            >
              LinkedIn
            </AnimatedLink>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="right xl:flex-1 flex self-stretch items-center pt-6 pb-12 xl:p-0 md:py-12"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.ul
            className="flex flex-col xl:flex-row gap-2 xl:gap-4 w-full justify-end"
            variants={menuVariants}
          >
            {[
              'about',
              'experience',
              'projects',
              'skills',
              'resume',
              'contact',
            ].map((item, index) => (
              <motion.li
                key={item}
                className="list-none"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              >
                {item === 'resume' ? (
                  <Link
                    href="/resume"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg xl:text-2xl animated-border text-third hover:text-primary transition"
                  >
                    {item}
                  </Link>
                ) : (
                  <Link
                    href={`/${item}`}
                    className="text-lg xl:text-2xl animated-border text-third hover:text-primary transition"
                  >
                    {item}
                  </Link>
                )}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      <FooterLower />
    </div>
  );
}

export default Footer;
