import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css'; // New CSS file

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const imageVariants = {
    float: {
        y: [0, -10, 0],
        transition: {
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
        }
    }
  }

  return (
    <motion.section
      className="hero-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="hero-content">
        <motion.h1 variants={itemVariants}>
Lets  <br />
          go with <span className="highlighted-text">Innoqores</span>
        </motion.h1>
        <motion.p variants={itemVariants}>
          Building cutting-edge IT solutions for clients. We transform complex problems into scalable, secure, and innovative solutions.
        </motion.p>
        <motion.div className="hero-buttons" variants={itemVariants}>
          <motion.button 
            className="contact-btn"
            whileHover={{ backgroundColor: 'var(--button-hover)', scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
          <motion.a 
            href="#" 
            className="learn-more"
            whileHover={{ x: 5 }}
          >
            Learn More &rarr;
          </motion.a>
        </motion.div>
      </div>
      <motion.div 
        className="hero-image-placeholder"
        variants={imageVariants}
        animate="float"
      >
        {/* You can place your graphic or component here */}
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
