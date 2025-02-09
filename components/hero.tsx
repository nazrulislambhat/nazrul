import Link from 'next/link';
import { BackgroundLines } from '@/components/ui/background-lines';
import { Mail, Calendar1, Rocket } from 'lucide-react';

function Hero() {
  return (
    <BackgroundLines className="relative boxed1920 text-background py-20 bg-primary px-6 md:px-12 xl:px-16 2xl:px-24">
      <div className="relative boxed">
        <h1 className="heading text-4xl font-bold md:text-4xl xl:text-6xl pb-4 xl:pb-6 selection:bg-secondary selection:text-primary relative">
          Full Stack Engineer
        </h1>
        <p className="mb-8 xl:mb-10 text-[1rem] xl:text-[1.25rem] leading-[2rem] selection:bg-red selection:text-background xl:max-w-[90%]">
          Dedicated to
          <span className="bg-secondary text-primary rounded-sm mx-2 px-1 py-1">
            empowering brands with impactful online experiences.
          </span>
          My daily workflow? Crafting elegant code, solving complex challenges,
          and turning ideas into seamless digital journeys{' '}
          <Rocket className="inline" />.
        </p>
        <span className="text-sm">Living in Namma Bengaluru ( ಬೆಂಗಳೂರು )</span>
        <p className="subheading-one boxed selection:bg-secondary selection:text-primary mt-6 mb-12 uppercase tracking-wide text-xs">
          Your trusted partner for strategy, design, development
        </p>
        <div className="flex items-center gap-8">
          <p className="flex items-center gap-2 text-secondary">
            <Mail className="w-4 h-4" />
            <Link
              href="mailto:nazrul@nazrulislam.dev"
              target="_blank"
              className="link w-fit text-xs font-semibold text-secondary"
            >
              write an email
            </Link>
          </p>
          <p className="flex items-center gap-2 text-secondary">
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
    </BackgroundLines>
  );
}

export default Hero;
