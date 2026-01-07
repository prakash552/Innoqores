import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Smartphone, TrendingUp, Palette, Settings } from 'lucide-react';
import './Services.css';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const servicesData = [
    {
      id: 1,
      icon: Globe,
      title: 'Web Development',
      description: 'Custom, responsive websites built with cutting-edge technologies. From concept to deployment, we create scalable web solutions.',
      features: ['React & Next.js', 'E-commerce Solutions', 'CMS Integration']
    },
    {
      id: 2,
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications that deliver seamless user experiences on iOS and Android.',
      features: ['iOS & Android', 'React Native', 'UI/UX Design']
    },
    {
      id: 3,
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies to boost your online presence and drive measurable business growth.',
      features: ['SEO & SEM', 'Social Media', 'Content Strategy']
    },
    {
      id: 4,
      icon: Palette,
      title: 'Branding & Design',
      description: 'Create a lasting impression with unique brand identities that resonate with your target audience.',
      features: ['Logo Design', 'Brand Strategy', 'Visual Identity']
    },
    {
      id: 5,
      icon: Settings,
      title: 'Maintenance & Support',
      description: '24/7 technical support and maintenance services to keep your digital assets running smoothly.',
      features: ['24/7 Support', 'Updates & Security', 'Performance Optimization']
    }
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="services-section" ref={ref}>
      <div className="services-wrapper">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="services-title">
            Our <span className="highlighted-text">Services</span>
          </h2>
          <p className="services-subtitle">
            Comprehensive IT solutions tailored to elevate your business to new heights
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                className="service-card"
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 50px rgba(233, 176, 0, 0.25)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="service-icon"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <IconComponent size={40} strokeWidth={1.5} />
                </motion.div>
                
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <div className="service-features">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>

                <motion.button 
                  className="learn-more-btn"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Learn More →
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
