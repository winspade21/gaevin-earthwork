import React, { useRef, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
          setForm({ name: '', phone: '', email: '', service: '', message: '' });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section className="contact-hero position-relative">
        <div className="hero-overlay d-flex justify-content-center align-items-center text-center">
          <div className="container">
            <h1 className="hero-title">Contact Us</h1>
            <p className="hero-subtitle">
              Have a question, quote request, or project idea? Our team is ready to listen and provide tailored solutions.
              Reach out today and let’s start building your vision together.
            </p>
          </div>
        </div>
        <div className="hero-bottom-shape">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path d="M0,0 C360,60 1080,40 1440,80 L1440,100 L0,100 Z" fill="#f8f9fa" opacity="0.3" />
            <path d="M0,0 C480,80 960,20 1440,90 L1440,100 L0,100 Z" fill="#f8f9fa" opacity="0.6" />
            <path d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z" fill="#f8f9fa" />
          </svg>
        </div>
      </section>

      <section className="contact-main-section mx-5 bg-light">
        <Container>
          <Row className="gy-5">
            <Col lg={5}>
              <div className="mb-4">
                <p className="mb-3">Get in Touch</p>
                <h3>Start your project with a free quote.</h3>
                <p>Whether you're a homeowner planning a backyard transformation or a developer tackling a large-scale build, we’re the trusted partner you can count on.</p>
              </div>
              <div className="contact-info-box mb-3 px-2">
                <FaMapMarkerAlt className="me-2" />
                <span> 767 Windsor Road, Box Hill NSW 2765</span>
              </div>
              <div className="contact-info-box mb-3 px-2">
                <FaEnvelope className="me-2 " />
                <a href="mailto:info@gaevinearthwork.com"> info@gaevinearthwork.com</a>
              </div>
              <div className="contact-info-box mb-4 px-2">
                <FaPhone className="me-2" />
                <a href="tel:+61419111133">(123) 456-7890</a>
              </div>
           
              <div className="social-icons d-flex gap-4 px-5">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <FaFacebookF />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <FaLinkedin />
                </a>
              </div>
            </Col>

            <Col lg={7}>
              <h4 className="mb-4">Send Us a Message</h4>
              {submitted && <p className="text-success">Message sent successfully!</p>}
              <Form ref={formRef} onSubmit={handleSubmit} className="bg-dark text-light p-4 rounded">
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group controlId="formName">
                      <Form.Label>Name *</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formPhone">
                      <Form.Label>Phone *</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formEmail">
                      <Form.Label>Email *</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formService">
                      <Form.Label>Service</Form.Label>
                      <Form.Select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Service</option>
                        <option value="Civil">Civil</option>
                        <option value="Demolition">Demolition</option>
                        <option value="Earthmoving">Earthmoving</option>
                        <option value="Haulage">Haulage</option>
                        <option value="Plant Hire">Plant Hire</option>
                        <option value="Transport">Transport</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group controlId="formMessage">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        maxLength={180}
                      />
                      <div className="text-end text-muted">
                        {form.message.length} / 180
                      </div>
                    </Form.Group>
                  </Col>
                  <Col md={12} className="text-end">
                    <Button type="submit" className="btn btn-primary px-4">
                      Send Message
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>

        <div className="mb-3 mt-5">
                <iframe
                    title="Our Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.8386346772168!2d150.88864581170202!3d-33.661342808232924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129e393db1eb85%3A0xbb50e10803a768e9!2s767%20Windsor%20Rd%2C%20Box%20Hill%20NSW%202765%2C%20Australia!5e0!3m2!1sen!2sph!4v1751655102537!5m2!1sen!2sph"
                    width="100%"
                    height="300"
                    style={{ border: '0', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
      </section>
    </>
  );
};

export default Contact;
