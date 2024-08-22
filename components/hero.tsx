function Hero() {
  return (
    <div className="relative xl:min-h-[1440px] text-white px-8 xl:mb-16 xl:px-64 pt-32 pb-16 boxed bg-primary">
      <div className="relative">
        <h1 className="heading text-xl xl:text-5xl xl:pb-16 selection:bg-secondary selection:text-primary pb-12">
          Software developer and sometimes writer. My daily routine consists of
          (but not limited to) drinking coffee, coding, writing, overcoming
          boredom 😉.{' '}
          <span className="border-b-2 border-secondary">
            Living in Namma Bengaluru
          </span>
        </h1>

        <p className="subheading-one hidden xl:block selection:bg-secondary selection:text-primary py-8 uppercase max-w-lg xl:float-right tracking-wide text-xs">
          Nazrul Islam is a passionate software developer with a knack for
          turning lines of code into digital wonders.
        </p>
      </div>
      <p className="about selection:bg-secondary text-sm selection:text-primary xl:text-[3rem] xl:leading-[3rem] xl:pt-52 xl:mb-32">
        Nazrul Islam, an enthusiastic software developer, excels in transforming
        lines of code into digital marvels. Armed with a computer science{' '}
        <span className="border-b-2 border-secondary">Masters Degree</span> and
        a talent for inventive problem-solving, Nazrul Islam is committed to
        enhancing the digital landscape. Beyond coding, Nazrul Islam embraces
        the beauty of nature, enjoying outdoor adventures. This multifaceted
        approach allows Nazrul Islam to find harmony not only in software
        development but also in life's diverse experiences.
      </p>
    </div>
  );
}

export default Hero;
