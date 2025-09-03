import React, { useState } from 'react';
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
  FaCode,
  FaSearch,
  FaCheck,
  FaTimes,
  FaLightbulb,
  FaInfoCircle
} from 'react-icons/fa';
import { 
  SiPytorch, 
  SiTensorflow, 
  SiPandas, 
  SiOpencv,
  SiTypescript,
  SiCplusplus,
  SiC
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [gameResult, setGameResult] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [discoveredTechs, setDiscoveredTechs] = useState([]);
  const [hasGivenUp, setHasGivenUp] = useState(false);

  // All technologies you've used (expanded list)
  const allTechnologies = [
    'Python', 'JavaScript', 'TypeScript', 'C', 'C++', 'HTML5', 'CSS3',
    'React', 'Node.js', 'Django', 'Flask', 'TailwindCSS', 'MySQL', 'PostgreSQL',
    'SQLite', 'Pandas', 'PyTorch', 'TensorFlow', 'scikit-learn', 'OpenCV',
    'Docker', 'GitHub', 'Vercel', 'Postman', 'Power BI', 'Matplotlib', 'Raspberry Pi',
    'Git', 'AWS', 'MongoDB', 'Jenkins', 'Kubernetes'
  ];

  // Technology info links mapping
  const techInfoLinks = {
    'Python': 'https://www.python.org/about/',
    'JavaScript': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    'TypeScript': 'https://www.typescriptlang.org/docs/',
    'C': 'https://www.geeksforgeeks.org/c-programming-language/',
    'C++': 'https://www.w3schools.com/cpp/cpp_intro.asp',
    'HTML5': 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    'CSS3': 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    'React': 'https://react.dev/learn',
    'Node.js': 'https://nodejs.org/en/about/',
    'Django': 'https://docs.djangoproject.com/en/stable/intro/',
    'Flask': 'https://flask.palletsprojects.com/en/2.3.x/',
    'TailwindCSS': 'https://tailwindcss.com/docs',
    'MySQL': 'https://dev.mysql.com/doc/',
    'PostgreSQL': 'https://www.postgresql.org/docs/',
    'SQLite': 'https://www.sqlite.org/docs.html',
    'Pandas': 'https://pandas.pydata.org/docs/',
    'PyTorch': 'https://pytorch.org/tutorials/',
    'TensorFlow': 'https://www.tensorflow.org/learn',
    'scikit-learn': 'https://scikit-learn.org/stable/',
    'OpenCV': 'https://opencv.org/',
    'Docker': 'https://docs.docker.com/get-started/',
    'GitHub': 'https://docs.github.com/en',
    'Vercel': 'https://vercel.com/docs',
    'Postman': 'https://learning.postman.com/docs/',
    'Power BI': 'https://learn.microsoft.com/en-us/power-bi/',
    'Matplotlib': 'https://matplotlib.org/stable/',
    'Raspberry Pi': 'https://www.raspberrypi.org/documentation/',
    'Git': 'https://git-scm.com/doc',
    'AWS': 'https://aws.amazon.com/what-is/',
    'MongoDB': 'https://docs.mongodb.com/',
    'Jenkins': 'https://www.jenkins.io/doc/',
    'Kubernetes': 'https://kubernetes.io/docs/concepts/'
  };

  // Technologies you haven't used (for the guessing game)
  const notUsedTechnologies = [
    'Angular', 'Vue.js', 'Svelte', 'PHP', 'Ruby', 'Go', 'Rust', 'Swift',
    'Kotlin', 'Java', 'C#', 'Scala', 'Haskell', 'Lua', 'Perl', 'Assembly',
    'Express', 'Nginx', 'Redis', 'Ember.js', 'Backbone.js', 'jQuery', 'Bootstrap', 'Foundation', 'Bulma',
    'Sass', 'Less', 'Stylus', 'Webpack', 'Rollup', 'Parcel', 'Gulp', 'Grunt',
    'Firebase', 'Supabase', 'PlanetScale', 'CockroachDB', 'Neo4j', 'Elasticsearch',
    'Apache Kafka', 'RabbitMQ', 'GraphQL', 'Apollo', 'Prisma', 'Sequelize',
    'Jest', 'Cypress', 'Selenium', 'Playwright', 'Storybook', 'Figma', 'Sketch'
  ];

  const handleSearch = () => {
    if (!searchTerm.trim()) return;
    
    const searchLower = searchTerm.toLowerCase().trim();
    const found = allTechnologies.find(tech => 
      tech.toLowerCase() === searchLower
    );
    
    if (found) {
      // Check if already discovered
      if (!discoveredTechs.includes(found)) {
        setDiscoveredTechs(prev => [...prev, found]);
      }
      setGameResult({ type: 'success', message: `Yes! I've used ${found} 🎉` });
    } else {
      setGameResult({ type: 'error', message: `No, I haven't used ${searchTerm} yet 🤔` });
    }
    
    setShowHint(false);
  };

  const getRandomHint = () => {
    const randomTech = allTechnologies[Math.floor(Math.random() * allTechnologies.length)];
    setShowHint(true);
    setGameResult({ type: 'hint', message: `💡 Hint: I've used ${randomTech}` });
  };

  const handleGiveUp = () => {
    setHasGivenUp(true);
    setDiscoveredTechs(allTechnologies);
    setGameResult({ type: 'giveup', message: '🏳️ You gave up! Here are all the technologies I use:' });
  };

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: FaPython, color: '#3776ab' },
        { name: 'JavaScript', icon: FaJs, color: '#f7df1e' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
        { name: 'C/C++', icon: SiCplusplus, color: '#00599c' },
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
        { name: 'PyTorch', icon: SiPytorch, color: '#ee4c2c' },
        { name: 'TensorFlow', icon: SiTensorflow, color: '#ff6f00' },
        { name: 'Pandas', icon: SiPandas, color: '#150458' },
        { name: 'OpenCV', icon: SiOpencv, color: '#5c3ee8' },
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
                      <a 
                        href={techInfoLinks[skill.name]} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="skill-info-btn"
                        title={`Learn about ${skill.name}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaInfoCircle />
                      </a>
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
          
          {/* Guessing Game */}
          <motion.div
            className="guessing-game"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="game-header">
              <h4>🎮 Technology Guessing Game</h4>
              <p>Can you guess which technologies I've used? Try searching for any tech!</p>
            </div>
            
            <div className="search-container">
              <div className="search-input-wrapper">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Type a technology (e.g., Python, React, Docker...)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="search-input"
                />
              </div>
              <div className="game-buttons">
                <motion.button
                  onClick={handleSearch}
                  className="search-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Search
                </motion.button>
                <motion.button
                  onClick={getRandomHint}
                  className="hint-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLightbulb />
                  Get Hint
                </motion.button>
                <motion.button
                  onClick={handleGiveUp}
                  className="giveup-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={hasGivenUp}
                >
                  🏳️ Give Up
                </motion.button>
              </div>
            </div>

            {gameResult && (
              <motion.div
                className={`game-result ${gameResult.type}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="result-icon">
                  {gameResult.type === 'success' && <FaCheck />}
                  {gameResult.type === 'error' && <FaTimes />}
                  {gameResult.type === 'hint' && <FaLightbulb />}
                </div>
                <span>{gameResult.message}</span>
              </motion.div>
            )}
          </motion.div>

          {/* Discovered Technologies */}
          {discoveredTechs.length > 0 && (
            <motion.div
              className="discovered-techs"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h4>
                {hasGivenUp 
                  ? `🏳️ All Technologies I Use (${discoveredTechs.length})` 
                  : `🎯 Technologies You've Discovered (${discoveredTechs.length})`
                }
              </h4>
              <div className="discovered-grid">
                {discoveredTechs.map((tech, index) => (
                  <motion.div
                    key={tech}
                    className="discovered-tech"
                    initial={{ 
                      opacity: 0, 
                      scale: 0,
                      rotate: -180,
                      y: 50
                    }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      rotate: 0,
                      y: 0
                    }}
                    transition={{ 
                      delay: index * 0.1,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 10,
                      y: -8,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ 
                      scale: 0.9,
                      rotate: -5
                    }}
                  >
                    <div className="tech-badge">
                      <span className="tech-name">{tech}</span>
                      <div className="tech-sparkle">✨</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Show static list only if no discoveries yet */}
          {discoveredTechs.length === 0 && (
            <motion.div
              className="initial-message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              <p>🔍 Start guessing to discover my technologies!</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
