import React, { useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import RepairRequestFormSection from "../components/RepairRequestFormSection";
import FooterSection from "../components/FooterSection";
import '../styles/global.css';

const IndexPage = () => {
  const [formValues, setFormValues] = useState({ name: '', email: '', issue: '' });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      alert("Demo form submitted!");
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = "Invalid email format";
    }
    if (!values.issue) {
      errors.issue = "Device issue is required";
    }
    return errors;
  };

  return (
    <div>
      <Header />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <RepairRequestFormSection
        formValues={formValues}
        formErrors={formErrors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        validate={validate}
      />
      <FooterSection />
    </div>
  );
}

export default IndexPage
