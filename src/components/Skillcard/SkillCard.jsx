import React from 'react';
import './SkillCard.css'; // Shared with Skills page

const SkillCard = ({ icon, name }) => {
  return (
    <div className="skill-card">
      <img src={icon} alt={name} className="skill-icon" />
      <div>{name}</div>
    </div>
  );
};

export default SkillCard;
