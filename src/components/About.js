import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import { FaUser } from 'react-icons/fa';

function About() {
  return (
    <motion.section
      id="about"
      className="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2><FaUser className="about-icon" /> About Me</h2>
      <p>
        I’m Indhu, a passionate B.Tech student specializing in web development. I love building responsive and modern websites using React.js and Firebase. I enjoy learning new technologies and continuously improving my skills to create better user experiences.
      </p>
    </motion.section>
  );
}

export default About;
