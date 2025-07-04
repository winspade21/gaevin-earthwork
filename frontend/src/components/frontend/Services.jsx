import React, { useEffect } from 'react';

import { assets } from '../../assets/images/assets.js';
import { Link, useLocation } from 'react-router-dom';

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      <section className="services-hero position-relative">
        <div className="hero-overlay d-flex flex-column justify-content-center align-items-center text-center">
          <div className="container">
            <h1 className="hero-title">Our Services</h1>
            <p className="hero-subtitle">
              We provide a full range of earthmoving, demolition, transport, and civil works solutions.<br />
              Backed by expertise, driven by results.
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

      <section className="section-3 bg-light py-5" id="services">
        <div className='row gy-4'>

          {/* Demolition */}
          <div className='col-md-4 col-lg-4' id="demolition">
            <div className='item'>
              <div className='service-image'>
                <img src={assets.demolition} alt="Demolition" className='w-100' />
              </div>
              <div className='service-body'>
                <div className='service-title d-flex align-items-center gap-2'>
                  <i className="fas fa-hammer service-icon"></i>
                  <h3 className="mb-0">Demolition</h3>
                </div>
                <div className='service-content'>
                  <p>We provide safe and compliant demolition for residential and commercial projects—executed with precision and care.</p>
                  <p>Our licensed team ensures minimal disruption and complete site clearance.</p>
                </div>
                <Link to="/services/demolition" className='btn btn-primary'>Read More</Link>
              </div>
            </div>
          </div>

          {/* Earthmoving */}
          <div className='col-md-4 col-lg-4' id="earthmoving">
            <div className='item'>
              <div className='service-image'>
                <img src={assets.earthmoving} alt="Earthmoving" className='w-100' />
              </div>
              <div className='service-body'>
                <div className='service-title d-flex align-items-center gap-2'>
                  <i className="fas fa-mountain service-icon"></i>
                  <h3 className="mb-0">Earthmoving</h3>
                </div>
                <div className='service-content'>
                  <p>We shape terrain to match your project’s exact specifications—handling cuts, fills, and grading with efficiency.</p>
                  <p>Our fleet and operators are equipped for all scales of excavation.</p>
                </div>
                <Link to="/services/earthmoving" className='btn btn-primary'>Read More</Link>
              </div>
            </div>
          </div>

          {/* Transport */}
          <div className='col-md-4 col-lg-4' id="transport">
            <div className='item'>
              <div className='service-image'>
                <img src={assets.transportImg} alt="Transport" className='w-100' />
              </div>
              <div className='service-body'>
                <div className='service-title d-flex align-items-center gap-2'>
                  <i className="fas fa-truck-moving service-icon"></i>
                  <h3 className="mb-0">Transport</h3>
                </div>
                <div className='service-content'>
                  <p>We deliver reliable haulage and transport solutions across varied terrains.</p>
                  <p>From aggregate to equipment, your materials arrive securely and on time.</p>
                </div>
                <Link to="/services/transport" className='btn btn-primary'>Read More</Link>
              </div>
            </div>
          </div>

          {/* Haulage */}
          <div className='col-md-4 col-lg-4' id="haulage">
            <div className='item'>
              <div className='service-image'>
                <img src={assets.haulage} alt="Haulage" className='w-100' />
              </div>
              <div className='service-body'>
                <div className='service-title d-flex align-items-center gap-2'>
                  <i className="fas fa-dolly service-icon"></i>
                  <h3 className="mb-0">Haulage</h3>
                </div>
                <div className='service-content'>
                  <p>From heavy loads to bulk material, we offer dependable haulage for every job.</p>
                  <p>Our team ensures secure transport logistics that align with your deadlines.</p>
                </div>
                <Link to="/services/haulage" className='btn btn-primary'>Read More</Link>
              </div>
            </div>
          </div>

          {/* Plant Hire */}
          <div className='col-md-4 col-lg-4' id="plant-hire">
            <div className='item'>
              <div className='service-image'>
                <img src={assets.plantHire} alt="Plant Hire" className='w-100' />
              </div>
              <div className='service-body'>
                <div className='service-title d-flex align-items-center gap-2'>
                  <i className="fas fa-tractor service-icon"></i>
                  <h3 className="mb-0">Plant Hire</h3>
                </div>
                <div className='service-content'>
                  <p>Hire modern, well-maintained machinery operated by experienced professionals.</p>
                  <p>Flexible terms and reliable support ensure productivity on your site.</p>
                </div>
                <Link to="/services/plant-hire" className='btn btn-primary'>Read More</Link>
              </div>
            </div>
          </div>

          {/* Civil Works */}
          <div className='col-md-4 col-lg-4' id="civil">
            <div className='item'>
              <div className='service-image'>
                <img src={assets.civil} alt="Civil Works" className='w-100' />
              </div>
              <div className='service-body'>
                <div className='service-title d-flex align-items-center gap-2'>
                  <i className="fas fa-road service-icon"></i>
                  <h3 className="mb-0">Civil Works</h3>
                </div>
                <div className='service-content'>
                  <p>We handle road preparation, drainage, and trenching with expert precision.</p>
                  <p>Our civil capabilities ensure your infrastructure meets both code and durability standards.</p>
                </div>
                <Link to="/services/civil" className='btn btn-primary'>Read More</Link>
              </div>
            </div>
          </div>

        </div>
      </section>

    </>
  );
};

export default Services;