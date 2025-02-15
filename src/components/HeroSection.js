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
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const heroButtonVariants = {
    ...buttonVariants,
    initial: { opacity: 0 },
    fadeIn: {
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 0.4,
        onComplete: () => {
          setButtonAnimationState('loop');
        }
      }
    },
    loop: {
      ...buttonAnimation,
      opacity: 1,
    }
  };

  const [buttonAnimationState, setButtonAnimationState] = React.useState('fadeIn');

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
        Reliable Tech Solutions, Simplified.
      </motion.p>
      <motion.button
        className="hero-button"
        whileHover="hover"
        whileTap="tap"
        initial="initial" // Start with the 'initial' variant (opacity: 0)
        animate={buttonAnimationState} // Control animation with state
        variants={heroButtonVariants} // Apply the animation variants
        onClick={scrollToRepairForm}
      >
        Request a Repair
      </motion.button>
    </section>
  );
};

export default HeroSection;
