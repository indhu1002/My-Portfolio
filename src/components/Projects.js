import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';

function Projects() {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>Student Result Management</h3>
          <a
            href="https://student-result-management-smoky.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          >
            View Live
          </a>
        </div>
        <div className="project-card">
          <h3>Addition Game</h3>
          <a
            href="https://addition-game-kappa.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          >
            View Live
          </a>
        </div>
        <div className="project-card">
          <h3>Season Switcher</h3>
          <a
            href="https://season-switch.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          >
            View Live
          </a>
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
