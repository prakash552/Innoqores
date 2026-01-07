import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Lightbulb,
  Target,
  Heart,
  Users,
  TrendingUp,
  Award,
  Clock,
  Globe2,
  Briefcase,
  Code,
  Palette,
  Laptop,
  Quote
} from "lucide-react";
import Footer from "../components/Footer";
import "./About.css";

function About() {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const visionRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const timelineRef = useRef(null);
  const achievementsRef = useRef(null);
  const testimonialsRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const storyInView = useInView(storyRef, { once: true, amount: 0.3 });
  const visionInView = useInView(visionRef, { once: true, amount: 0.3 });
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.2 });
  const teamInView = useInView(teamRef, { once: true, amount: 0.2 });
  const timelineInView = useInView(timelineRef, { once: true, amount: 0.2 });
  const achievementsInView = useInView(achievementsRef, { once: true, amount: 0.3 });
  const testimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.3 });

  const coreValues = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions that keep our clients ahead of the curve."
    },
    {
      icon: Heart,
      title: "Client Success",
      description: "Your success is our mission. We're committed to understanding your needs and delivering solutions that drive real business results."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service, ensuring exceptional outcomes."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork, both internally and with our clients, to create solutions that truly make a difference."
    }
  ];

  const achievements = [
    {
      icon: Users,
      number: "10+",
      label: "Happy Clients",
      description: "Trusted worldwide"
    },
    {
      icon: Briefcase,
      number: "10+",
      label: "Projects",
      description: "Successfully delivered"
    },
    {
      icon: Award,
      number: "15+",
      label: "Awards",
      description: "Industry recognition"
    },
    {
      icon: Globe2,
      number: "1",
      label: "Countries",
      
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <motion.section 
        className="about-hero"
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="about-hero-content">
          <motion.div
            className="hero-label"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
          >
            <Globe2 size={20} />
            <span>About Innoqores</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4 }}
          >
            Building Tomorrow's
            <span className="gradient-text"> Digital World</span>
          </motion.h1>
          
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.6 }}
          >
            We are a team of passionate innovators, designers, and developers 
            committed to creating exceptional digital experiences that drive business growth.
          </motion.p>
        </div>

        {/* Animated Background */}
        <div className="hero-bg-animation">
          <motion.div 
            className="floating-circle circle-1"
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="floating-circle circle-2"
            animate={{
              y: [0, 40, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.section>

      {/* Our Story */}
      <section className="story-section" ref={storyRef}>
        <motion.div 
          className="story-content"
          initial={{ opacity: 0, x: -50 }}
          animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">
            <TrendingUp size={20} />
            <span>Our Story</span>
          </div>
          <h2>From Vision to <span className="gradient-text">Reality</span></h2>
          <p className="story-text">
            Founded in 2014, Innoqores began with a simple yet powerful vision: to bridge the gap 
            between innovative technology and business success. What started as a small startup 
            with big dreams has grown into a leading digital solutions provider.
          </p>
          <p className="story-text">
            Over the years, we've evolved alongside the digital landscape, constantly adapting and 
            learning to provide our clients with the most advanced and effective solutions. Our journey 
            has been marked by continuous innovation, unwavering commitment to quality, and a deep 
            understanding that our success is measured by the success of our clients.
          </p>
          <p className="story-text">
            Today, we stand proud as a team of 50+ talented professionals, having successfully delivered 
            500+ projects to clients across 15+ countries. But our story doesn't end here – we're just 
            getting started.
          </p>
        </motion.div>

        <motion.div 
          className="story-image"
          initial={{ opacity: 0, x: 50 }}
          animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="story-image-placeholder">
            <motion.div
              className="image-icon"
              animate={{
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <TrendingUp size={80} />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Vision & Mission */}
      <section className="vision-section" ref={visionRef}>
        <motion.div
          className="vision-card"
          initial={{ opacity: 0, y: 50 }}
          animate={visionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="vision-icon"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Target size={40} />
          </motion.div>
          <h3>Our Vision</h3>
          <p>
            To be the global leader in digital innovation, empowering businesses worldwide 
            to achieve unprecedented growth through cutting-edge technology solutions.
          </p>
        </motion.div>

        <motion.div
          className="vision-card"
          initial={{ opacity: 0, y: 50 }}
          animate={visionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div 
            className="vision-icon"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Lightbulb size={40} />
          </motion.div>
          <h3>Our Mission</h3>
          <p>
            To deliver exceptional digital solutions that combine innovation, creativity, 
            and technical excellence, driving measurable success for every client we serve.
          </p>
        </motion.div>
      </section>

      {/* Core Values */}
      <section className="values-section" ref={valuesRef}>
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">
            <Heart size={20} />
            <span>Core Values</span>
          </div>
          <h2>What Drives <span className="gradient-text">Us Forward</span></h2>
          <p>The principles that guide everything we do</p>
        </motion.div>

        <div className="values-grid">
          {coreValues.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 50 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div 
                  className="value-icon"
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <IconComponent size={32} />
                </motion.div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Achievements */}
      <section className="achievements-section" ref={achievementsRef}>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <motion.div
                key={index}
                className="achievement-card"
                initial={{ opacity: 0, y: 30 }}
                animate={achievementsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="achievement-icon"
                  animate={{
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                >
                  <IconComponent size={32} />
                </motion.div>
                <h3>{achievement.number}</h3>
                <p className="achievement-label">{achievement.label}</p>
                <p className="achievement-desc">{achievement.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
