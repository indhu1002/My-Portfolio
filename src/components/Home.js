import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';  // we’ll install this
import myPhoto from '../assets/my-photo.jpg'; // put your photo in src/assets/

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <img src={myPhoto} alt="Indhu" className="home-photo" />

        <div className="home-text">
          <h1 className="glow-text">
            Hi, I'm <span className="highlight">Indhu</span> 👋
          </h1>

          <div className="typewriter">
            <Typewriter
              options={{
                strings: [
                  'Web Developer | Python Programmer',
                  'Creative Coder'
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </div>

          <motion.a
            href="https://drive.google.com/file/d/13BS8SUTcrp4-ziy10y7J0UrY7LNc5LQ1/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5, type: 'spring', stiffness: 100 }}
          >
            <FaDownload className="icon" /> View Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default Home;

