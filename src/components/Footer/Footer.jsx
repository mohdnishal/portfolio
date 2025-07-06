import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="social-links">
          <a href="mailto:nishalutd@gmail.com" target='_blank' rel="noopener noreferrer"><FaEnvelope/></a>
          <a href="https://www.linkedin.com/in/mohammed-nishal-pk/"><FaLinkedin/></a>
          <a href="https://github.com/mohdnishal"><FaGithub/></a>
          <a href="tel:+919946158519"><FaPhoneAlt/></a>
        </div>
        <p>&copy; 2025 Mohd Nishal. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer
