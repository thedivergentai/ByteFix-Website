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
        <div className="header-logo-container">
          <Link to="/" className="header-logo">
            💻 ByteFix
          </Link>
        </div>
        <div className="header-links-container">
          <ul className="header-links">
            <li>
              <button className="header-button" onClick={() => handleScroll('repair-form')}>
                Request a Repair
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
