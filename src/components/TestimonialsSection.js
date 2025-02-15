import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-heading">
        What Our Customers Say
      </h2>
      <div className="testimonial-container"> {/* Simple container div */}

        <div className="testimonial-card"> {/* Testimonial 1 */}
          <span className="testimonial-image">
            <FontAwesomeIcon icon={faUser} />
          </span>
          <div className="testimonial-content">
            <p className="testimonial-quote">"ByteFix saved my business! My computer crashed, and they recovered all my data in a matter of hours. Highly recommend!"</p>
            <p className="testimonial-author">- Sarah L., 5 stars</p>
          </div>
        </div>

        <div className="testimonial-card"> {/* Testimonial 2 */}
          <span className="testimonial-image">
            <FontAwesomeIcon icon={faUser} />
          </span>
          <div className="testimonial-content">
            <p className="testimonial-quote">"Excellent service and very knowledgeable technicians. They fixed my phone screen quickly and for a great price."</p>
            <p className="testimonial-author">- Michael K., 5 stars</p>
          </div>
        </div>

        <div className="testimonial-card"> {/* Testimonial 3 */}
          <span className="testimonial-image">
            <FontAwesomeIcon icon={faUser} />
          </span>
          <div className="testimonial-content">
            <p className="testimonial-quote">"I've been a ByteFix customer for years, and they always provide top-notch service. They're my go-to for all my tech needs."</p>
            <p className="testimonial-author">- Emily R., 5 stars</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
