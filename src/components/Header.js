// Header.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../App.css'; // Ensure your custom CSS file is imported

const Header = () => {
  return (
    <Navbar variant="dark" expand="lg" className="sticky-navbar">
      <Navbar.Brand href="#home" className="navbar-brand-custom">Mohd Nishal</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto navbar-nav-custom">
          <Nav.Link href="#about" className="nav-link-custom"><strong>About</strong></Nav.Link>
          <Nav.Link href="#resume" className="nav-link-custom"><strong>Resume</strong></Nav.Link>
          <Nav.Link href="#projects" className="nav-link-custom"><strong>Projects</strong></Nav.Link>
          <Nav.Link href="#contact" className="nav-link-custom"><strong>Contact</strong></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
