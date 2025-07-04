import React from 'react'

const Blogs = () => {
  return (
    <>
    <section className="blog-hero position-relative">
        <div className="hero-overlay d-flex flex-column justify-content-center align-items-center text-center">
          <div className="container">
            <h1 className="hero-title">Articles & Blog</h1>
            <p className="hero-subtitle">
            Our construction services cover residential, commercial, <br />and industrial sectors with precision and reliability.
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

export default Blogs;