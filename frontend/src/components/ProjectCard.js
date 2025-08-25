import React from 'react';

/** @param {{ title: string, description: string,  image: string, imageStyle: string }} props */
const ProjectCard = ({ title, description, image, imageStyle }) => {
  return (
    <div className="bg-[#1C1D20] p-8 rounded-2xl hover:bg-[#2A2B2F] transition-colors duration-300 cursor-pointer">
      <img src={image} alt={title} className="w-full max-h-64 object-contain rounded-xl mx-auto"/>
      <h3 className="text-2xl font-semibold text-white mb-1">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default ProjectCard;
