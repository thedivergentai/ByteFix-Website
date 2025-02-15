import React from "react";
import Header from "./Header";
import FooterSection from "./FooterSection";
import '../styles/global.css';

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <main className="layout-content">
        {children}
      </main>
      <FooterSection />
    </div>
  );
};

export default Layout;
