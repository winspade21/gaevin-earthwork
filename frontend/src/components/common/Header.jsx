import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FaPhone } from 'react-icons/fa';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <Navbar
        expand="lg"
        className={`navbar-custom navbar navbar-dark ${scrolled ? 'scrolled' : ''}`}
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="/" className="logo">
            <span>Gaevin</span> Earthwork
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
            <Nav className="mx-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <NavDropdown title="Services" id="services-dropdown">
                <NavDropdown.Item href="/services" className="fw-semibold text-primary">
                  View All Services
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#demolition">Demolition</NavDropdown.Item>
                <NavDropdown.Item href="#earthmoving">Earthmoving</NavDropdown.Item>
                <NavDropdown.Item href="#transport">Transport</NavDropdown.Item>
                <NavDropdown.Item href="#haulage">Haulage</NavDropdown.Item>
                <NavDropdown.Item href="#plant-hire">Plant Hire</NavDropdown.Item>
                <NavDropdown.Item href="#civil">Civil</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#blogs">Blogs</Nav.Link>
              <Nav.Link href="/contact">Contacts</Nav.Link>
            </Nav>
            <div className="nav-cta-button">
              <button className="nav-quote-btn">
                <FaPhone /> (123) 456-7890
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;