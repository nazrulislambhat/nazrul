import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MoveRight } from 'lucide-react';
import AnimatedLink from './ui/animated-link';
import TextReveal from './ui/text-reveal';
import { useState } from 'react';
import ContactForm from './contact-pop-form';
import FooterLower from './footer-lower';
const menuVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

function Footer() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };
  return (
    <div>
      <div className="flex flex-col xl:h-screen bg-white boxed md:flex-row justify-between items-center align-middle px-6 md:px-12 xl:px-16 2xl:px-24">
        <motion.div
          className="left xl:flex-1 md:flex-[0.8] pt-12 pb-6 md:py-12 xl:p-0 flex flex-col items-start justify-center self-stretch "
          variants={itemVariants}
        >
          <TextReveal
            tag="h2"
            className="text-4xl xl:text-6xl font-extrabold mb-4 text-primary selection:text-secondary selection:bg-primary"
            animationType="words"
            delay={0.2}
            staggerDelay={0.1}
          >
            Open to Opportunities
          </TextReveal>

          <TextReveal
            tag="p"
            className="black text-lg text-third font-semibold my-6 selection:text-secondary selection:bg-primary"
            animationType="fade-down"
            delay={0}
          >
            Thanks for stopping by. If my work feels like a good fit, I’d be
            glad to connect and explore what’s next. Until then, I’ll be
            learning, building, and probably drinking too much coffee
          </TextReveal>
          <div className="buttons flex gap-4 justify-start w-full mt-6">
            <AnimatedLink
              href="mailto:nazrul@nazrulislam.dev"
              icon={Mail}
              className="py-3 px-4 text-primary border-1 rounded-md border-primary hover:text-red hover:border-red"
            >
              connect via email
            </AnimatedLink>
            <AnimatedLink
              href=""
              icon={MoveRight}
              onClick={openForm}
              className="bg-primary rounded-md border-1 border-transparent text-background px-4 py-3 hover:bg-red hover:border-1 hover:border-red hover:text-background"
            >
              connect via form
            </AnimatedLink>
            <ContactForm isOpen={isFormOpen} onClose={closeForm} />
          </div>
        </motion.div>
        <motion.div
          className="right xl:flex-1  flex self-stretch items-center pt-6 pb-12 xl:p-0 md:py-12"
          variants={itemVariants}
        >
          <motion.ul
            className="flex flex-col xl:flex-row gap-2 xl:gap-4 w-full justify-end "
            initial="hidden"
            animate="visible"
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
                variants={itemVariants}
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
                    className="text-xl xl:text-2xl animated-border text-third hover:text-primary font-semibold transition selection:text-secondary selection:bg-primary"
                  >
                    {item}
                  </Link>
                ) : (
                  <Link
                    href={`/${item}`}
                    className="text-xl xl:text-2xl animated-border text-third hover:text-primary font-semibold transition selection:text-secondary selection:bg-primary"
                  >
                    {item}
                  </Link>
                )}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
}

export default Footer;
