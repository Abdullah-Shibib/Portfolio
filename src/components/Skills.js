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
        { name: 'Python', icon: FaPython, level: 65 },
        { name: 'JavaScript', icon: FaJs, level: 60 },
        { name: 'TypeScript', icon: FaJs, level: 45 },
        { name: 'C/C++', icon: FaCode, level: 55 },
      ]
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'React', icon: FaReact, level: 60 },
        { name: 'HTML5', icon: FaHtml5, level: 70 },
        { name: 'CSS3', icon: FaCss3Alt, level: 65 },
        { name: 'Node.js', icon: FaNodeJs, level: 50 },
      ]
    },
    {
      title: 'AI & Data Science',
      skills: [
        { name: 'PyTorch', icon: FaCode, level: 50 },
        { name: 'TensorFlow', icon: FaCode, level: 45 },
        { name: 'Pandas', icon: FaCode, level: 60 },
        { name: 'OpenCV', icon: FaCode, level: 55 },
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
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="skill-icon">
                      <skill.icon />
                    </div>
                    <div className="skill-info">
                      <h4>{skill.name}</h4>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ delay: 0.5 + (categoryIndex * 0.2) + (skillIndex * 0.1), duration: 1 }}
                          viewport={{ once: true }}
                        ></motion.div>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
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
