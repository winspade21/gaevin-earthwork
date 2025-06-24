import React, { useEffect, useState } from 'react';
import { assets } from '../../assets/images/assets.js';

import Header from '../common/Header.jsx';
import Footer from '../common/Footer.jsx';


import img1 from '../../assets/images/slide1.jpg';
import img2 from '../../assets/images/slide2.jpg';
import img3 from '../../assets/images/slide3.jpg';
import aboutImg from '../../assets/images/about-us.jpg';
import Testimonial from '../common/Testimonial.jsx';
import { Link } from 'react-router-dom';
import Process from '../common/Process.jsx';



const images = [img1, img2, img3];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

 
  return (
    <>
    <Header/>
    <main>
      {/* Hero */}
      <section className="section-1">
        {/* Slide Images */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`bg-slide ${index === currentImage ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}

        <div className="overlay"></div>

        <div className="hero d-flex align-items-center">
            <div className="container-fluid">
              <div className="text-center">
                <span>Precision and Excellence</span>

                <h1>Building Dreams from <br /> the Ground Up.</h1>

                <p>
                  Gaevin Earthwork delivers precise and reliable excavation, site prep,<br />
                  and land development for residential, commercial, and civil projects.
                </p>

                <div className="mt-3">
                    <Link to="/">
                      <button className="btn hero-btn">Get a Quote</button>
                    </Link>
                    <Link to="/services">
                      <button className="btn hero-btn1 ms-3">Our Services</button>
                    </Link>
                </div>
              </div>
            </div>
        </div>

        <div className="custom-shape-divider-bottom-1750258051">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,
            28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,
            32.43,512.34,53.67,583,72.05c69.27,18,
            138.3,24.88,209.4,13.08,36.15-6,
            69.85-17.84,104.45-29.34C989.49,
            25,1113-14.29,1200,52.47V0Z" opacity=".25"
            className="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,
            56.86,47.69,72.05,99.41,111.27,
            165,111,224.58,91.58c31.15-10.15,
            60.09-26.07,89.67-39.8,40.92-19,
            84.73-46,130.83-49.67,36.26-2.85,
            70.9,9.42,98.6,31.56,31.77,
            25.39,62.32,62,103.63,73,40.44,
            10.79,81.35-6.69,119.13-24.28s75.16-39,
            116.92-43.05c59.73-5.85,
            113.28,22.88,168.9,38.84,30.2,
            8.66,59,6.17,87.09-7.5,
            22.43-10.89,48-26.93,
            60.65-49.24V0Z" opacity=".5"
            className="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,
            314.09,71.32,475.83,42.57c43-7.64,
            84.23-20.12,127.61-26.46,
            59-8.63,112.48,12.24,165.56,
            35.4C827.93,77.22,886,95.24,
            951.2,90c86.53-7,172.46-45.71,
            248.8-84.81V0Z" className="shape-fill"></path>
          </svg>
        </div>
      </section>

      {/* About Us */}
      <section className='section-2 py-5'>
            <div className='container py-5'>
              <div className='row'>
                <div className='col-md-6'>
                  <img src={aboutImg} className='w-100' alt="About Us" />
                </div>

                <div className='col-md-6'>
                  <span>About Gaevin Earthwork</span>
                  <h2>Where Family Values Meet Earthmoving Power.</h2>
                  <p>
                    Rooted in family values and driven by passion, every project is approached with care, 
                    commitment, and pride. From the first scoop of soil to the final grade, we bring experience, 
                    precision, and a personal touch.
                  </p>
                  <p>
                    More than just machines and manpower, we build lasting foundations—both in land and relationships.
                    With a reputation earned through hard work and trust, we’re here to move the earth, and move it right.
                  </p>

                  <a href="/about" className="btn">More About Us</a>
                </div>
              </div>
            </div>
      </section>
         

      {/* Our Services */}
      <section className="section-3 bg-light py-5" id="services">
        <div className="container-fluid py-5">
            <div className="section-header text-center ">
                  <span className="sub-title">Our Services</span>
                  <h2 className="section-title ">Services We Provide</h2>
                  <p className="section-description pb-5">
                    Turning tough terrain into solid foundations is what we do best. <br/>
                    With skilled operators and reliable machinery, we deliver results that last.
                  </p>
              </div>
              <div className='row gy-4 pt-4'>

            {/* Demolition */}
            <div className='col-md-4 col-lg-4'>
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
                  <a href="#" className='btn btn-primary'>Read More</a>
                </div>
              </div>
            </div>

            {/* Earthmoving */}
            <div className='col-md-4 col-lg-4'>
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
                  <a href="#" className='btn btn-primary'>Read More</a>
                </div>
              </div>
            </div>

            {/* Transport */}
            <div className='col-md-4 col-lg-4'>
              <div className='item'>
                <div className='service-image'>
                  <img src={assets.transport} alt="Transport" className='w-100' />
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
                  <a href="#" className='btn btn-primary'>Read More</a>
                </div>
              </div>
            </div>

            {/* Haulage */}
            <div className='col-md-4 col-lg-4'>
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
                  <a href="#" className='btn btn-primary'>Read More</a>
                </div>
              </div>
            </div>

            {/* Plant Hire */}
            <div className='col-md-4 col-lg-4'>
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
                  <a href="#" className='btn btn-primary'>Read More</a>
                </div>
              </div>
            </div>

              {/* Civil Works */}
              <div className='col-md-4 col-lg-4'>
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
                    <a href="#" className='btn btn-primary'>Read More</a>
                  </div>
                </div>
              </div>

          </div>          
        </div>
      </section>

      {/* Why Choose Us */}
      <section className='section-4 py-5'>
          <div className='container py-5 mt-3 mb-3'>
              <div className='section-header text-center'>
                  <span>Why Choose Us</span>
                  <h2 className="section-title">Built on Trust, Driven by Results</h2>
                  <p>Trust is the foundation of everything we do—from 
                   planning to project delivery. With proven <br />results and a skilled team, we turn challenges into successful outcomes.</p>
              </div>

              <div className='row'> 
                <div className='col-md-4'>
                  <div className='card shadow border-gray p-4 h-100 text-center'>
                    <div className='card-icon mb-3'>
                      <img src={assets.icon1} alt="Strategic Excellence" width={60} />
                    </div>
                    <div className='card-title'>
                      <h3>Strategic Excellence</h3>
                    </div>
                    <p>Success starts with a smart strategy—and we deliver with precision. From concept to completion, we align every detail with your goals.</p>
                  </div>
                </div>

              {/* Safety First */}
              <div className='col-md-4'>
                <div className='card shadow border-gray p-4 h-100 text-center'>
                  <div className='card-icon mb-3'>
                    <img src={assets.icon2} alt="Prioritizing Safety" width={60} />
                  </div>
                  <div className='card-title'>
                    <h3>Prioritizing Safety</h3>
                  </div>
                  <p>Safety is at the core of everything we do, from planning to execution. We follow strict protocols to protect our team, our clients, and every worksite.</p>
                </div>
              </div>

              {/* Built Around You */}
              <div className='col-md-4'>
                <div className='card shadow border-gray p-4 h-100 text-center'>
                  <div className='card-icon mb-3'>
                    <img src={assets.icon3} alt="Client Focused" width={60} />
                  </div>
                  <div className='card-title'>
                    <h3>Built Around You</h3>
                  </div>
                  <p>At every stage, your priorities guide our process. We’re here to deliver outcomes that reflect your vision and values.</p>
                </div>
              </div>
           </div>

          </div>
      </section>

      {/* Testimonials */}
      <Testimonial/>


      {/* Blogs & News */}
      <section className="section-6 bg-light py-5">
        <div className="container mt-3">
          <div className="section-header text-center mb-5">
            <span>Blog & News</span>
            <h2 className="section-title">Articles & Blog Posts</h2>
            <p>
              Our construction services cover residential, commercial, <br />
              and industrial sectors with precision and reliability.
            </p>
          </div>

          <div className="row">
            {/* Blog Card 1 */}
            <div className="col-md-3 mb-4">
              <div className="card blog-card shadow border-0 h-100">
                <div className="card-img-top">
                  <img src={assets.blogImg1} alt="Haulage Excellence" className="w-100 img-fluid" />
                </div>
                <div className="card-body p-4">
                  <a href="/blog" className="blog-link">
                    Haulage Excellence
                  </a>
                </div>
              </div>
            </div>

            {/* Blog Card 2 */}
            <div className="col-md-3 mb-4">
              <div className="card blog-card shadow border-0 h-100">
                <div className="card-img-top">
                  <img src={assets.blogImg2} alt="Site Prep Strategies" className="w-100 img-fluid" />
                </div>
                <div className="card-body p-4">
                  <a href="/blog" className="blog-link">
                    Site Prep Strategies
                  </a>
                </div>
              </div>
            </div>

            {/* Blog Card 3 */}
            <div className="col-md-3 mb-4">
              <div className="card blog-card shadow border-0 h-100">
                <div className="card-img-top">
                  <img src={assets.blogImg3} alt="From Dirt to Destination" className="w-100 img-fluid" />
                </div>
                <div className="card-body p-4">
                  <a href="/blog" className="blog-link">
                    From Dirt to Destination
                  </a>
                </div>
              </div>
            </div>

            {/* Blog Card 4 */}
            <div className="col-md-3 mb-4">
              <div className="card blog-card shadow border-0 h-100">
                <div className="card-img-top">
                  <img src={assets.blogImg4} alt=" Building with Integrity" className="w-100 img-fluid" />
                </div>
                <div className="card-body p-4">
                  <a href="/blog" className="blog-link">
                     Building with Integrity
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How We work */}
    <Process/>

    </main>
    <Footer/>

    </>
  );
};

export default Home;
