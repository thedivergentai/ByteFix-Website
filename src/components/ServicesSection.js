import React from "react";
import { motion } from "motion/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faVirus, faDatabase, faCog } from '@fortawesome/free-solid-svg-icons';

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="services-content">
        <h2 className="services-heading">
          Our Services
        </h2>
        <div className="services-grid">
          {/* Service Card 1 */}
          <motion.div
            className="service-card"
            whileHover={{ scale: 1.05, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}
          >
            <p className="service-icon"><FontAwesomeIcon icon={faLaptop} /></p>
            <h3 className="service-title">Laptop Repair</h3>
            <p className="service-description">Expert laptop repair services for all brands and models. We diagnose and fix hardware and software issues quickly and reliably.</p>
          </motion.div>
          {/* Service Card 2 */}
          <motion.div
            className="service-card"
            whileHover={{ scale: 1.05, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}
          >
            <p className="service-icon"><FontAwesomeIcon icon={faVirus} /></p>
            <h3 className="service-title">Virus Removal</h3>
            <p className="service-description">Comprehensive virus and malware removal to protect your computer and data. We use the latest tools and techniques to ensure your system is secure.</p>
          </motion.div>
          {/* Service Card 3 */}
          <motion.div
            className="service-card"
            whileHover={{ scale: 1.05, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}
          >
            <p className="service-icon"><FontAwesomeIcon icon={faDatabase} /></p>
            <h3 className="service-title">Data Recovery</h3>
            <p className="service-description">Professional data recovery services to retrieve lost files from damaged or corrupted storage devices. We have a high success rate and offer confidential service.</p>
          </motion.div>
          {/* Service Card 4 */}
          <motion.div
            className="service-card"
            whileHover={{ scale: 1.05, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}
          >
            <p className="service-icon"><FontAwesomeIcon icon={faCog} /></p>
            <h3 className="service-title">Hardware Upgrades</h3>
            <p className="service-description">Upgrade your computer hardware for improved performance and efficiency. We offer a wide range of upgrades, including RAM, storage, and graphics cards.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
