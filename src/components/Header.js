import React from 'react';
import { Link } from 'gatsby';
import '../styles/global.css';

const Header = () => {
  const handleScroll = (targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="header">
      <nav className="header-nav">
        <Link to="/" className="header-logo">
          💻 ByteFix
        </Link>
        <ul className="header-links">
          <li>
            <Link to="/" className="header-link">Home</Link>
          </li>
          <li>
            <Link to="/#services" className="header-link" onClick={() => handleScroll('services')}>Services</Link>
          </li>
          <li>
            <Link to="/#why-choose-us" className="header-link" onClick={() => handleScroll('why-choose-us')}>Why Choose Us</Link>
          </li>
          <li>
            <Link to="/#testimonials" className="header-link" onClick={() => handleScroll('testimonials')}>Testimonials</Link>
          </li>
          <li>
            <button className="header-button" onClick={() => handleScroll('repair-form')}>
              Request a Repair
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
