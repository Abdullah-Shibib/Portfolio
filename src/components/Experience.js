import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaCode } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'AI/ML Engineer Intern',
      company: 'Ericsson',
      location: 'Ottawa, ON, Canada',
      period: '2025 - Present',
      description: 'Contributing to technology scouting and development of neural networks and deep learning algorithms for 5G/6G physical layer functions on Ericsson RAN compute and COTS platforms.',
      achievements: [
        'Contributed to technology scouting and development of neural networks and deep learning algorithms for 5G/6G physical layer functions on Ericsson RAN compute and COTS platforms (x86/ARM)',
        'Developed and optimized high-performance software using C/C++ and Python, applying AI/ML frameworks such as TensorFlow and PyTorch',
        'Implemented scalable AI deployment using cloud platforms (AWS) and CI/CD pipelines (Git, Jenkins, GitHub)'
      ],
      technologies: ['C/C++', 'Python', 'TensorFlow', 'PyTorch', 'AWS', 'Git', 'Jenkins', '5G/6G']
    },
    {
      type: 'education',
      title: 'Bachelor of Information Technology',
      company: 'Carleton University',
      location: 'Ottawa, ON, Canada',
      period: '2023 - Present',
      description: 'Third-year IT student focusing on software development, artificial intelligence, and data science. Actively involved in academic projects and research.',
      achievements: [
        'Maintaining strong academic performance in IT coursework',
        'Completed multiple AI/ML projects including motion detection systems',
        'Working on independent coding projects and skill development'
      ],
      technologies: ['Python', 'JavaScript', 'React', 'AI/ML', 'Data Science']
    }
  ];



  return (
    <section id="experience" className="experience section">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Experience & Education</h2>
          <p>My professional journey and academic background</p>
        </motion.div>

        <div className="experience-content">
          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`timeline-item ${exp.type}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="timeline-marker">
                  {exp.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
                </div>
                
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>{exp.title}</h3>
                    <h4>{exp.company}</h4>
                  </div>
                  
                  <div className="timeline-meta">
                    <span className="meta-item">
                      <FaCalendarAlt />
                      {exp.period}
                    </span>
                    <span className="meta-item">
                      <FaMapMarkerAlt />
                      {exp.location}
                    </span>
                  </div>
                  
                  <p className="timeline-description">{exp.description}</p>
                  
                  <div className="timeline-achievements">
                    <h5>Key Achievements:</h5>
                    <ul>
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="timeline-technologies">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default Experience;
