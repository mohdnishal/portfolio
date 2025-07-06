import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

function NavBar({ toggleTheme, isDarkTheme }) {
  const [isMobileMenuOpen,setIsMobileMenuOpen]=useState(false)
  return (
    <header >
        <nav className="navbar container" style={{height:'72px'}}>
        <div className="logo">Mohd Nishal</div>
        <div className='hamburger' onClick={()=>setIsMobileMenuOpen(!isMobileMenuOpen)}>☰</div>
        <ul className={`nav-links ${isMobileMenuOpen?'open':''}`}>
          <li><Link to="/" onClick={()=>setIsMobileMenuOpen(false)}>Home</Link></li>
          <li><Link to="/projects"onClick={()=>setIsMobileMenuOpen(false)}>Projects</Link></li>
          <li><Link to="/skills"onClick={()=>setIsMobileMenuOpen(false)}>Skills</Link></li>
          <li><Link to="/contact"onClick={()=>setIsMobileMenuOpen(false)}>Contact</Link></li>
        </ul>
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkTheme ? '☀️' : '🌙'}
        </button>
      </nav>
    </header>
  )
}

export default NavBar