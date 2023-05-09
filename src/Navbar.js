import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Navigation() {
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="md" expanded={expanded}>
      <Container>
        <Navbar.Brand href="#home">My App</Navbar.Brand>
        <Navbar.Toggle onClick={toggleMenu} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#profile">Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
