import React, { useState } from "react";
import ConfirmationPopup from "./ConfirmationPopup";

const RepairRequestFormSection = ({ formValues, formErrors, handleChange, handleSubmit }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleFormSubmit = (e) => {
    handleSubmit(e);
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <section id="repair-form" className="repair-request-section">
      <div className="repair-request-content">
        <h2 className="repair-request-heading">
          Request a Repair
        </h2>
        <form className="repair-request-form" onSubmit={handleFormSubmit}>
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            value={formValues.name}
            onChange={handleChange}
          />
          {formErrors.name && <p className="form-validation-message">{formErrors.name}</p>}

          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            value={formValues.email}
            onChange={handleChange}
          />
          {formErrors.email && <p className="form-validation-message">{formErrors.email}</p>}

          <label htmlFor="issue" className="form-label">Device Issue:</label>
          <textarea
            type="text"
            id="issue"
            name="issue"
            rows="4"
            className="form-textarea"
            value={formValues.issue}
            onChange={handleChange}
          />
          {formErrors.issue && <p className="form-validation-message">{formErrors.issue}</p>}

          <button type="submit" className="form-button">
            Submit Request
          </button>
        </form>
        {isPopupVisible && <ConfirmationPopup onClose={handleClosePopup} />}
      </div>
    </section>
  );
};

export default RepairRequestFormSection;
