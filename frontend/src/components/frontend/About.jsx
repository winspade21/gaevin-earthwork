import React from 'react'


const About = () => {
  return (
    <>
    <section className="about-hero position-relative">
        <div className="hero-overlay d-flex flex-column justify-content-center align-items-center text-center">
          <div className="container">
            <h1 className="hero-title">About Us</h1>
            <p className="hero-subtitle">
             Crafting reliable results across every terrain with a commitment to <br />safety and innovation. Leveraging decades of expertise <br />to build strong foundations and lasting partnerships.
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

   

    </>
  )
}

export default About;