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

      {/* New section below About Me */}
      <div className="overview-section">
        <h3>Overview</h3>
        <p>
          I strive to create efficient, aesthetically pleasing websites and applications. Here’s a quick look at what I do:
        </p>
        <div className="overview-cards">
          <div className="card">React Developer</div>
          <div className="card">Frontend Developer</div>
          <div className="card">JavaScript Developer</div>
          <div className="card">Content Creator</div>
        </div>
      </div>
    </section>
  );
};

export default About;
