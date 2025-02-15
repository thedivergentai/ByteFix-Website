import React, { useState, useEffect, useRef } from "react";

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
      <div style={{ position: 'relative', overflow: 'hidden', maxWidth: '800px', margin: '0 auto' }}>
        <div
          className="testimonial-carousel"
          ref={carouselRef}
          style={{
            display: 'flex',
            transition: 'transform 0.5s ease-in-out',
            transform: `translateX(-${currentTestimonial * 100}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card"
              style={{
                flexShrink: 0,
                width: '100%',
                padding: '1.5rem',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
              }}
            >
            <span style={{ fontSize: '4rem', marginRight: '2rem' }}>👤</span> {/* Placeholder Image */}
              <div>
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <p className="testimonial-author">- {testimonial.author}, {testimonial.rating} stars</p>
              </div>
            </div>
          ))}
        </div>
          <button
            style={{ position: 'absolute', top: '50%', left: '0', transform: 'translateY(-50%)', background: 'none', border: 'none', fontSize: '2rem', cursor: 'pointer' }}
            onClick={prevTestimonial}
          >
            &lt;
          </button>
          <button
            style={{ position: 'absolute', top: '50%', right: '0', transform: 'translateY(-50%)', background: 'none', border: 'none', fontSize: '2rem', cursor: 'pointer' }}
            onClick={nextTestimonial}
          >
            &gt;
          </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
