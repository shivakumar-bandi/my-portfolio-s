
// ToolsSection.js
import React from 'react';
import { toolsData } from './data';
import SkillCard from './SkillCard';
import './Skills.css'

const Tools = () => {
  return (
    <div className="skills-tools-container">
      <h2 className="section-title">Tools</h2>
      <div className="tools-section">
        {toolsData.map((tool, index) => (
          <SkillCard key={index} name={tool.name} icon={tool.icon} />
        ))}
      </div>
    </div>
  );
};

export default Tools;