import React from 'react';
import SkillCard from '../components/Skillcard/SkillCard';
import './Home.css';
import profile from '../assets/profile1.webp';
import About from '../components/about/About';
import {Link} from 'react-router-dom'

const skills = ["React", "Node.js", "MongoDB", "Express", "CSS3", "React Native"];

const Home = () => {
  return (
    <>
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h2 style={{color:'white'}}>Hi,There! 👋🏻</h2>
            <h1> I'm Mohammed Nishal P K</h1>
            <p></p>
            <div className="cta-buttons">
              <Link className="btn btn-primary" to='/projects'>View My Work</Link>
              <Link className='btn btn-secondary' to='/contact'>Get In Touch</Link>
              
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-card floating">
              <div className="profile-img">
                <img src={profile} alt="Mohammed Nishal" className="profile-photo" />
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </section>
   
<About/>
    </>
  );
};

export default Home;
