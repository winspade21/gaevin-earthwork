import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
          <Navbar.Brand as={Link} to="/" className="logo">
            <span>Gaevin</span> Earthwork
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About Us</Nav.Link>

              <NavDropdown title="Services" id="services-dropdown">
                <NavDropdown.Item as={Link} to="/services" className="fw-semibold text-primary">
                  View All Services
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/services/demolition">Demolition</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/earthmoving">Earthmoving</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/transport">Transport</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/haulage">Haulage</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/plant-hire">Plant Hire</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/civil">Civil</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#blogs">Blogs</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contacts</Nav.Link>
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
