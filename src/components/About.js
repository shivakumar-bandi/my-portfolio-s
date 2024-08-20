import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hello! I'm Shiva Kumar Bandi, a Full Stack Web Developer specializing in the MERN stack. 
            With hands-on experience in building dynamic web applications, I am skilled in JavaScript, 
            Python, and frameworks like React and Node.js. Certified in MERN Stack Development, I bring 
            a problem-solving mindset, quick learning ability, and a passion for innovation. My background 
            in Electronics and Communication Engineering complements my technical expertise. In my free 
            time, I enjoy puzzle-solving and playing the piano.
          </p>
        </div>
        <div className="about-image">
          <img src="/images/shiva.jpeg" alt="Shiva Kumar Bandi" />
        </div>
      </div>

      {/* Icons Section */}
      <div className="overview-icons">
          <div className="overview-icon">
            <i className="icon-react"></i>
            <h4>React Developer</h4>
          </div>
          <div className="overview-icon">
            <i className="icon-frontend"></i>
            <h4>Frontend Developer</h4>
          </div>
          <div className="overview-icon">
            <i className="icon-backend"></i>
            <h4>Backend Developer</h4>
          </div>
          <div className="overview-icon">
            <i className="icon-mern"></i>
            <h4>MERN Stack Developer</h4>
          </div>
        </div>
    </section>
  );
};

export default About;
