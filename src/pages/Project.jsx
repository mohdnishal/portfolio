import React from 'react';
import ProjectCard from '../components/Projectcard/ProjectCard';
import data from '../data/data.json'
import './project.css';


const Projects = () => {
  
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {data.project.map((project, index) => (
            <ProjectCard
              key={index}
              icon={project.icon}
              title={project.title}
              description={project.description}
              liveDemo={project.liveDemo}
              github={project.github}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
