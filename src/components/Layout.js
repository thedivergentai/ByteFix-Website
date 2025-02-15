import React from "react";
import Header from "./Header";
import FooterSection from "./FooterSection";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import TestimonialsSection from "./TestimonialsSection";
import RepairRequestFormSection from "./RepairRequestFormSection";
import '../styles/global.css';

const Layout = () => {

  return (
    <div className="layout-container">
      <Header />
      <main className="layout-content">
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <RepairRequestFormSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Layout;
