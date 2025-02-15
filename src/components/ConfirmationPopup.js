import React from 'react';
import '../styles/global.css';

const ConfirmationPopup = ({ onClose }) => {
  return (
    <div className="confirmation-popup">
      <div className="confirmation-popup-content">
        <h2 className="confirmation-popup-heading">Request Submitted!</h2>
        <p>Your demo repair request has been submitted.</p>
        <button className="form-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPopup;
