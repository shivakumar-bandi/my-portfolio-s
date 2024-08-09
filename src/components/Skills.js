// SkillsSection.js
import React from 'react';
import { skillsData } from './data';
import SkillCard from './SkillCard';
import './Skills.css'

const Skills = () => {
  return (
    <div className="skills-tools-container">
      <h2 className="section-title">Skills</h2>
      <div className="skills-section">
        {skillsData.map((skill, index) => (
          <SkillCard key={index} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
};

export default Skills;