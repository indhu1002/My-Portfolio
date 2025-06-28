import React from 'react';
import './Certifications.css';
import { motion } from 'framer-motion';

function Certifications() {
  return (
    <motion.section
      id="certifications"
      className="certifications"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2>Certifications</h2>
      <div className="certification-list">
        {/* <div className="cert-card">
          <h3>CodSoft Internship</h3>
          <a href="https://drive.google.com/file/d/1Jb9MPEGBnbBFg9IluuWz_aJ8J3c5wYJt/view" target="_blank" rel="noopener noreferrer" className="cert-btn">View Certificate</a>
        </div> */}
        <div className="cert-card">
          <h3>Eduversity Internship</h3>
          <a href="https://drive.google.com/file/d/18eSeVNIPkXirCuf03Z1GAnungM6L2feW/view" target="_blank" rel="noopener noreferrer" className="cert-btn">View Certificate</a>
        </div>
        <div className="cert-card">
          <h3>Coursera – JavaScript</h3>
          <a href="https://www.coursera.org/account/accomplishments/certificate/GMJ2XAMONFYI" target="_blank" rel="noopener noreferrer" className="cert-btn">View Certificate</a>
        </div>
        <div className="cert-card">
          <h3>Coursera –  HTML & CSS</h3>
          <a href="https://www.coursera.org/account/accomplishments/certificate/HDSQDXV6EL7Q" target="_blank" rel="noopener noreferrer" className="cert-btn">View Certificate</a>
        </div>
        <div className="cert-card">
          <h3>Cuvette –  React js</h3>
          <a href="https://www.coursera.org/account/accomplishments/certificate/HDSQDXV6EL7Q" target="_blank" rel="noopener noreferrer" className="cert-btn">View Certificate</a>
        </div>
        <div className="cert-card">
          <h3>Coursera –  Python</h3>
          <a href="https://drive.google.com/file/d/1aOSUZpnd4PbeCh3y4BfIGuZW9MlvYALf/view" target="_blank" rel="noopener noreferrer" className="cert-btn">View Certificate</a>
        </div>
        <div className="cert-card">
          <h3>freeCodeCamp –  Responsive Web Design</h3>
          <a href="https://drive.google.com/file/d/1gCN83cLy1YVXX-bs0SkfyXeq8N4Oo1_U/view" target="_blank" rel="noopener noreferrer" className="cert-btn">View Certificate</a>
        </div>
      </div>
    </motion.section>
  );
}

export default Certifications;
