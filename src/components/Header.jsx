import React, { useState } from 'react';
import './header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className='header'>
      <h1 className='logo-heading'>Portfolio</h1>

      <div className='menu-icon' onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`options ${isOpen ? 'show' : ''}`}>
        <li><a className='option' href='#SectionHome'>Home</a></li>
        <li><a className='option' href='#SectionAbout'>About</a></li>
        <li><a className='option' href='#SectionProjects'>Projects</a></li>
        <li><a className='option' href='#SectionCertificates'>Certificates</a></li>
        <li><a className='option' href='#SectionExp'>Experience</a></li>
        <li className='mobile-contact'>
          <a href='#SectionContact'><button className='contact-btn'>Contact</button></a>
        </li>
      </ul>

      <div className='desktop-contact'>
        <a href='#SectionContact'><button className='contact-btn'>Contact</button></a>
      </div>
    </div>
  );
};

export default Header;
