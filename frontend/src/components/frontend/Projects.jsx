import React from 'react'

const Projects = () => {
  return (
    <>
        <section className="project-hero position-relative">
        <div className="hero-overlay d-flex flex-column justify-content-center align-items-center text-center">
          <div className="container">
            <h1 className="hero-title">Our Projects</h1>
            <p className="hero-subtitle">
              Transforming rugged terrain into solid foundations with precision and care. <br />Our projects showcase the seamless integration of expertise,<br /> equipment, and exceptional results
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

export default Projects;