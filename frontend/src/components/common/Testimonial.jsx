import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { testimonials } from '../../assets/images/assets';


const Testimonial = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="section-5 py-5">
      <div className="container-fluid testimonial-container">
        <div className="section-header text-center mb-5" data-aos="fade-up">
          <span>Testimonials</span>
          <h3 className="section-title">Real Feedback. Real Satisfaction</h3>
          <p>
            Client feedback has played a vital role in enhancing our services <br />
            and delivering consistent customer satisfaction.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 3000 }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
          className="testimonial-slider"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card" data-aos="zoom-in">
                  <div className="testimonial-img">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <p className="testimonial-content">“{item.content}”</p>
                  <div className="testimonial-author">
                    <h5 className="name">— {item.name}</h5>
                    <p className="position">{item.position}</p>
                  </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;