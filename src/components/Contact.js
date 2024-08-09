import React, { useState } from 'react';
import './Contact.css';
import { API_URL } from '../data/apiPath';



const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`${API_URL}/contact`, { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`${text} copied to clipboard!`);
    }, (err) => {
      console.error('Could not copy text: ', err);
    });
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Get In Touch</h2>
      <div className="contact-info">
        <p>
          Mobile No: 
          <span className="contact-detail"> 6303360927 </span>
          <button 
            className="copy-button" 
            onClick={() => copyToClipboard('6303360927')}
          >
            <i className="fas fa-copy"></i>
          </button>
        </p>
        <p>
          Email ID: 
          <span className="contact-detail"> nanishiva2022001@gmail.com </span>
          <button 
            className="copy-button" 
            onClick={() => copyToClipboard('nanishiva2022001@gmail.com')}
          >
            <i className="fas fa-copy"></i>
          </button>
        </p>
        <p>
          Currently, I'm learning Full Stack Web Development."Entry-Level Full Stack Developer | Proficient in MERN Stack | Passionate About Building Scalable Web Applications". My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>To: nanishiva2022001@gmail.com</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      <div className="social-links">
        <button onClick={() => window.location.href='https://github.com/shivakumar-bandi'}>
          <i className="fab fa-github"></i>
        </button>
        <button onClick={() => window.location.href='https://www.linkedin.com/in/bandi-shiva-kumar/'}>
          <i className="fab fa-linkedin"></i>
        </button>
        <button onClick={() => window.location.href='mailto:nanishiva2022001@gmail.com'}>
          <i className="fas fa-envelope"></i>
        </button>
      </div>
    </section>
  );
};

export default Contact;
