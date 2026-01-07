import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';


function AppContent() {
  const location = useLocation();
  const [showTopBar, setShowTopBar] = useState(true);
  
  // Hide navbar on admin login page
  const hideNavbarOnPages = ['/admin-login'];
  const shouldHideNavbar = hideNavbarOnPages.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowTopBar(false);
      } else {
        setShowTopBar(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      {/* Show TopBar only on Home page and when not scrolled */}
      {location.pathname === '/' && showTopBar && <TopBar />}
      
      {/* Show Navbar on all pages except admin login */}
      {!shouldHideNavbar && <Navbar />}

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin-login" element={<AdminLogin />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
