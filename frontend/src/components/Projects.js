import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  { title: 'Project One',   description: 'Design & Development' },
  { title: 'Project Two',   description: 'Design & Development' },
  { title: 'Project Three', description: 'Design & Development' },
];

const Projects = () => {
  return (
    <section id="work">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projectsData.map((p, i) => (
          <ProjectCard key={i} title={p.title} description={p.description} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
