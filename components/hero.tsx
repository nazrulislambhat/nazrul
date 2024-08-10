function Hero() {
  return (
    <div className="relative h-screen xl:min-h-[1440px] text-white px-8 xl:mb-16 xl:px-64 pt-32 bg-primary">
      <div className="relative">
        <h1 className="heading text-xl xl:text-5xl xl:pb-16 selection:bg-secondary selection:text-primary">
          Software developer and sometimes writer. My daily routine consists of
          (but not limited to) drinking coffee, coding, writing, overcoming
          boredom 😉.{' '}
          <span className="border-b-2 border-secondary">
            Living in Namma Bengaluru
          </span>
        </h1>

        <p className="subheading-one selection:bg-secondary selection:text-primary py-8 uppercase max-w-lg xl:float-right tracking-wide text-xs">
          Nazrul Islam is a passionate software developer with a knack for
          turning lines of code into digital wonders.
        </p>
      </div>
      <p className="about h-screen selection:bg-secondary selection:text-primary opacity-50 xl:text-6xl text-xs leading-4 xl:pt-52 xl:mb-32">
        Nazrul Islam, an enthusiastic software developer, excels in transforming
        lines of code into digital marvels. Armed with a computer science
        Masters Degree and a talent for inventive problem-solving, Nazrul Islam is
        committed to enhancing the digital landscape. Beyond coding, Nazrul
        Islam embraces the beauty of nature, enjoying outdoor adventures. This
        multifaceted approach allows Nazrul Islam to find harmony not only in
        software development but also in life's diverse experiences.
      </p>
    </div>
  );
}

export default Hero;
