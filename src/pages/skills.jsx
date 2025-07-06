import React from 'react';
import SkillCard from '../components/Skillcard/SkillCard';
import './skills.css';
import data from '../data/data.json'

const Skills = () => {

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="about-content">
          <div>
            <h2 className='heading'>Languages</h2>
            <div className="skills-grid">
              {data.langagues.map((skill, index) => (
                <SkillCard key={index} icon={skill.icon} name={skill.name} />
              ))}
            </div>
          </div>
          <div>
            <h2 className='heading'>Developer Tools & Technologies</h2>
            <div className="skills-grid">
              {data.tools.map((skill, index) => (
                <SkillCard key={index} icon={skill.icon} name={skill.name} />
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Skills;
