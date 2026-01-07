import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react'; // Lucide React Icons (npm install lucide-react)
import './TopBar.css'; // स्टाइलिंग के लिए CSS फ़ाइल

const TopBar = () => {
  return (
    <motion.div
      className="top-bar-container"
      initial={{ y: -50, opacity: 0 }} // शुरुआत में छिपा हुआ
      animate={{ y: 0, opacity: 1 }}    // लोड होने पर नीचे स्लाइड और फ़ेड इन
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }} // थोड़ी देरी ताकि Navbar बाद में आए
    >
      <div className="top-bar-content">
        <div className="contact-info">
          <Phone size={14} className="icon" />
          <span>+91-9773036649</span> 
        </div>
        <div className="contact-info">
          <Mail size={14} className="icon" />
          <span>innoqores@gmail.com</span> 
        </div>
      </div>
    
    </motion.div>
  );
};

export default TopBar;
