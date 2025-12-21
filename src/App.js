import React, { useState, useEffect } from 'react';
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
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

import Section from './components/Section';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

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
        zIndex={9999}
        clickables={[
          'a', 'button', 'input', 'textarea',
          '.link', '.nav-link', '.navbar a', '.flip-card',
          '.navbar-brand', '.menu-item'
        ]}
      />

      <Hero />

      <main className="container py-4">
          <Section id="about" bgImage="/bg.jpg" aosAnimation="fade-up">
            <About />
          </Section>

          <Section id="projects" bgImage="/project_bg.jpg" aosAnimation="fade-right">
            <Projects />
          </Section>

          <Section id="skills" bgImage="/retro_skills_bg.jpg" aosAnimation="fade-left">
            <Skills />
          </Section>

          <Section id="education" bgImage="/edu_bg.jpg" aosAnimation="fade-up">
            <Education />
          </Section>

          <Section id="awards" bgImage="/awards_bg.jpg" aosAnimation="zoom-in">
            <Awards darkMode={darkMode} />
          </Section>

          <Section id="contact" bgImage="/contact_bg.jpg" aosAnimation="fade-up">
            <Contact />
          </Section>

        <div className="floating-buttons">
          <a href={`${process.env.PUBLIC_URL}/Resume.pdf`} download className="btn btn-primary me-2">
            Download Resume
          </a>
        </div>

        <ScrollToTop />
      </main>

      <Footer />
    </div>
  );
}

export default App;
