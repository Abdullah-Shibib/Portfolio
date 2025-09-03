import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobile, FaGlobe } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Motion Detection Security System',
      description: 'An intelligent security system using computer vision and motion detection algorithms. Built with Python and OpenCV for real-time surveillance and threat detection.',
      image: '/images/motion-detection-purple.png',
      technologies: ['Python', 'OpenCV', 'Computer Vision', 'AI'],
      category: 'ai',
      github: 'https://github.com/YOUR_USERNAME/Motion-detection-security-system',
      live: null,
      featured: true
    },
    {
      id: 2,
      title: 'Personal AI Doctor (P.A.I.D)',
      description: 'An AI-powered healthcare assistant that provides medical advice and symptom analysis using machine learning algorithms and natural language processing.',
      image: '/images/ai-doctor-purple.png',
      technologies: ['JavaScript', 'AI/ML', 'Healthcare', 'NLP'],
      category: 'ai',
      github: 'https://github.com/YOUR_USERNAME/Personal-AI-Doctor-P.A.I.D',
      live: null,
      featured: true
    },
    {
      id: 3,
      title: 'AI Trading Bot',
      description: 'An intelligent trading bot that uses machine learning algorithms to analyze market trends and execute automated trades with risk management features.',
      image: '/images/ai-trading-bot-purple.png',
      technologies: ['HTML', 'JavaScript', 'AI/ML', 'Trading'],
      category: 'ai',
      github: 'https://github.com/YOUR_USERNAME/AI-Trading-Bot',
      live: null,
      featured: true
    },
    {
      id: 4,
      title: 'Aim Training Simulator',
      description: 'A precision training application designed to improve aiming skills through interactive exercises and performance analytics.',
      image: '/images/aim-target.png',
      technologies: ['Python', 'Game Development', 'Analytics'],
      category: 'web',
      github: 'https://github.com/YOUR_USERNAME/Aim-Training-Simulator',
      live: null,
      featured: false
    },
    {
      id: 5,
      title: 'E-commerce Website',
      description: 'A full-featured e-commerce platform with modern UI/UX design, shopping cart functionality, and responsive design for optimal user experience.',
      image: '/images/ecommerce-website-purple.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'E-commerce'],
      category: 'web',
      github: 'https://github.com/YOUR_USERNAME/Ecommerce-Website',
      live: null,
      featured: false
    },
    {
      id: 6,
      title: 'Ligalytics App',
      description: 'A data analytics application focused on legal data processing and visualization, providing insights through interactive dashboards.',
      image: '/images/legalytics-app.png',
      technologies: ['Data Analytics', 'Visualization', 'Legal Tech'],
      category: 'web',
      github: 'https://github.com/YOUR_USERNAME/Ligalytics-app-',
      live: null,
      featured: false
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', icon: FaCode },
    { key: 'ai', label: 'AI/ML Projects', icon: FaCode },
    { key: 'web', label: 'Web Apps', icon: FaGlobe }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>My Projects</h2>
          <p>Some of my recent work and side projects</p>
        </motion.div>

        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <filter.icon />
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                {project.image.startsWith('/') ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      borderRadius: '1rem 1rem 0 0'
                    }}
                  />
                ) : (
                  <div className="image-placeholder">
                    <span style={{ fontSize: '3rem' }}>{project.image}</span>
                  </div>
                )}
                {project.featured && (
                  <div className="featured-badge">Featured</div>
                )}
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaGithub />
                    Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
