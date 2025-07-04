import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 


import {
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin
} from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="site-footer pt-5 pb-4 mt-5">
      <Container>
        <Row className="mb-4">
          <Col md={3}>
            <h5>Gaevin Earthwork</h5>
            <p>
              We provide reliable and efficient earthmoving services backed by years of experience and a commitment to quality.
              From residential to large-scale commercial projects, we deliver precise results on time, every time.
            </p>
          </Col>

          <Col md={3}>
            <Link to="/services"><h5>Our Services</h5></Link>
            <ul>
              <li><Link to="/services/demolition">Demolition</Link></li>
              <li><Link to="/services/earthmoving">Earthmoving</Link></li>
              <li><Link to="/services/haulage">Haulage</Link></li>
              <li><Link to="/services/plant-hire">Plant Hire</Link></li>
              <li><Link to="/services/transport">Transport</Link></li>
              <li><Link to="/services/civil">Civil</Link></li>
            </ul>
          </Col>

          <Col md={3}>
            <h5>Quick Links</h5>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
            </ul>
          </Col>

          <Col md={3}>
            <h5>Contact</h5>
            <ul>
              <li><FaMapMarkerAlt /> 767 Windsor Road, Box Hill NSW 2765</li>
              <li><FaPhone /> <a href="tel:1234567890">(123) 456-7890</a></li>
              <li><FaEnvelope /> <a href="mailto:info@gaevinsearthmoving.com">info@gaevinearthwork.com</a></li>
            </ul>
            <div className="d-flex gap-3 mt-3 social-icons">
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </Col>
        </Row>

        <hr />

        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Gaevin's Earthmoving. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
