import React from 'react';
import { Link } from 'gatsby';
import '../styles/global.css'; // Import the global styles

const Header = () => {
  return (
    <header className="header">
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
            <Link to="/#repair-form" style={{ color: '#212529', textDecoration: 'none' }}>
              <button style={{ color: '#fff', background: '#0D6EFD', border: 'none', padding: '0.5rem 1rem', cursor: 'pointer', borderRadius: '5px' }}>Request a Repair</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
