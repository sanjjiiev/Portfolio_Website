import React, { useState} from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Awards from './components/Awards';
import Contact from './components/Contact';
import CustomNavbar from './components/navbar'; 
import Hero from './components/Hero';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './SectionStyles.css';
import AnimatedCursor from "react-animated-cursor";

import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}>
      <CustomNavbar onToggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <AnimatedCursor
  innerSize={8}
  outerSize={35}
  color='0, 172, 193'
  outerAlpha={0.4}
  innerScale={0.7}
  outerScale={2}
  clickables={[
    'a',
    'button',
    'input',
    'textarea',
    '.link',
    '.nav-link',     // Bootstrap or custom navbar links
    '.navbar a',     // If using <a> inside navbar
    '.navbar-brand',
    '.menu-item'     // Add more custom classes if needed
  ]}
  />
      <Hero />

      <div className="container py-4">
       
       <section
  id="about"
  className="section-bg"
  style={{
    backgroundImage: "url('/bg.jpg')"
  }}
>
  <div className="section-content" data-aos="fade-up">
    <About />
  </div>
</section>

        <section
  id="projects"
  className="section-bg"
  style={{ backgroundImage: "url('/project_bg.jpg')" }}
>
  <div className="section-content" data-aos="fade-right">
    <Projects />
  </div>
</section>

        <section
  id="skills"
  className="section-bg"
  style={{ backgroundImage: "url('/skills_bg.jpg')" }}
>
  <div className="section-content" data-aos="fade-left">
    <Skills />
  </div>
</section>

        <section
  id="education"
  className="section-bg"
  style={{ backgroundImage: "url('edu_bg.jpg')" }}
>
  <div className="section-content" data-aos="fade-up">
    <Education />
  </div>
</section>

        <section
  id="awards"
  className="section-bg"
  style={{ backgroundImage: "url('awards_bg.jpg')" }}
>
  <div className="section-content" data-aos="zoom-in">
    <Awards />
  </div>
</section>

        <section
  id="contact"
  className="section-bg"
  style={{ backgroundImage: "url('contact_bg.jpg')" }}
>
  <div className="section-content" data-aos="fade-up">
    <Contact />
  </div>
</section>

<div className="floating-buttons">
  <a href="/Resume.pdf" download className="btn btn-primary me-2">
   Download Resume
  </a>
</div>

<ScrollToTop />


      </div>
      <Footer />
    </div>
  );
}

export default App;
