import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Award, 
  Users, 
  Clock, 
  Shield, 
  TrendingUp, 
  Zap,
  CheckCircle,
  Target,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const reasons = [
    {
      id: 1,
      icon: Award,
      title: 'Industry Expertise',
      description: '10+ years of experience delivering cutting-edge IT solutions across various industries.',
      count: '10+',
      label: 'Projects'
    },
    {
      id: 2,
      icon: Users,
      title: 'Expert Team',
      description: 'Highly skilled professionals dedicated to bringing your vision to life with precision.',
      count: '10+',
      label: 'Experts'
    },
    {
      id: 3,
      icon: Clock,
      title: 'On-Time Delivery',
      description: '98% on-time delivery rate ensuring your projects launch when you need them.',
      count: '98%',
      label: 'On Time'
    },
    {
      id: 4,
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security measures to protect your data and ensure reliability.',
      count: '100%',
      label: 'Secure'
    },
    {
      id: 5,
      icon: TrendingUp,
      title: 'Growth Focused',
      description: 'Solutions designed to scale with your business and drive measurable growth.',
      count: '200%',
      label: 'Growth'
    },
    {
      id: 6,
      icon: Zap,
      title: 'Innovation First',
      description: 'Leveraging latest technologies to keep you ahead of the competition.',
      count: '24/7',
      label: 'Support'
    }
  ];

  const benefits = [
    'Transparent Communication',
    'Flexible Engagement Models',
    'Cost-Effective Solutions',
    'Quality Assurance',
    'Post-Launch Support'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const benefitVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  // Swipe variants for mobile - Pure horizontal only
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      position: 'absolute'
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      position: 'relative'
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      position: 'absolute'
    })
  };

  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentSlide((prev) => {
      const next = prev + newDirection;
      if (next < 0) return reasons.length - 1;
      if (next >= reasons.length) return 0;
      return next;
    });
  };

  return (
    <section className="why-choose-section" ref={ref}>
      <div className="why-choose-wrapper">
        {/* Header */}
        <motion.div
          className="why-choose-header"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="why-choose-title">
            Why Choose <span className="highlighted-text">Innoqores</span>
          </h2>
          <p className="why-choose-subtitle">
            Partner with us for innovative solutions that drive real business results
          </p>
        </motion.div>

        {/* Reasons Grid - Desktop */}
        <motion.div
          className="reasons-grid desktop-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {reasons.map((reason) => {
            const IconComponent = reason.icon;
            return (
              <motion.div
                key={reason.id}
                className="reason-card"
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(233, 176, 0, 0.25)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="reason-icon-wrapper"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <IconComponent className="reason-icon" size={28} strokeWidth={1.5} />
                </motion.div>

                <div className="reason-count">
                  <motion.span 
                    className="count-number"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  >
                    {reason.count}
                  </motion.span>
                  <span className="count-label">{reason.label}</span>
                </div>

                <h3 className="reason-title">{reason.title}</h3>
                <p className="reason-description">{reason.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Swipe Carousel - Mobile */}
        <div className="mobile-carousel">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "tween", duration: 0.3, ease: "easeInOut" },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -1000) {
                  paginate(1);
                } else if (swipe > 1000) {
                  paginate(-1);
                }
              }}
              className="carousel-item"
            >
              {(() => {
                const reason = reasons[currentSlide];
                const IconComponent = reason.icon;
                return (
                  <div className="reason-card mobile-card">
                    <div className="reason-icon-wrapper">
                      <IconComponent className="reason-icon" size={28} strokeWidth={1.5} />
                    </div>

                    <div className="reason-count">
                      <span className="count-number">{reason.count}</span>
                      <span className="count-label">{reason.label}</span>
                    </div>

                    <h3 className="reason-title">{reason.title}</h3>
                    <p className="reason-description">{reason.description}</p>
                  </div>
                );
              })()}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button className="carousel-btn prev" onClick={() => paginate(-1)}>
            <ChevronLeft size={24} />
          </button>
          <button className="carousel-btn next" onClick={() => paginate(1)}>
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="carousel-dots">
            {reasons.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => {
                  setDirection(index > currentSlide ? 1 : -1);
                  setCurrentSlide(index);
                }}
              />
            ))}
          </div>
        </div>

        {/* Additional Benefits Section */}
        <motion.div
          className="benefits-section"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="benefits-content">
            <motion.div
              className="benefits-icon-container"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Target size={80} strokeWidth={1.5} className="benefits-main-icon" />
            </motion.div>

            <div className="benefits-list-container">
              <h3 className="benefits-heading">Additional Benefits</h3>
              <motion.div 
                className="benefits-list"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="benefit-item"
                    variants={benefitVariants}
                    whileHover={{ x: 10, scale: 1.05 }}
                  >
                    <CheckCircle className="benefit-check" size={20} />
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
