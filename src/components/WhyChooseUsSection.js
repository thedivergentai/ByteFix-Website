import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMoneyBill, faUserShield } from '@fortawesome/free-solid-svg-icons';

const WhyChooseUsSection = () => {
  return (
    <section className="why-choose-us-section">
      <h2 className="why-choose-us-heading">
        Why Choose Us?
      </h2>
      <div className="why-choose-us-grid">
        {/* Benefit 1 */}
        <div className="why-choose-us-benefit">
          <h3 className="why-choose-us-title"><FontAwesomeIcon icon={faClock} /> Quick Turnaround</h3>
          <p className="why-choose-us-description">We understand the importance of getting your devices back to you quickly. We offer fast and efficient repair services to minimize downtime.</p>
        </div>
        {/* Benefit 2 */}
        <div className="why-choose-us-benefit">
          <h3 className="why-choose-us-title"><FontAwesomeIcon icon={faMoneyBill} /> Affordable Pricing</h3>
          <p className="why-choose-us-description">We believe that quality tech support shouldn't break the bank. We offer competitive pricing and transparent quotes.</p>
        </div>
        {/* Benefit 3 */}
        <div className="why-choose-us-benefit">
          <h3 className="why-choose-us-title"><FontAwesomeIcon icon={faUserShield} /> Certified Technicians</h3>
          <p className="why-choose-us-description">Our team of certified technicians has the expertise and experience to handle any tech issue. You can trust us to get the job done right.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
