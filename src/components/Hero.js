import React from 'react';
import { ReactTyped } from 'react-typed';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-section">
      <div className="overlay text-center">
        <img src="/profile.jpg" alt="Profile" className="profile-img mb-3" />
        <h1 className="display-4 fw-bold">Hi, I'm Sanjjiiev S</h1>

        <ReactTyped
          strings={[
            'Web Developer',
            'AI Enthusiast',
            'Open Source Contributor',
            'Ethical Hacker'
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
          className="typed-text"
        />

        <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap">
          <a href="/Resume.pdf" className="btn btn-primary px-4">
            Download Resume
          </a>
          <a href="#contact" className="btn btn-outline-light px-4">
            Hire Me
          </a>
        </div>

        <div className="parallax-content mt-5">
          <h9 className="fw-light">I design, build, and deploy innovative digital experiences.</h9>
        </div>
      </div>
    </section>
  );
}

export default Hero;
