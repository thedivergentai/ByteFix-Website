import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from "motion/react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "ByteFix saved my business! My computer crashed, and they recovered all my data in a matter of hours. Highly recommend!",
      author: "Sarah L., ⭐⭐⭐⭐⭐"
    },
    {
      quote: "Excellent service and very knowledgeable technicians. They fixed my phone screen quickly and for a great price.",
      author: "Michael K., ⭐⭐⭐⭐⭐"
    },
    {
      quote: "I've been a ByteFix customer for years, and they always provide top-notch service. They're my go-to for all my tech needs.",
      author: "Emily R., ⭐⭐⭐⭐⭐"
    }
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState(1); // 1 for right, -1 for left
  const containerRef = useRef(null);
  const [isLeftChevronHovered, setIsLeftChevronHovered] = useState(false);
  const [isRightChevronHovered, setIsRightChevronHovered] = useState(false);

  const goToPreviousTestimonial = () => {
    setAnimationDirection(-1);
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNextTestimonial = () => {
    setAnimationDirection(1);
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isLeftChevronHovered && !isRightChevronHovered) {
        goToNextTestimonial();
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [isLeftChevronHovered, isRightChevronHovered]);

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-heading">
        What Our Customers Say
      </h2>
      <div className="testimonials-carousel-container">
        <button
          className="testimonial-nav-button testimonial-nav-left"
          onClick={goToPreviousTestimonial}
          onMouseEnter={() => setIsLeftChevronHovered(true)}
          onMouseLeave={() => setIsLeftChevronHovered(false)}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <div className="testimonial-container" ref={containerRef}>
          <motion.div
            key={currentTestimonialIndex}
            initial={{ opacity: 0, x: 200 * animationDirection }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 * animationDirection }}
            transition={{ duration: 0.5 }}
            className="testimonial-card"
          >
            <span className="testimonial-image" style={{ minHeight: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <FontAwesomeIcon icon={faUser} style={{fontSize: '5rem'}} />
            </span>
            <div className="testimonial-content">
              <p className="testimonial-quote">"{testimonials[currentTestimonialIndex].quote}"</p>
              <p className="testimonial-author">- {testimonials[currentTestimonialIndex].author}</p>
            </div>
          </motion.div>
        </div>

        <button
          className="testimonial-nav-button testimonial-nav-right"
          onClick={goToNextTestimonial}
          onMouseEnter={() => setIsRightChevronHovered(true)}
          onMouseLeave={() => setIsRightChevronHovered(false)}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
