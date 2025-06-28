import React from 'react';
import './Navbar.css';
import { FaHome, FaUser, FaCode, FaLaptopCode, FaAward, FaEnvelope } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        {/* <FaUserCircle className="logo-icon" /> */}
        <span>Portfolio</span>
      </div>
      <ul className="nav-links">
        <li><a href="#home"><FaHome /> Home</a></li>
        <li><a href="#about"><FaUser /> About</a></li>
        <li><a href="#projects"><FaCode /> Projects</a></li>
        <li><a href="#skills"><FaLaptopCode /> Skills</a></li>
        <li><a href="#certifications"><FaAward /> Certifications</a></li>
        <li><a href="#contact"><FaEnvelope /> Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

