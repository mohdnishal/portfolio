import React from 'react';
import './ProjectCard.css';  

const ProjectCard = ({ icon, title, description, liveDemo, github }) => {
  return (
    <div className="project-card">
      <div className="project-image"><img src={icon}alt="" /></div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-links">
        {liveDemo&& (
          <a href={liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>
        )}
        {github&& (
          <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
        )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
