import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

function CustomNavbar({ onToggleDarkMode, darkMode }) {
  return (
    <Navbar
      bg={darkMode ? "dark" : "light"}
      variant={darkMode ? "dark" : "light"}
      expand="lg"
      className="mb-4 shadow-sm sticky-top px-3"
    >
      <Container fluid>
        <Navbar.Brand href="#" className="fw-bold">
          Sanjjiiev S
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#awards">Awards</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Button
            variant={darkMode ? "outline-light" : "outline-dark"}
            onClick={onToggleDarkMode}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
