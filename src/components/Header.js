import React from 'react';
import { Link } from 'gatsby';
import '../styles/global.css'; // Import the global styles

const Header = () => {
  return (
    <header style={{ backgroundColor: '#F8F9FA', padding: '1rem 2rem', borderBottom: '1px solid #E9ECEF' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ color: '#0D6EFD', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '1.5rem', textDecoration: 'none' }}>
          💻 ByteFix
        </Link>
        <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
          <li style={{ marginLeft: '1rem' }}>
            <Link to="/" style={{ color: '#212529', textDecoration: 'none' }}>Home</Link>
          </li>
          <li style={{ marginLeft: '1rem' }}>
            <Link to="/#services" style={{ color: '#212529', textDecoration: 'none' }}>Services</Link>
          </li>
          <li style={{ marginLeft: '1rem' }}>
            <Link to="/#why-choose-us" style={{ color: '#212529', textDecoration: 'none' }}>Why Choose Us</Link>
          </li>
          <li style={{ marginLeft: '1rem' }}>
            <Link to="/#testimonials" style={{ color: '#212529', textDecoration: 'none' }}>Testimonials</Link>
          </li>
          <li style={{ marginLeft: '1rem' }}>
            <Link to="/#repair-form" style={{ color: '#212529', textDecoration: 'none' }}>Request a Repair</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
