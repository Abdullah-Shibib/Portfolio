import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaLightbulb, FaUsers } from 'react-icons/fa';
import './About.css';

const About = () => {
  const features = [
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, scalable, and well-documented code following best practices and design patterns.'
    },
    {
      icon: FaRocket,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency is a priority in all my development projects.'
    },
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description: 'I love exploring new technologies and finding creative solutions to complex problems.'
    },
    {
      icon: FaUsers,
      title: 'Collaboration',
      description: 'Strong believer in teamwork and effective communication to deliver exceptional results.'
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <p>Passionate developer with a love for creating innovative solutions</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Hello! I'm Abdullah Shibib</h3>
            <p>
              I'm an innovative third-year IT student pursuing my education at both Carleton University 
              and Algonquin College. As a tech enthusiast and problem solver, I'm passionate about 
              leveraging technology to create meaningful solutions.
            </p>
            <p>
              My journey in technology is driven by curiosity and a desire to make a positive impact. 
              I specialize in AI, machine learning, and full-stack development, with a particular 
              interest in building intelligent systems and innovative applications.
            </p>
            <p>
              When I'm not studying or coding, you can find me exploring the latest in AI research, 
              contributing to open-source projects, or working on personal projects that challenge 
              me to grow as a developer.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <h4>3rd</h4>
                <p>Year Student</p>
              </div>
              <div className="stat">
                <h4>9+</h4>
                <p>GitHub Repositories</p>
              </div>
              <div className="stat">
                <h4>20+</h4>
                <p>Technologies Learned</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-features"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="feature-icon">
                  <feature.icon />
                </div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
