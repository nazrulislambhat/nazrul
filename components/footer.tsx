import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MoveRight } from 'lucide-react';
import AnimatedLink from './ui/animated-link';
import TextReveal from './ui/text-reveal';
const menuVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

function Footer() {
  return (
    <div className="flex flex-col boxed md:flex-row justify-between items-center align-middle bg-white px-6 md:px-12 xl:px-16 2xl:px-24 py-6 ">
      <motion.div
        className="left flex-1 py-8 flex flex-col items-start justify-center self-stretch "
        variants={itemVariants}
      >
        <TextReveal
          tag="h2"
          className="text-4xl xl:text-6xl font-extrabold mb-4 text-primary"
          animationType="words"
          delay={0.4}
          staggerDelay={0.1}
        >
          Let's Work Together
        </TextReveal>

        <TextReveal
          tag="p"
          className="black text-base font-semibold my-6"
          animationType="fade-down"
          delay={0}
        >
          That’s all from me—now it’s your turn! Whether you’ve got a wild idea,
          a burning question, or just want to say hi, I’m all ears (and
          keyboards). Let’s make something awesome together!
        </TextReveal>
        <div className="buttons flex gap-4 justify-start w-full">
          <AnimatedLink
            href="mailto:nazrul@nazrulislam.dev"
            className="py-2 text-primary"
            icon={
              <Mail className="w-4 h-4 text-primary group-hover:text-primary transition-colors duration-300" />
            }
          >
            connect via email
          </AnimatedLink>
          <AnimatedLink
            href="/dhoom"
            icon={
              <MoveRight className="w-4 h-4 text-coolWhite group-hover:text-coolWhite transition-colors duration-300" />
            }
            className="bg-primary rounded-md text-coolWhite px-4 py-2"
          >
            connect via form
          </AnimatedLink>
        </div>
      </motion.div>
      <motion.div
        className="right flex-[0.3] xl:flex-[0.5] self-stretch items-center rounded-2xl py-8 xl:px-12 md:px-6"
        variants={itemVariants}
      >
        <motion.nav
          className="flex flex-col gap-4"
          initial="hidden"
          animate="visible"
          variants={menuVariants}
        >
          {['Work', 'Clients', 'Projects', 'Services', 'Resume', 'Contact'].map(
            (item, index) => (
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
                  >
                    {item}
                  </Link>
                ) : (
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-base xl:text-2xl text-black hover:text-primary font-semibold transition"
                  >
                    {item}
                  </Link>
                )}
              </motion.li>
            )
          )}
        </motion.nav>
      </motion.div>
    </div>
  );
}

export default Footer;
