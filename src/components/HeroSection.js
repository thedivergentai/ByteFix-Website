import React from "react";
import { motion } from "motion/react";

const HeroSection = ({ scrollToRepairForm }) => {
  return (
    <section className="hero-section">
      <motion.h1
        className="hero-heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
      >
        ByteFix
      </motion.h1>
      <motion.p
        className="hero-subheading"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.7, delay: 0.2 } }}
      >
        🖼️ Get Your Devices Fixed—Fast & Hassle-Free. Reliable tech solutions, simplified.
      </motion.p>
      <motion.button
        className="hero-button"
        whileHover={{ scale: 1.05 }}
        onClick={scrollToRepairForm}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.4 } }}
      >
        Request a Repair
      </motion.button>
    </section>
  );
};

export default HeroSection;
