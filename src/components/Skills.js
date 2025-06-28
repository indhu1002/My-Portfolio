// import React from 'react';
// import './Skills.css';

// function Skills() {
//   return (
//     <section id="skills" className="skills">
//       <h2>Skills</h2>
//       <p>React, Firebase, Node.js, MongoDB, JavaScript, CSS, Git, GitHub</p>
//     </section>
//   );
// }

// export default Skills;


// import React from 'react';
// import './Skills.css';
// import { motion } from 'framer-motion';
// import { FaReact, FaNodeJs, FaDatabase, FaJsSquare, FaGithub } from 'react-icons/fa';

// function Skills() {
//   return (
//     <motion.section
//       id="skills"
//       className="skills"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 1 }}
//     >
//       <h2>Skills</h2>
//       <ul className="skills-list">
//         <li className="skill-item"><FaReact className="skill-icon" /> React.js</li>
//         <li className="skill-item"><FaNodeJs className="skill-icon" /> Node.js</li>
//         <li className="skill-item"><FaDatabase className="skill-icon" /> Firebase / MongoDB</li>
//         <li className="skill-item"><FaJsSquare className="skill-icon" /> JavaScript</li>
//         <li className="skill-item"><FaGithub className="skill-icon" /> Git & GitHub</li>
//       </ul>
//     </motion.section>
//   );
// }

// export default Skills;



import React from 'react';
import './Skills.css';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaPython, FaDatabase, FaJsSquare, FaGithub, FaBootstrap, FaReact, FaFire } from 'react-icons/fa';

function Skills() {
  return (
    <motion.section
      id="skills"
      className="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2>Skills</h2>
      <ul className="skills-list">
        <li className="skill-item"><FaHtml5 className="skill-icon" /> HTML</li>
        <li className="skill-item"><FaCss3Alt className="skill-icon" /> CSS</li>
        <li className="skill-item"><FaJsSquare className="skill-icon" /> JavaScript</li> 
        <li className="skill-item"><FaReact className="skill-icon" /> React.js</li>    
        <li className="skill-item"><FaBootstrap className="skill-icon" /> Bootstrap</li>   
        <li className="skill-item"><FaPython className="skill-icon" /> Python</li>
        <li className="skill-item"><FaDatabase className="skill-icon" /> SQL</li>
        <li className="skill-item"><FaFire className="skill-icon" /> Firebase</li>
        <li className="skill-item"><FaGithub className="skill-icon" /> Git & GitHub</li>
        
        
        
      </ul>
    </motion.section>
  );
}

export default Skills;
