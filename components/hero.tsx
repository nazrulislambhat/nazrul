import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Calendar1, Rocket, MapPinHouse } from 'lucide-react';

export default function Hero() {
  return (
    <motion.div className="relative  text-background bg-primary py-20 px-6 md:px-12 xl:px-16 2xl:px-24">
      <div className="relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="heading text-secondary text-3xl font-bold md:text-4xl xl:text-6xl mb-8 xl:mb-10 selection:bg-secondary selection:text-primary relative"
        >
          Senior Software Engineer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mb-8 xl:mb-10 md:text-medium xl:text-xl leading-[2rem] selection:bg-secondary selection:text-primary xl:max-w-[90%]"
        >
          Bridging design and functionality with modern front-end technologies —
          crafting scalable, accessible, and high-performance web solutions with
          JavaScript, React JS and Next JS.
          <span className="text-secondary font-bold">
            {' '}
            Always learning, Always optimizing{' '}
            <Rocket className="w-4 h-4 inline" />
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="text-xs mb-8 text-background  w-fit  border-secondary selection:bg-secondary selection:text-primary flex items-center gap-2 relative"
        >
          <MapPinHouse className="w-4 h-4 inline " /> Namma Bengaluru - ಬೆಂಗಳೂರು
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="flex items-center gap-8"
        >
          <p className="flex items-center gap-2 text-secondary selection:bg-secondary selection:text-primary">
            <Mail className="w-4 h-4" />
            <Link
              href="mailto:nazrul@nazrulislam.dev"
              target="_blank"
              className="link w-fit text-xs text-secondary"
            >
              write an email
            </Link>
          </p>
          <p className="flex items-center gap-2 text-secondary selection:bg-secondary selection:text-primary">
            <Calendar1 className="w-4 h-4" />
            <Link
              href="https://cal.com/nazrul/"
              target="_blank"
              className="link w-fit text-xs text-secondary"
            >
              schedule a call
            </Link>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
