
import React from 'react';

const Hero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
      <div className="md:col-span-2 space-y-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight">
          Designer & Developer
        </h1>
        <p className="text-lg text-gray-400 max-w-xl">
          I design and code beautifully simple things, and I love what I do.
        </p>
      </div>
      <div className="flex justify-center md:justify-end">
        <img
          src="https://picsum.photos/seed/portfolio/300/300"
          alt="Portrait of the designer"
          className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-2xl grayscale"
        />
      </div>
    </section>
  );
};

export default Hero;
