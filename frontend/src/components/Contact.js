import React from 'react';

const Contact = () => {
  return (
    <section className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
      <div className="space-y-2">
        <h2 className="text-4xl font-bold text-white">Get in touch</h2>
        <p className="text-gray-400">I'm currently available for freelance work.</p>
      </div>
      <button className="bg-[#3B82F6] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#2563EB] transition-colors duration-300 shadow-lg shadow-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        Contact me
      </button>
    </section>
  );
};

export default Contact;
