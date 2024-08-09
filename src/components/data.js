import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGit, FaGithub, FaNpm } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiMongoose, SiVisualstudiocode, SiPostman, SiVercel, SiNetlify, SiHeroku, SiRender } from 'react-icons/si';

export const skillsData = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Mongoose", icon: <SiMongoose /> },
  // Add more skills
];

export const toolsData = [
  { name: "Git", icon: <FaGit /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "npm", icon: <FaNpm /> },
  { name: "VS Code", icon: <SiVisualstudiocode /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "Netlify", icon: <SiNetlify /> },
  { name: "Heroku", icon: <SiHeroku /> },
  { name: "Render", icon: <SiRender /> },
  // Add more tools
];
