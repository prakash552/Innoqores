import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Stats.css';

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const statsData = [
    {
      id: 1,
      number: '500+',
      label: 'Projects Completed',
      direction: 'left'
    },
    {
      id: 2,
      number: '100+',
      label: 'Happy Clients',
      direction: 'right'
    },
    {
      id: 3,
      number: '50+',
      label: 'Team Members',
      direction: 'left'
    },
    {
      id: 4,
      number: '10+',
      label: 'Years Experience',
      direction: 'right'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="stats-section" ref={ref}>
      <motion.div
        className="stats-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 
          className="stats-title"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
        >
          Our <span className="highlighted-text">Achievements</span>
        </motion.h2>
        
        <div className="stats-grid">
          {statsData.map((stat) => (
            <motion.div
              key={stat.id}
              className="stat-card"
              variants={stat.direction === 'left' ? leftVariants : rightVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 40px rgba(233, 176, 0, 0.2)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Stats;
