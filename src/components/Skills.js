import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaPython, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaDocker,
  FaAws,
  FaDatabase,
  FaMobile,
  FaServer,
  FaCode
} from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: FaPython, color: '#3776ab' },
        { name: 'JavaScript', icon: FaJs, color: '#f7df1e' },
        { name: 'TypeScript', icon: FaJs, color: '#3178c6' },
        { name: 'C/C++', icon: FaCode, color: '#00599c' },
      ]
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'React', icon: FaReact, color: '#61dafb' },
        { name: 'HTML5', icon: FaHtml5, color: '#e34f26' },
        { name: 'CSS3', icon: FaCss3Alt, color: '#1572b6' },
        { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
      ]
    },
    {
      title: 'AI & Data Science',
      skills: [
        { name: 'PyTorch', icon: FaCode, color: '#ee4c2c' },
        { name: 'TensorFlow', icon: FaCode, color: '#ff6f00' },
        { name: 'Pandas', icon: FaCode, color: '#150458' },
        { name: 'OpenCV', icon: FaCode, color: '#5c3ee8' },
      ]
    }
  ];

  const technologies = [
    'Python', 'JavaScript', 'TypeScript', 'C', 'C++', 'HTML5', 'CSS3',
    'React', 'Node.js', 'Django', 'Flask', 'TailwindCSS', 'MySQL', 'PostgreSQL',
    'SQLite', 'Pandas', 'PyTorch', 'TensorFlow', 'scikit-learn', 'OpenCV',
    'Docker', 'GitHub', 'Vercel', 'Postman', 'Power BI', 'Matplotlib', 'Raspberry Pi'
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Skills & Technologies</h2>
          <p>Technologies and tools I work with to bring ideas to life</p>
        </motion.div>

        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1), duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotateY: 10,
                      rotateX: 5,
                      z: 50
                    }}
                    style={{ '--skill-color': skill.color }}
                  >
                    <div className="skill-icon">
                      <skill.icon />
                    </div>
                    <div className="skill-info">
                      <h4>{skill.name}</h4>
                      <div className="skill-effects">
                        <div className="glow-effect"></div>
                        <div className="particle particle-1"></div>
                        <div className="particle particle-2"></div>
                        <div className="particle particle-3"></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="technologies-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Technologies I Work With</h3>
          <div className="technologies-grid">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                className="tech-tag"
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ 
                  delay: 1 + (index * 0.05), 
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 5,
                  y: -5
                }}
                whileTap={{ scale: 0.9 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
