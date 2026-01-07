import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false); // Track admin login status
  const location = useLocation();

  // Check if admin is logged in (you can customize this logic)
  useEffect(() => {
    const adminToken = localStorage.getItem('adminToken');
    if (adminToken) {
      setIsAdminLoggedIn(true);
    }
  }, []);

  // Pages where navbar should be transparent
  const transparentPages = ['/', '/about'];
  const isTransparentPage = transparentPages.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <motion.nav
        className={`navbar-container ${
          isTransparentPage && !scrolled ? 'transparent' : ''
        } ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
       <Link to="/" className="logo">
         <img src="/image/logo3.png" alt="innoqores" /> 

       </Link>

        {/* Desktop Menu */}
        <ul className="nav-links desktop-menu">
          {navLinks.map((item) => (
            <motion.li key={item.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link 
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {isAdminLoggedIn && (
          <motion.button
            className="contact-btn desktop-btn"
            whileHover={{ backgroundColor: 'var(--button-hover)' }}
            onClick={() => {
              // Add logout functionality
              localStorage.removeItem('adminToken');
              setIsAdminLoggedIn(false);
            }}
          >
            Admin Logout
          </motion.button>
        )}

        {!isAdminLoggedIn && (
          <motion.button
            className="admin-btn desktop-btn"
            whileHover={{ backgroundColor: 'var(--button-hover)' }}
            onClick={() => {
              // Redirect to admin login page
              window.location.href = '/admin-login';
            }}
          >
            Admin Login
          </motion.button>
        )}

        {/* Mobile Toggle Button (ONLY MENU ICON) */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
          <Menu size={26} color="var(--accent-gold)" />
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="mobile-menu-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.4 }}
            >
              {/* CLOSE BUTTON */}
              <button className="close-btn" onClick={toggleMenu}>
                <X size={28} />
              </button>

              <ul className="mobile-nav-links">
                {navLinks.map((item) => (
                  <motion.li key={item.name} whileHover={{ x: 10 }} onClick={toggleMenu}>
                    <Link 
                      to={item.path}
                      className={location.pathname === item.path ? 'active' : ''}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {isAdminLoggedIn && (
                <motion.button
                  className="admin mobile-btn"
                  whileHover={{ backgroundColor: 'var(--button-hover)' }}
                  onClick={() => {
                    toggleMenu();
                    // Add logout functionality
                    localStorage.removeItem('adminToken');
                    setIsAdminLoggedIn(false);
                  }}
                >
                  Admin Logout
                </motion.button>
              )}

              {!isAdminLoggedIn && (
                <motion.button
                  className="admin mobile-btn"
                  whileHover={{ backgroundColor: 'var(--button-hover)' }}
                  onClick={() => {
                    toggleMenu();
                    // Redirect to admin login page
                    window.location.href = '/admin-login';
                  }}
                >
                  Admin Login
                </motion.button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
