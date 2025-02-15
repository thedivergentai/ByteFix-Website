import React from "react";
import { motion, animate } from "motion/react";

const HeroSection = () => {
  const buttonVariants = {
    hover: {
      scale: 1.1,
      borderColor: "#63A4FF",
      transition: {
        duration: 0.3,
      },
    },
    tap: { scale: 0.9 },
  };

  const buttonAnimation = {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      yoyo: Infinity,
      ease: "easeInOut",
    },
  };

  const scrollToRepairForm = () => {
    const repairFormSection = document.getElementById('repair-form');
    if (repairFormSection) {
      repairFormSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        onClick={() => {
          const repairFormSection = document.getElementById('repair-form');
          if (repairFormSection) {
            repairFormSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        animate={ buttonAnimation }
      >
        Request a Repair
      </motion.button>
    </section>
  );
};

export default HeroSection;
