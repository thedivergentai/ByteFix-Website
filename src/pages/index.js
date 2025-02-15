import * as React from "react"
import { motion } from "motion/react"
import Header from "../components/Header"
import '../styles/global.css';
import { useState, useEffect, useRef } from 'react';

const IndexPage = () => {
  const scrollToRepairForm = () => {
    const repairFormSection = document.getElementById('repair-form');
    if (repairFormSection) {
      repairFormSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const testimonials = [
    { quote: "Great service! They fixed my laptop quickly and efficiently.", author: "John Doe", rating: 5 },
    { quote: "I was impressed with their professionalism and expertise.", author: "Jane Smith", rating: 5 },
    { quote: "Highly recommend ByteFix for all your tech repair needs!", author: "Peter Jones", rating: 5 },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(intervalId);
  }, [testimonials.length]);

  const [formValues, setFormValues] = useState({ name: '', email: '', issue: '' });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      alert("Form submitted successfully!"); // Placeholder for actual submission
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = "Invalid email format";
    }
    if (!values.issue) {
      errors.issue = "Device issue is required";
    }
    return errors;
  };

  return (
    <div >
      <Header />
      {/* Hero Section */}
      <section className="hero-section">
        <motion.h1
          className="hero-heading"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
        >
          ByteFix
        </motion.h1>
        <motion.p
          className="hero-subheading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.7, delay: 0.2 } }}
        >
          🖼️ Get Your Devices Fixed—Fast & Hassle-Free. Reliable tech solutions, simplified.
        </motion.p>
        <motion.button
          className="hero-button"
          whileHover={{ scale: 1.05 }}
          onClick={scrollToRepairForm}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.4 } }}
        >
          Request a Repair
        </motion.button>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2 className="services-heading">
          Our Services
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {/* Service Card 1 */}
          <motion.div
            className="service-card"
            whileHover={{ scale: 1.05, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}
          >
            <p className="service-icon">💻</p> {/* Placeholder Icon */}
            <h3 className="service-title">Laptop Repair</h3>
            <p className="service-description">🖼️ Fast and reliable laptop repair services.</p>
          </motion.div>
          {/* Service Card 2 */}
          <motion.div
            className="service-card"
            whileHover={{ scale: 1.05, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}
          >
            <p className="service-icon">🦠</p> {/* Placeholder Icon */}
            <h3 className="service-title">Virus Removal</h3>
            <p className="service-description">🖼️ Protect your computer from viruses and malware.</p>
          </motion.div>
          {/* Service Card 3 */}
          <motion.div
            className="service-card"
            whileHover={{ scale: 1.05, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}
          >
            <p className="service-icon">💾</p> {/* Placeholder Icon */}
            <h3 className="service-title">Data Recovery</h3>
            <p className="service-description">🖼️ Recover lost data from damaged devices.</p>
          </motion.div>
          {/* Service Card 4 */}
          <motion.div
            className="service-card"
            whileHover={{ scale: 1.05, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}
          >
            <p className="service-icon">⚙️</p> {/* Placeholder Icon */}
            <h3 className="service-title">Hardware Upgrades</h3>
            <p className="service-description">🖼️ Upgrade your computer hardware for better performance.</p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us? Section */}
      <section className="why-choose-us-section">
        <h2 className="why-choose-us-heading">
          Why Choose Us?
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {/* Benefit 1 */}
          <div className="why-choose-us-benefit">
            <h3 className="why-choose-us-title">Quick Turnaround</h3>
            <p className="why-choose-us-description">🖼️ Get your device back in working order fast.</p>
          </div>
          {/* Benefit 2 */}
          <div className="why-choose-us-benefit">
            <h3 className="why-choose-us-title">Affordable Pricing</h3>
            <p className="why-choose-us-description">🖼️ High-quality repairs at competitive prices.</p>
          </div>
          {/* Benefit 3 */}
          <div className="why-choose-us-benefit">
            <h3 className="why-choose-us-title">Certified Technicians</h3>
            <p className="why-choose-us-description">🖼️ Trust our skilled and certified technicians.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2 className="testimonials-heading">
          What Our Customers Say
        </h2>
        <div className="testimonial-carousel" ref={carouselRef} style={{ overflowX: 'auto', whiteSpace: 'nowrap', scrollSnapType: 'x mandatory', paddingBottom: '1rem' }}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card"
              style={{ display: 'inline-block', width: '80%', minWidth: '300px', scrollSnapAlign: 'start', margin: '0 1rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '3rem', marginRight: '1rem' }}>👤</span> {/* Placeholder Image */}
                <div>
                  <p className="testimonial-quote">"{testimonial.quote}"</p>
                  <p className="testimonial-author">- {testimonial.author}, {testimonial.rating} stars</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Repair Request Form Section */}
      <section id="repair-form" className="repair-request-section">
        <h2 className="repair-request-heading">
          Request a Repair
        </h2>
        <form className="repair-request-form" onSubmit={handleSubmit}>
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            value={formValues.name}
            onChange={handleChange}
          />
          {formErrors.name && <p className="form-validation-message">{formErrors.name}</p>}

          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            value={formValues.email}
            onChange={handleChange}
          />
          {formErrors.email && <p className="form-validation-message">{formErrors.email}</p>}

          <label htmlFor="issue" className="form-label">Device Issue:</label>
          <textarea
            id="issue"
            name="issue"
            rows="4"
            className="form-textarea"
            value={formValues.issue}
            onChange={handleChange}
          ></textarea>
          {formErrors.issue && <p className="form-validation-message">{formErrors.issue}</p>}

          <button type="submit" className="form-button">
            Submit Request
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} ByteFix. All rights reserved.</p>
        {/* Placeholder for social media links and WhatsApp link */}
      </footer>
    </div>
  )
}

export default IndexPage
