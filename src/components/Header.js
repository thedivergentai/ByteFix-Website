import React from 'react';
import { Link } from 'gatsby';
import '../styles/global.css';

const Header = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
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
            <a href="/" className="header-link">Home</a>
          </li>
          <li>
            <a href="/#services" onClick={(e) => handleScroll(e, 'services')} className="header-link">Services</a>
          </li>
          <li>
            <a href="/#why-choose-us" onClick={(e) => handleScroll(e, 'why-choose-us')} className="header-link">Why Choose Us</a>
          </li>
          <li>
            <a href="/#testimonials" onClick={(e) => handleScroll(e, 'testimonials')} className="header-link">Testimonials</a>
          </li>
          <li>
            <button className="header-button" onClick={(e) => handleScroll(e, 'repair-form')}>
              Request a Repair
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
