import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  ArrowRight,
  Send
} from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Help', path: '/help' }
  ];

  const services = [
    'Web Development',
    'App Development',
    'Digital Marketing',
    'Branding & Design',
    'Maintenance & Support'
  ];

  const socialLinks = [
    { icon: Facebook, link: '#', label: 'Facebook' },
    { icon: Twitter, link: '#', label: 'Twitter' },
    { icon: Instagram, link: '#', label: 'Instagram' },
    { icon: Linkedin, link: '#', label: 'LinkedIn' },
    { icon: Youtube, link: '#', label: 'YouTube' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="footer-section" ref={ref}>
      <div className="footer-wrapper">
        {/* Main Footer Content */}
        <motion.div
          className="footer-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Company Info */}
          <motion.div className="footer-column" variants={itemVariants}>
            <div className="footer-logo">
              <h2>Inno<span className="highlighted-text">qores</span></h2>
            </div>
            <p className="footer-description">
              Building cutting-edge IT solutions for clients. We transform complex problems into scalable, secure, and innovative solutions.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.link}
                    className="social-icon"
                    aria-label={social.label}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconComponent size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="footer-column" variants={itemVariants}>
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link to={link.path}>
                    <ArrowRight size={16} className="link-icon" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div className="footer-column" variants={itemVariants}>
            <h3 className="footer-heading">Our Services</h3>
            <ul className="footer-links">
              {services.map((service, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ArrowRight size={16} className="link-icon" />
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info & Newsletter */}
          <motion.div className="footer-column" variants={itemVariants}>
            <h3 className="footer-heading">Get In Touch</h3>
            <div className="contact-info-list">
              <motion.div 
                className="contact-item"
                whileHover={{ x: 5 }}
              >
                <MapPin size={18} className="contact-icon" />
                <span>Sector 44 near botanical garden, Noida</span>
              </motion.div>
              <motion.div 
                className="contact-item"
                whileHover={{ x: 5 }}
              >
                <Phone size={18} className="contact-icon" />
                <a href="tel:+91 9773036649">+91 9773036649</a>
              </motion.div>
              <motion.div 
                className="contact-item"
                whileHover={{ x: 5 }}
              >
                <Mail size={18} className="contact-icon" />
                <a href="mailto:info@innoqores.com">info@innoqores.com</a>
              </motion.div>
            </div>

            {/* Newsletter */}
            <div className="newsletter">
              <h4>Subscribe Newsletter</h4>
              <form className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="newsletter-input"
                />
                <motion.button 
                  type="submit"
                  className="newsletter-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send size={18} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="footer-bottom-content">
            <p className="copyright">
              &copy; {new Date().getFullYear()} Innoqores. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <Link to="/privacy">Privacy Policy</Link>
              <span className="separator">|</span>
              <Link to="/terms">Terms & Conditions</Link>
              <span className="separator">|</span>
              <Link to="/cookies">Cookie Policy</Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <div className="footer-bg-elements">
        <motion.div 
          className="bg-circle circle-1"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="bg-circle circle-2"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;
