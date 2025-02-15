import * as React from "react"
import { motion } from "motion/react"

const IndexPage = () => {
  const scrollToRepairForm = () => {
    const repairFormSection = document.getElementById('repair-form');
    if (repairFormSection) {
      repairFormSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ fontFamily: 'Roboto, sans-serif', color: '#212529' }}>
      {/* Hero Section */}
      <section style={{ backgroundColor: '#F8F9FA', padding: '4rem 2rem', textAlign: 'center' }}>
        <motion.h1
          style={{ color: '#0D6EFD', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '3rem', marginBottom: '1rem' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
        >
          ByteFix
        </motion.h1>
        <motion.p
          style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '2rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.7, delay: 0.2 } }}
        >
          Get Your Devices Fixed—Fast & Hassle-Free. Reliable tech solutions, simplified.
        </motion.p>
        <motion.button
          style={{ backgroundColor: '#0D6EFD', color: '#fff', padding: '1rem 2rem', borderRadius: '4px', border: 'none', cursor: 'pointer', fontSize: '1.1rem' }}
          whileHover={{ scale: 1.05 }}
          onClick={scrollToRepairForm}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.4 } }}
        >
          Request a Repair
        </motion.button>
      </section>

      {/* Services Section */}
      <section style={{ padding: '3rem 2rem' }}>
        <h2 style={{ color: '#0D6EFD', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '2rem', textAlign: 'center', marginBottom: '2rem' }}>
          Our Services
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {/* Service Card 1 */}
          <motion.div
            style={{ border: '1px solid #E9ECEF', borderRadius: '8px', padding: '1.5rem', textAlign: 'center' }}
            whileHover={{ scale: 1.05, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}
          >
            <p style={{ fontSize: '2rem', marginBottom: '1rem' }}>💻</p> {/* Placeholder Icon */}
            <h3 style={{ color: '#0D6EFD', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Laptop Repair</h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>Placeholder service description.  Focus on benefits like speed and reliability.</p>
          </motion.div>
          {/* Service Card 2 */}
          <motion.div
            style={{ border: '1px solid #E9ECEF', borderRadius: '8px', padding: '1.5rem', textAlign: 'center' }}
            whileHover={{ scale: 1.05, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}
          >
            <p style={{ fontSize: '2rem', marginBottom: '1rem' }}>🦠</p> {/* Placeholder Icon */}
            <h3 style={{ color: '#0D6EFD', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Virus Removal</h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>Placeholder service description. Focus on benefits like security and peace of mind.</p>
          </motion.div>
          {/* Service Card 3 */}
          <motion.div
            style={{ border: '1px solid #E9ECEF', borderRadius: '8px', padding: '1.5rem', textAlign: 'center' }}
            whileHover={{ scale: 1.05, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}
          >
            <p style={{ fontSize: '2rem', marginBottom: '1rem' }}>💾</p> {/* Placeholder Icon */}
            <h3 style={{ color: '#0D6EFD', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Data Recovery</h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>Placeholder service description. Focus on benefits like data safety and recovery.</p>
          </motion.div>
          {/* Service Card 4 */}
          <motion.div
            style={{ border: '1px solid #E9ECEF', borderRadius: '8px', padding: '1.5rem', textAlign: 'center' }}
            whileHover={{ scale: 1.05, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}
          >
            <p style={{ fontSize: '2rem', marginBottom: '1rem' }}>⚙️</p> {/* Placeholder Icon */}
            <h3 style={{ color: '#0D6EFD', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Hardware Upgrades</h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>Placeholder service description. Focus on benefits like performance and efficiency.</p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us? Section */}
      <section style={{ backgroundColor: '#F8F9FA', padding: '3rem 2rem', textAlign: 'center' }}>
        <h2 style={{ color: '#0D6EFD', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '2rem', marginBottom: '2rem' }}>
          Why Choose Us?
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {/* Benefit 1 */}
          <div>
            <h3 style={{ color: '#0D6EFD', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Quick Turnaround</h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>Placeholder benefit description. Emphasize speed and efficiency.</p>
          </div>
          {/* Benefit 2 */}
          <div>
            <h3 style={{ color: '#0D6EFD', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Affordable Pricing</h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>Placeholder benefit description. Emphasize value and cost-effectiveness.</p>
          </div>
          {/* Benefit 3 */}
          <div>
            <h3 style={{ color: '#0D6EFD', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Certified Technicians</h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>Placeholder benefit description. Emphasize expertise and reliability.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ padding: '3rem 2rem', textAlign: 'center' }}>
        <h2 style={{ color: '#0D6EFD', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '2rem', marginBottom: '2rem' }}>
          What Our Customers Say
        </h2>
        {/* Placeholder Testimonial */}
        <div style={{ border: '1px solid #E9ECEF', borderRadius: '8px', padding: '1.5rem', marginBottom: '1.5rem' }}>
          <p style={{ fontSize: '1.1rem', fontStyle: 'italic', lineHeight: '1.6', marginBottom: '1rem' }}>"Placeholder testimonial quote. Emphasize speed, reliability, and helpfulness."</p>
          <p style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>- Customer Name, Star Rating</p>
        </div>
      </section>

      {/* Repair Request Form Section */}
      <section id="repair-form" style={{ backgroundColor: '#F8F9FA', padding: '3rem 2rem', textAlign: 'center' }}>
        <h2 style={{ color: '#0D6EFD', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '2rem', marginBottom: '2rem' }}>
          Request a Repair
        </h2>
        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '400px', margin: '0 auto' }}>
          <label htmlFor="name" style={{ marginBottom: '0.5rem', fontWeight: 'bold', textAlign: 'left', width: '100%' }}>Name:</label>
          <input type="text" id="name" name="name" style={{ padding: '0.75rem', marginBottom: '1rem', border: '1px solid #ccc', borderRadius: '4px', width: '100%' }} />

          <label htmlFor="email" style={{ marginBottom: '0.5rem', fontWeight: 'bold', textAlign: 'left', width: '100%' }}>Email:</label>
          <input type="email" id="email" name="email" style={{ padding: '0.75rem', marginBottom: '1rem', border: '1px solid #ccc', borderRadius: '4px', width: '100%' }} />

          <label htmlFor="issue" style={{ marginBottom: '0.5rem', fontWeight: 'bold', textAlign: 'left', width: '100%' }}>Device Issue:</label>
          <textarea id="issue" name="issue" rows="4" style={{ padding: '0.75rem', marginBottom: '1rem', border: '1px solid #ccc', borderRadius: '4px', width: '100%' }}></textarea>

          <button type="submit" style={{ backgroundColor: '#0D6EFD', color: '#fff', padding: '1rem 2rem', borderRadius: '4px', border: 'none', cursor: 'pointer', fontSize: '1.1rem' }}>
            Submit Request
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer style={{ padding: '2rem', textAlign: 'center', fontSize: '0.9rem', color: '#6c757d' }}>
        <p>© {new Date().getFullYear()} ByteFix. All rights reserved.</p>
        {/* Placeholder for social media links and WhatsApp link */}
      </footer>
    </div>
  )
}

export default IndexPage
