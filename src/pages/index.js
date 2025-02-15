import * as React from "react"

const IndexPage = () => {
  return (
    <div style={{ fontFamily: 'Roboto, sans-serif', color: '#212529' }}>
      {/* Hero Section */}
      <section style={{ backgroundColor: '#F8F9FA', padding: '4rem 2rem', textAlign: 'center' }}>
        <h1 style={{ color: '#0D6EFD', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '3rem', marginBottom: '1rem' }}>
          ByteFix
        </h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '2rem' }}>
          Get Your Devices Fixed—Fast & Hassle-Free. Reliable tech solutions, simplified.
        </p>
        <button style={{ backgroundColor: '#0D6EFD', color: '#fff', padding: '1rem 2rem', borderRadius: '4px', border: 'none', cursor: 'pointer', fontSize: '1.1rem' }}>
          Request a Repair
        </button>
      </section>

      {/* Services Section */}
      <section style={{ padding: '3rem 2rem' }}>
        <h2 style={{ color: '#0D6EFD', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '2rem', textAlign: 'center', marginBottom: '2rem' }}>
          Our Services
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {/* Service Card 1 */}
          <div style={{ border: '1px solid #E9ECEF', borderRadius: '8px', padding: '1.5rem', textAlign: 'center' }}>
            <p style={{ fontSize: '2rem', marginBottom: '1rem' }}>💻</p> {/* Placeholder Icon */}
            <h3 style={{ color: '#0D6EFD', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Laptop Repair</h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>Placeholder service description.  Focus on benefits like speed and reliability.</p>
          </div>
          {/* Service Card 2 */}
          <div style={{ border: '1px solid #E9ECEF', borderRadius: '8px', padding: '1.5rem', textAlign: 'center' }}>
            <p style={{ fontSize: '2rem', marginBottom: '1rem' }}>🦠</p> {/* Placeholder Icon */}
            <h3 style={{ color: '#0D6EFD', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Virus Removal</h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>Placeholder service description. Focus on benefits like security and peace of mind.</p>
          </div>
          {/* Service Card 3 */}
          <div style={{ border: '1px solid #E9ECEF', borderRadius: '8px', padding: '1.5rem', textAlign: 'center' }}>
            <p style={{ fontSize: '2rem', marginBottom: '1rem' }}>💾</p> {/* Placeholder Icon */}
            <h3 style={{ color: '#0D6EFD', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Data Recovery</h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>Placeholder service description. Focus on benefits like data safety and recovery.</p>
          </div>
          {/* Service Card 4 */}
          <div style={{ border: '1px solid #E9ECEF', borderRadius: '8px', padding: '1.5rem', textAlign: 'center' }}>
            <p style={{ fontSize: '2rem', marginBottom: '1rem' }}>⚙️</p> {/* Placeholder Icon */}
            <h3 style={{ color: '#0D6EFD', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Hardware Upgrades</h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>Placeholder service description. Focus on benefits like performance and efficiency.</p>
          </div>
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

      {/* Repair Request Form Section (Placeholder) */}
      <section style={{ backgroundColor: '#F8F9FA', padding: '3rem 2rem', textAlign: 'center' }}>
        <h2 style={{ color: '#0D6EFD', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '2rem', marginBottom: '2rem' }}>
          Request a Repair
        </h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1rem' }}>
          Placeholder for a repair request form.  Include fields for name, device issue, and contact details.
        </p>
        <button style={{ backgroundColor: '#0D6EFD', color: '#fff', padding: '1rem 2rem', borderRadius: '4px', border: 'none', cursor: 'pointer', fontSize: '1.1rem' }}>
          Contact Us
        </button>
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
