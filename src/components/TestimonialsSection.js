import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faUser } from '@fortawesome/free-solid-svg-icons';

const TestimonialsSection = () => {
  const testimonials = [
    { quote: "ByteFix saved my business! My computer crashed, and they recovered all my data in a matter of hours. Highly recommend!", author: "Sarah L.", rating: 5 },
    { quote: "Excellent service and very knowledgeable technicians. They fixed my phone screen quickly and for a great price.", author: "Michael K.", rating: 5 },
    { quote: "I've been a ByteFix customer for years, and they always provide top-notch service. They're my go-to for all my tech needs.", author: "Emily R.", rating: 5 },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-heading">
        What Our Customers Say
      </h2>
      <div className="testimonial-carousel-container">
        <div
          className="testimonial-carousel"
          ref={carouselRef}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card"
            >
              <span className="testimonial-image">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <div>
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <p className="testimonial-author">- {testimonial.author}, {testimonial.rating} stars</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="testimonial-button testimonial-button-prev"
          onClick={prevTestimonial}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          className="testimonial-button testimonial-button-next"
          onClick={nextTestimonial}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
