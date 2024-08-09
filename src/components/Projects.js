import React from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projectData = [
    {
      title: "Sanatan Dharm",
      description: "A comprehensive web platform dedicated to spreading knowledge and awareness about Sanatan Dharma. This project offers users a deep dive into various aspects of the ancient Vedic tradition, including articles, events, festivals, and educational content. Built with the powerful MERN stack (MongoDB, Express.js, React, Node.js) and utilizing Vite for a fast development environment, this platform is designed to be highly interactive, responsive, and scalable.",
      techStack: "MERN Stack (MongoDB, Express.js, React, Node.js) | Vite | HTML | CSS | JavaScript",
      image: "/images/sanatan.png",
      demoLink: "https://sanatandharm-seva-org.vercel.app/",
      codeLink: "https://github.com/shivakumar-bandi"
    },
    {
      title: "To-Do List Manager",
      description: "A streamlined task management application designed to help users organize and track their daily tasks efficiently. Built with React and Axios, this app offers features like adding, editing, deleting, and marking tasks as completed. The application provides a user-friendly interface with modals for task editing and handles real-time updates and loading states for a seamless experience.",
      techStack: "React | Axios | HTML | CSS | JavaScript | Node.js | Express.js",
      image: "/images/Todo list.png",
      demoLink: "https://todo-list-frontend-mu.vercel.app/",
      codeLink: "https://github.com/shivakumar-bandi"
    },
    {
      title: "HERO CLONE",
      description: "A streamlined task management application designed to help users organize and track their daily tasks efficiently. Built with React and Axios, this app offers features like adding, editing, deleting, and marking tasks as completed. The application provides a user-friendly interface with modals for task editing and handles real-time updates and loading states for a seamless experience.",
      techStack: "HTML | CSS | Bootstrap",
      image: "/images/image.png",
      demoLink: "https://shivakumar-bandi.github.io/hero-frontend/",
      codeLink: "https://github.com/shivakumar-bandi"
    },
    {
      title: "Sanatan Dharm",
      description: "A streamlined task management application designed to help users organize and track their daily tasks efficiently. Built with React and Axios, this app offers features like adding, editing, deleting, and marking tasks as completed. The application provides a user-friendly interface with modals for task editing and handles real-time updates and loading states for a seamless experience.",
      techStack: "HTML | CSS | Bootstrap",
      image: "/images/Screenshot.png",
      demoLink: "https://shivakumar-bandi.github.io/sanatandharm.com/",
      codeLink: "https://github.com/shivakumar-bandi"
    },
    // Add more projects here
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-list">
        {projectData.map((project, index) => (
          <div key={index} className="project-item">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="tech-stack">{project.techStack}</p>
              <div className="project-links">
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
