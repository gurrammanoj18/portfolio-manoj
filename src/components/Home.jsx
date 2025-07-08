import React from 'react';
import image from './assets/dpPortfolio.jpg';
import './home.css';


const Home = () => {
  return (
    <div id='SectionHome' className='home-div'>
        <div className='content-div'>
            <p  className='descript-bio'>Hello,</p>
            <h1 className='heading-bio'>I'm <span>Gurram Manoj</span> <br/>Full Stack Developer</h1>
            <p className='descript-bio'>I am a Skilled Full-stack Developer with Experience in Developing visually appealing and user friendly Websites.</p>
             <div className='resume'>
                    <a href='https://drive.google.com/file/d/1Cfi6PDbx38xFgrFbwu240wxUwmqnBWfu/view?usp=drivesdk ' className='resume'><button className='resume-btn'>Download resume</button></a>
                </div>

        </div>
        <div className='profile-div'>
            <div className='dp-div'>
                <img src={image} alt='img' className='image-dp'/>
                <h1 className='profile-heading'>Gurram Manoj</h1>
                <p className='manoj-bio bio1'>I'm a Passionate full stack Developer with hands-on-experience with clean and scalable code</p>
                <ul className='skills-profile'>
                    <li className='skill'>Frontend Dev</li>
                    <li  className='skill'>Backend Dev</li>
                    <li  className='skill'>UI/UX</li>
                    <li  className='skill'>Web Dev</li>
                </ul>
            
            </div>

        </div>
      
    </div>
  )
}

export default Home
