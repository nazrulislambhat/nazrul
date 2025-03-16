import Link from 'next/link';
import { BackgroundLines } from '@/components/ui/background-lines';
import { Mail, Calendar1, Rocket } from 'lucide-react';

function Hero() {
  return (
    <div className="relative boxed1920 text-background py-20 bg-primary px-6 md:px-12 xl:px-16 2xl:px-24">
      <div className="relative boxed">
        <h1 className="heading text-secondary text-3xl font-bold md:text-4xl xl:text-6xl mb-8 xl:mb-10 selection:bg-secondary selection:text-primary relative">
          Senior Software Engineer
        </h1>
        <p className="mb-8 xl:mb-10 text-[1rem] xl:text-[1.25rem] leading-[2rem] selection:bg-secondary selection:text-primary xl:max-w-[90%]">
          Bridging design and functionality with modern front-end technologies —
          crafting scalable, accessible, and high-performance web solutions with
          JavaScript, React js and Next js.
          <span className="text-secondary ">
            {' '}
            Always learning, always optimizing{' '}
          </span>
          <Rocket className="inline" />.
        </p>
        <p className="text-sm mt-6 mb-6 selection:bg-secondary selection:text-primary">
          Living in Namma Bengaluru ( ಬೆಂಗಳೂರು )
        </p>

        <div className="flex items-center gap-8">
          <p className="flex items-center gap-2 text-secondary selection:bg-secondary selection:text-primary">
            <Mail className="w-4 h-4" />
            <Link
              href="mailto:nazrul@nazrulislam.dev"
              target="_blank"
              className="link w-fit text-xs font-semibold text-secondary"
            >
              write an email
            </Link>
          </p>
          <p className="flex items-center gap-2 text-secondary selection:bg-secondary selection:text-primary">
            <Calendar1 className="w-4 h-4" />
            <Link
              href="https://cal.com/nazrul/"
              target="_blank"
              className="link w-fit text-xs font-semibold text-secondary"
            >
              schedule a call
            </Link>
          </p>
        </div>
      </div>
      {/* <p className="about selection:bg-secondary text-sm selection:text-primary xl:text-[3rem] xl:leading-[3rem] xl:pt-52 xl:mb-32">
        Nazrul Islam, an enthusiastic software developer, excels in transforming
        lines of code into digital marvels. Armed with a computer science{' '}
        <span className="border-b-2 border-secondary">Masters Degree</span> and
        a talent for inventive problem-solving, Nazrul Islam is committed to
        enhancing the digital landscape. Beyond coding, Nazrul Islam embraces
        the beauty of nature, enjoying outdoor adventures. This multifaceted
        approach allows Nazrul Islam to find harmony not only in software
        development but also in life's diverse experiences.
      </p> */}
    </div>
  );
}

export default Hero;
