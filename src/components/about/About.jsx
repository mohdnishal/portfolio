import React from 'react';
import './About.css';
import aboutImg from '../../assets/profile.webp'

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        {/* Left Content */}
        <div className="about-text">
          <h2 className="about-title">ABOUT ME</h2>
          <p>
            I'm <span className="highlight">Mohammed Nishal P K</span>,I recently graduated with a Bachelor's degree in Computer Science and Engineering in 2025.
          </p>
          <p>
            I enjoy solving real-world problems using technologies like <span className="highlight">React</span>, <span className="highlight">Python</span>, and <span className="highlight">SQL</span>. I believe in writing clean, efficient code and continuously expanding my skills.
          </p>
          <p>
            I’m always open to new opportunities and collaborations, so feel free to connect!
          </p>
        </div>

        {/* Right Image */}
        <div className="about-image">
          <img src={aboutImg} alt="About Illustration" />
        </div>
      </div>
    </section>
  );
};

export default About;
