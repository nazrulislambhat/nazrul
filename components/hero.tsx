import React from 'react';

export default function Hero() {
  return (
    <main className="flex flex-col h-[600px] text-richBlack justify-center items-center text-center border-2">
      <span className="name flex items-center justify-center gap-4 uppercase animate-text  bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent font-bold opacity-100 text-4xl">
        01
        <span className="seperator block rounded-full text-sm bg-richBlack w-8 h-0.5"></span>
        Nazrul Islam
      </span>
      <h1 className="intro">
        Software Engineer - Full Stack Developer - Code Enthusiast
      </h1>
    </main>
  );
}
