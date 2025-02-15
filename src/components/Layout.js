import React from "react";
import Header from "./Header";
import FooterSection from "./FooterSection";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import TestimonialsSection from "./TestimonialsSection";
import RepairRequestFormSection from "./RepairRequestFormSection";
import '../styles/global.css';

const Layout = ({ formValues, formErrors, handleChange, handleSubmit }) => {

  return (
    <div className="layout-container">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <RepairRequestFormSection
          formValues={formValues}
          formErrors={formErrors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </main>
      <FooterSection />
    </div>
  );
};

export default Layout;
