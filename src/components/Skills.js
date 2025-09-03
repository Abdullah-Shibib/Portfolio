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
        { name: 'Python', icon: FaPython, proficiency: 'Advanced', color: '#3776ab' },
        { name: 'JavaScript', icon: FaJs, proficiency: 'Intermediate', color: '#f7df1e' },
        { name: 'TypeScript', icon: FaJs, proficiency: 'Learning', color: '#3178c6' },
        { name: 'C/C++', icon: FaCode, proficiency: 'Intermediate', color: '#00599c' },
      ]
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'React', icon: FaReact, proficiency: 'Intermediate', color: '#61dafb' },
        { name: 'HTML5', icon: FaHtml5, proficiency: 'Advanced', color: '#e34f26' },
        { name: 'CSS3', icon: FaCss3Alt, proficiency: 'Advanced', color: '#1572b6' },
        { name: 'Node.js', icon: FaNodeJs, proficiency: 'Learning', color: '#339933' },
      ]
    },
    {
      title: 'AI & Data Science',
      skills: [
        { name: 'PyTorch', icon: FaCode, proficiency: 'Learning', color: '#ee4c2c' },
        { name: 'TensorFlow', icon: FaCode, proficiency: 'Learning', color: '#ff6f00' },
        { name: 'Pandas', icon: FaCode, proficiency: 'Intermediate', color: '#150458' },
        { name: 'OpenCV', icon: FaCode, proficiency: 'Learning', color: '#5c3ee8' },
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
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    style={{ '--skill-color': skill.color }}
                  >
                    <div className="skill-icon">
                      <skill.icon />
                    </div>
                    <div className="skill-info">
                      <h4>{skill.name}</h4>
                      <div className="proficiency-indicator">
                        <div className={`proficiency-badge ${skill.proficiency.toLowerCase()}`}>
                          {skill.proficiency}
                        </div>
                        <div className="proficiency-dots">
                          {skill.proficiency === 'Advanced' && (
                            <>
                              <div className="dot active"></div>
                              <div className="dot active"></div>
                              <div className="dot active"></div>
                            </>
                          )}
                          {skill.proficiency === 'Intermediate' && (
                            <>
                              <div className="dot active"></div>
                              <div className="dot active"></div>
                              <div className="dot"></div>
                            </>
                          )}
                          {skill.proficiency === 'Learning' && (
                            <>
                              <div className="dot active"></div>
                              <div className="dot"></div>
                              <div className="dot"></div>
                            </>
                          )}
                        </div>
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
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + (index * 0.05), duration: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
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
