import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaSun, FaMoon } from 'react-icons/fa';
import { personalData } from '../data';
import './navbar.css';

function CustomNavbar({ onToggleDarkMode, darkMode }) {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar
      bg={darkMode ? "dark" : "light"}
      variant={darkMode ? "dark" : "light"}
      expand="lg"
      className="shadow-sm sticky-top px-3"
    >
      <Container fluid>
        <Navbar.Brand href="/" className="fw-bold">
          {personalData.name}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <Nav.Link href="#about" onClick={(e) => handleScroll(e, 'about')}>About</Nav.Link>
            <Nav.Link href="#projects" onClick={(e) => handleScroll(e, 'projects')}>Projects</Nav.Link>
            <Nav.Link href="#skills" onClick={(e) => handleScroll(e, 'skills')}>Skills</Nav.Link>
            <Nav.Link href="#education" onClick={(e) => handleScroll(e, 'education')}>Education</Nav.Link>
            <Nav.Link href="#awards" onClick={(e) => handleScroll(e, 'awards')}>Awards</Nav.Link>
            <Nav.Link href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact</Nav.Link>
          </Nav>
          <button
            onClick={onToggleDarkMode}
            className="theme-toggle-btn"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
