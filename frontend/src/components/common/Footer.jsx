import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="site-footer pt-5 pb-4 mt-5">
      <Container>
        <Row className="mb-4">
          <Col md={3}>
            <h5>Gaevin Earthwork</h5>
            <p>We provide reliable and efficient earthmoving services backed by years of experience and a commitment to quality. From residential to large-scale commercial projects, we deliver precise results on time, every time.</p>
          </Col>

        <Col md={3}>
            <a href="/services"><h5>Our Services</h5></a>
            <ul>
              <li><a href="">Demolition</a></li>
              <li><a href="">Earthmoving</a></li>
              <li><a href="">Haulage</a></li>
              <li><a href="">Plant Hire</a></li>
              <li><a href="">Transport</a></li>
              <li><a href="">Civil</a></li>
            </ul>
          </Col>
         
        
          <Col md={3}>
            <h5>Quick Links</h5>
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">About Us</a></li>
              <li><a href="">Projects</a></li>
              <li><a href="">Blogs</a></li>
            </ul>
          </Col>

          <Col md={3}>
            <h5>Contact</h5>
            <ul>
              <li><FaMapMarkerAlt /> 123 Earthmoving Road, QLD</li>
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