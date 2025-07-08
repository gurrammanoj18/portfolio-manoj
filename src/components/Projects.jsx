import React from 'react';
import './projects.css';

const Projects = () => {
  return (
    <div id='SectionProjects' className='projects-div'>
        <h1 className='projects-heading heading'> Projects</h1>
        <p className='projects-bio'>Some recent projects are mentioned below. Access them and Experiece them</p>
        <div className='container'>
            <div className='project-container'>
                <h1 className='project-name'>Water Services Web Application</h1>
                <p className='project-info'>A web application is created to deliver some services </p>
                <ul className='project-skills'>
                    <li className='project-set'>HTML</li>
                    <li className='project-set'>CSS</li>
                    <li className='project-set'>JavaScript</li>
                    <li className='project-set'>ReactJs</li>
                </ul>
                <div className='btn-div'>
                    <button className='btn'><a href='https://github.com/gurrammanoj18/lms-internship.git'>GitHub</a></button>
                    <button className='btn'><a href='https://gurrammanoj18.github.io/lms-internship/'>Live Demo</a></button>
                </div>
            </div>
            <div className='project-container'>
                <h1 className='project-name'>My Portfolio </h1>
                <p className='project-info'>A Portfolio website which showcases my tech skills like HTML,CSS,JS,REACT,etc....</p>
                <ul className='project-skills'>
                    <li className='project-set'>HTML</li>
                    <li className='project-set'>CSS</li>
                    <li className='project-set'>JavaScript</li>
                    <li className='project-set'>ReactJs</li>
                </ul>
                <div className='btn-div'>
                    <button className='btn'><a href='https://github.com/gurrammanoj18/portfolio.git'>GitHub</a></button>
                    <button className='btn'><a href='https://react-portfolio-manoj.netlify.app/'>Live Demo</a></button>
                </div>
            </div>
            <div className='project-container'>
                <h1 className='project-name'>Food Website</h1>
                <p className='project-info'>A Food web application is created to deliver food items near by areas</p>
                <ul className='project-skills'>
                    <li className='project-set'>HTML</li>
                    <li className='project-set'>ReactJs</li>
                    <li className='project-set'>CSS</li>
                    <li className='project-set'>JavaScript</li>
                    
                </ul>
                <div className='btn-div'>
                    <button className='btn'><a href='https://github.com/gurrammanoj18'>GitHub</a></button>
                    <button className='btn'><a href='mani1808.ccbp.tech'>Live Demo</a></button>
                </div>
            </div>
            <div className='project-container'>
                <h1 className='project-name'>Disease Predictor</h1>
                <p className='project-info'>This Disease Predictor web app will predict Diseases may effected <br/>in future by taking daily habits form people</p>
                <ul className='project-skills'>
                    <li className='project-set'>HTML</li>
                    
                    <li className='project-set'>JavaScript</li>
                    <li className='project-set'>CSS</li>
                    <li className='project-set'>ReactJs</li>
                </ul>
                <div className='btn-div'>
                    <button className='btn'><a href='https://github.com/gurrammanoj18'>GitHub</a></button>
                    <button className='btn'><a href='https://github.com/gurrammanoj18'>Live Demo</a></button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Projects
