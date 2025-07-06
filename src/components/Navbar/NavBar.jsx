import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './NavBar.css';

function NavBar({ toggleTheme, isDarkTheme }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <nav className="navbar container">
        <div className="logo">Mohd Nishal</div>

        <div className="hamburger" onClick={toggleMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
          <li><Link to="/skills" onClick={toggleMenu}>Skills</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          <li className="mobile-theme-toggle">
            <button onClick={toggleTheme}>
              {isDarkTheme ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>

        <button className="theme-toggle desktop-toggle" onClick={toggleTheme}>
          {isDarkTheme ? '☀️' : '🌙'}
        </button>
      </nav>
    </header>
  );
}

export default NavBar;
