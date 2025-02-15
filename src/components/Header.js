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
            <a href="#services" onClick={() => handleScroll('services')} className="header-link">Services</a>
          </li>
          <li>
            <a href="#why-choose-us" onClick={() => handleScroll('why-choose-us')} className="header-link">Why Choose Us</a>
          </li>
          <li>
            <a href="#testimonials" onClick={() => handleScroll('testimonials')} className="header-link">Testimonials</a>
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
