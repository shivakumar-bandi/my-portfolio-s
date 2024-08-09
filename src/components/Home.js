import React from 'react'
import './Home.css'

const Home = () => {
  const handleResumeClick = () => {
    // Open the resume in a new tab
    window.open('https://drive.google.com/file/d/1ASIdTJ5S0yve-8RybNKNzgQNcWweIOdR/view?usp=drive_link', '_blank');

    // Trigger the download in the current tab
    window.location.href = 'https://drive.google.com/uc?export=download&id=1ASIdTJ5S0yve-8RybNKNzgQNcWweIOdR';
  }

  return (
    <div className='home'>
      <section id="home" className="home-section">
        <h2>Hi, my name is</h2>
        <h1>Shiva Kumar</h1>
        <h1>I love building <br />and learning new things.</h1>
        <h3>"Entry-Level Full Stack Developer | Proficient in MERN Stack | Passionate About Building Scalable Web Applications"</h3>
        <button onClick={handleResumeClick}>Take a look on my Resume</button>
      </section>
    </div>
  )
}

export default Home
