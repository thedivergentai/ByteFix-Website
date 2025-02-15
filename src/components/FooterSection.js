import React from "react";
import { Link } from 'gatsby';

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/" className="footer-link">Facebook</Link>
        <Link to="/" className="footer-link">Instagram</Link>
        <Link to="/" className="footer-link">WhatsApp</Link>
      </div>
      <p>© {new Date().getFullYear()} ByteFix. All rights reserved.</p>
    </footer>
  );
};

export default FooterSection;
