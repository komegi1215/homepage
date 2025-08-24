
import React from 'react';

const Hero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
      <div className="md:col-span-2 space-y-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight">
          Marketing Engineer & Business automation specialist
        </h1>
        <p className="text-lg text-gray-400 max-w-xl">
          Enabling smooth cross-platform automation across fragmented marketing and business processes.
        </p>
      </div>
      <div className="flex justify-center md:justify-end">
        <img
          src="/portrait.jpeg"
          alt="Portrait of the designer"
          className="w-[22rem] h-[22rem] sm:w-[26rem] sm:h-[26rem] md:w-[28rem] md:h-[28rem] object-cover rounded-2xl shadow-xl image-crisp"
        />
      </div>
    </section>
  );
};

export default Hero;
