import React from 'react';
import './about.css';
import { Fal } from 'react-icons/fa';

const About = () => {
  return (
    <div id='SectionAbout' className='about-div'>
        <h1 className='about-heading heading'>What I do</h1>
        <p className='about-bio'>I am a Full Stack Developer with hands on Knowledge in creating visually appealing and user Friendly Websites.Here are some services which i do...</p>
        <div className='service'>
            
            <img src='https://cdn.sanity.io/images/599r6htc/regionalized/5094051dac77593d0f0978bdcbabaf79e5bb855c-1080x1080.png?w=540&h=540&q=75&fit=max&auto=format' className='service-logo'/>
            <div className='service-div'>
                <h1 className='service-name'>UI/UX</h1>
                <p className='service-bio'>Crafting intuitive,aesthetic interfaces that enhance user satisfaction and drive engagement,Techs used Like Figma</p>
            </div>
        </div>
        <div className='service'>
             <img src='https://img.freepik.com/premium-vector/front-end-logo-design_717549-4108.jpg' className='service-logo'/>
            <div className='service-div'>
                <h1 className='service-name'>Frontend Development</h1>
                <p className='service-bio'>Frontend Developer skilled in HTML, CSS, JavaScript, and React. Passionate about creating responsive, user-friendly web interfaces.</p>
            </div>
        </div>
        <div className='service'>
            <img src='https://as2.ftcdn.net/jpg/04/75/01/75/1000_F_475017553_91jWgCknT2GQncXLNq5Kcv5I9veccR2Z.jpg' className='service-logo'/>
            <div className='service-div'>
                <h1 className='service-name'>Backend Development</h1>
                <p className='service-bio'>Experienced in building robust backend systems using Node.js and Express. Skilled in RESTful API design, database management, and server-side logic.</p>
            </div>
        </div>
        
    </div>
  )
}

export default About
