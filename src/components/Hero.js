import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Abdullah-Shibib', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/abdullah-shibib-5875a1297/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:abdullahshibib@yahoo.com', label: 'Email' },
  ];

  // Technology rotation arrays
  const techSets = [
    ['OpenCV', 'TensorFlow', 'Node.js', 'Docker'],
    ['PyTorch', 'AWS', 'Git', 'MySQL'],
    ['Pandas', 'Flask', 'PostgreSQL', 'Jenkins'],
    ['scikit-learn', 'Django', 'MongoDB', 'Kubernetes'],
    ['Matplotlib', 'Express', 'Redis', 'Nginx']
  ];

  const [currentTechSet, setCurrentTechSet] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTechSet((prev) => (prev + 1) % techSets.length);
        setTimeout(() => {
          setIsAnimating(false);
        }, 200);
      }, 400);
    }, 4000);

    return () => clearInterval(interval);
  }, [techSets.length]);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="gradient-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi, I'm Abdullah Shibib
            </motion.h1>
            
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Innovative IT Student | Tech Enthusiast & Problem Solver
            </motion.p>
            
            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Third-year IT Student at Carleton University. 
              Passionate about AI, machine learning, and building innovative solutions that make a difference.
            </motion.p>
            
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.button
                className="btn btn-primary"
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
              
              <motion.a
                href="#projects"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector('#projects');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                View My Work
              </motion.a>
              
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-resume"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaFilePdf />
                View Resume
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="image-container">
              <div className="profile-image">
                <div className="concept-container">
                  <div className="central-element">
                    <div className="profile-photo-container">
                      <img 
                        src="/images/profile-photo.png" 
                        alt="Abdullah Shibib" 
                        className="profile-photo"
                      />
                    </div>
                  </div>
                  <div className="floating-tech-elements">
                    <motion.div 
                      className={`tech-element tech-1 ${isAnimating ? 'bubble-pop' : ''}`}
                      key={`tech-1-${currentTechSet}`}
                      initial={{ scale: 0, opacity: 0, rotate: -180 }}
                      animate={{ scale: 1, opacity: 1, rotate: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.1,
                        type: "spring",
                        stiffness: 200,
                        damping: 15
                      }}
                    >
                      {techSets[currentTechSet][0]}
                    </motion.div>
                    <motion.div 
                      className={`tech-element tech-2 ${isAnimating ? 'bubble-pop' : ''}`}
                      key={`tech-2-${currentTechSet}`}
                      initial={{ scale: 0, opacity: 0, rotate: 180 }}
                      animate={{ scale: 1, opacity: 1, rotate: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.2,
                        type: "spring",
                        stiffness: 200,
                        damping: 15
                      }}
                    >
                      {techSets[currentTechSet][1]}
                    </motion.div>
                    <motion.div 
                      className={`tech-element tech-3 ${isAnimating ? 'bubble-pop' : ''}`}
                      key={`tech-3-${currentTechSet}`}
                      initial={{ scale: 0, opacity: 0, rotate: -90 }}
                      animate={{ scale: 1, opacity: 1, rotate: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.3,
                        type: "spring",
                        stiffness: 200,
                        damping: 15
                      }}
                    >
                      {techSets[currentTechSet][2]}
                    </motion.div>
                    <motion.div 
                      className={`tech-element tech-4 ${isAnimating ? 'bubble-pop' : ''}`}
                      key={`tech-4-${currentTechSet}`}
                      initial={{ scale: 0, opacity: 0, rotate: 90 }}
                      animate={{ scale: 1, opacity: 1, rotate: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.4,
                        type: "spring",
                        stiffness: 200,
                        damping: 15
                      }}
                    >
                      {techSets[currentTechSet][3]}
                    </motion.div>
                  </div>
                  <div className="background-circle"></div>
                </div>
              </div>
              <div className="floating-elements">
                <div className="floating-element element-1">Python</div>
                <div className="floating-element element-2">React</div>
                <div className="floating-element element-3">AI/ML</div>
                <div className="floating-element element-4">JavaScript</div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="hero-social"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
            >
              <social.icon />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
