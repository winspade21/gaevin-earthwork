import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { assets } from '../../assets/images/assets.js';

const images = [
  { src: assets.demolition, alt: 'Demolition' },
  { src: assets.civil, alt: 'Civil Work' },
  { src: assets.haulage, alt: 'Haulage' },
  { src: assets.earthmoving, alt: 'Earthmoving' },
  { src: assets.transportImg, alt: 'Transport' },
  { src: assets.plantHire, alt: 'Plant Hire' },
];

const Process = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    // Lock body scroll when modal is open
    document.body.style.overflow = modalOpen ? 'hidden' : 'auto';

    // Keyboard navigation
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setModalOpen(false);
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalOpen]);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    trackMouse: true,
  });

  return (
    <section className="section-7 py-5">
      <div className="container">
        <div className="section-header text-center mb-5">
          <span>Our Process</span>
          <h2 className="section-title">How We Work</h2>
          <p className="section-subtitle">
            A visual glimpse into our day-to-day work, equipment in action, and projects in progress.
          </p>
        </div>

        <div className="row g-4">
          {images.map((item, index) => (
            <div className="col-md-4" key={index} data-aos="zoom-in">
              <div
                className="gallery-image rounded overflow-hidden"
                onClick={() => openModal(index)}
                style={{ cursor: 'pointer' }}
              >
                <img src={item.src} alt={item.alt} className="img-fluid w-100" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} {...swipeHandlers}>
            <button className="close-btn" onClick={closeModal}>&times;</button>
            <button className="nav-btn prev" onClick={prevImage}>&lt;</button>
            <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
            <button className="nav-btn next" onClick={nextImage}>&gt;</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Process;
