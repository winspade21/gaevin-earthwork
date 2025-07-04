import React from 'react';
import { faqData} from '../../assets/images/assets.js';


const FrequentAsk = () => {
  return (
    <>
    <section className="faq-hero position-relative">
        <div className="hero-overlay d-flex flex-column justify-content-center align-items-center text-center">
          <div className="container">
            <h1 className="hero-title">Frequently Ask Questions</h1>
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
    <section className="faq-section">
      <div className="container">
        <div className="accordion" id="faqAccordion">
          {faqData.map((item, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded={index === 0 ? 'true' : 'false'}
                  aria-controls={`collapse${index}`}
                >
                  {item.question}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                aria-labelledby={`heading${index}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default FrequentAsk