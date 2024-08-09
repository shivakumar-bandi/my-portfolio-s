// SkillCard.js
import React from 'react';
import './SkillCard.css';

const SkillCard = ({ name, icon }) => {
  return (
    <div className="skill-card">
      <div className="skill-icon">{icon}</div>
      <p className="skill-name">{name}</p>
    </div>
  );
};

export default SkillCard;
