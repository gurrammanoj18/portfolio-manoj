import React from 'react';
import './contact.css';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';


const Contact = () => {
  return (
    <section id="SectionContact" className="contact-section">
      <h2 className='contact-heading heading'>Contact Me</h2>
      <p>Let's connect and collaborate!</p>
      <div className="icon-container">
        <a href="https://www.linkedin.com/in/gurrammanoj" target="_blank">
          <FaLinkedin className="icon linkedin" />
        </a>
        <a href="https://github.com/gurrammanoj18" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon github" />
        </a>
        <a href="mailto:gurrammanoj1851@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="icon twitter" />
        </a>
        <a href="https://www.instagram.com/mani.hunter.ig/?hl=en" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon instagram" />
        </a>
      </div>
    </section>
  );
};

export default Contact;

