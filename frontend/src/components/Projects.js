import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  { title: 'Mpulse',
    description: "Navigate the beat of your city! This application showcases live events, providing insight into happenings near your current location through the 'Events Near You' feature. Additionally, past events you've attended are conveniently accessible on the dashboard. Earn badges for active participation, and explore live comments and photos by checking in!",
    image: 'mpulse_2.png',
    github: 'https://github.com/komegi1215/mpulse',
    demo: 'https://www.m-pulse.live/'},
  { title: 'Tripl',   description: 'Tripl is a fun way to avoid taking day trips alone. Share your itinerary and discover new travel companions! Browse through available trips, choose the ones that interest you, and easily sign up. Stay connected with your travel buddies effortlessly. Interested in organizing your own trip? No problem! Become an organizer and gather your fellow adventurers.',
    image: 'tripl.png',
    github: 'https://github.com/komegi1215/Tripl',
    demo: 'https://tripl-komegi1215-c3f7a7733216.herokuapp.com/'},
  { title: 'Watch list', description: 'It showcases the all-time best movies by genre. Bookmark a movie by adding your comment.',
    github: 'https://github.com/komegi1215/rails-watch-list',
    image: 'watchlist.png',
    demo: 'https://watch-list-mmh-dbd2a9784759.herokuapp.com/lists'},
];

const Projects = () => {
  return (
    <section id="work">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projectsData.map((p, i) => (
          <ProjectCard key={i} title={p.title} description={p.description} image={p.image} github={p.github} demo={p.demo}
          imageStyle={p.title === "Mpulse" ? "object-cover aspect-[4/3]" : "object-contain h-48"}/>
        ))}
      </div>
    </section>
  );
};

export default Projects;
