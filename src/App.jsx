import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Projects from './pages/Project';
import Skills from './pages/skills';
import Contact from './pages/contact';

function App() {
  const [isDarkTheme,setIsDarkTheme]=useState(false)
  useEffect(()=>{
    document.documentElement.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
  },[isDarkTheme]);
  return (
    <div className={`App ${isDarkTheme ? 'dark-mode' : 'light-mode'}`}>
      <NavBar toggleTheme={() => setIsDarkTheme(!isDarkTheme)} isDarkTheme={isDarkTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App