import React, { useState } from "react";
import Layout from "../components/Layout";

const IndexPage = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    issue: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission and validation
    console.log("Form submitted:", formValues);
  };

  return (
    <Layout
      formValues={formValues}
      formErrors={formErrors}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default IndexPage
