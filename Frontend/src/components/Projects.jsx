import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projectsData = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveLink: '#'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'App Development',
      description: 'Secure banking application with biometric authentication and real-time transaction tracking.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
      technologies: ['React Native', 'Firebase', 'Redux'],
      liveLink: '#'
    },
    {
      id: 3,
      title: 'AI Content Generator',
      category: 'Web Development',
      description: 'AI-powered platform for generating marketing content, blog posts, and social media captions.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      technologies: ['Next.js', 'OpenAI API', 'PostgreSQL'],
      liveLink: '#'
    },
    {
      id: 4,
      title: 'Fitness Tracking App',
      category: 'App Development',
      description: 'Comprehensive fitness app with workout plans, nutrition tracking, and progress analytics.',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop',
      technologies: ['Flutter', 'Firebase', 'HealthKit'],
      liveLink: '#'
    },
    {
      id: 5,
      title: 'Real Estate Portal',
      category: 'Web Development',
      description: 'Property listing platform with virtual tours, mortgage calculator, and agent management.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      technologies: ['React', 'Express', 'MySQL'],
      liveLink: '#'
    },
    {
      id: 6,
      title: 'Social Media Dashboard',
      category: 'Digital Marketing',
      description: 'Unified dashboard for managing multiple social media accounts and analytics.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      technologies: ['Vue.js', 'Node.js', 'Chart.js'],
      liveLink: '#'
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
    <section className="projects-section" ref={ref}>
      <div className="projects-wrapper">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="projects-title">
            Our <span className="highlighted-text">Portfolio</span>
          </h2>
          <p className="projects-subtitle">
            Explore our latest projects showcasing innovation and excellence
          </p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={cardVariants}
              whileHover={{ y: -15, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                
                {/* Hover Overlay */}
                <div className="project-hover-overlay">
                  <div className="overlay-content">
                    <span className="project-category-badge">{project.category}</span>
                    <h3 className="project-hover-title">{project.title}</h3>
                    <p className="project-hover-description">{project.description}</p>
                    
                    <div className="project-hover-tech">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-pill">{tech}</span>
                      ))}
                    </div>

                    <motion.a
                      href={project.liveLink}
                      className="view-project-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={18} />
                      View Project
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
