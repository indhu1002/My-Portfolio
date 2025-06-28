import React from 'react';
import './Contact.css';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';

function Contact() {
  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2><FaEnvelope className="contact-icon" /> Contact</h2>
      <div className="contact-details">
        <p><FaEnvelope className="icon" /> <a href="mailto:indhudande10@gmail.com">indhudande10@gmail.com</a></p>
        <p><FaGithub className="icon" /> <a href="https://github.com/indhu1002" target="_blank" rel="noopener noreferrer">github.com/indhu1002</a></p>
        <p><FaLinkedin className="icon" /> <a href="https://www.linkedin.com/in/indhu1002/" target="_blank" rel="noopener noreferrer">linkedin.com/indhu1002</a></p>

        <p><FaPhone className="icon" /> +91 9059691700</p>
        <p><FaMapMarkerAlt className="icon" /> Andhra Pradesh, India</p>

      </div>
    </motion.section>
  );
}

export default Contact;