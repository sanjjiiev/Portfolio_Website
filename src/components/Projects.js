// src/components/Projects.js
import React from 'react';
import './Projects.css';

const projectLinks = [
  { name: "AI-powered SOS System", link: "https://github.com/sanjjiiev/Smart-Sheild" },
  { name: "Ember-to-OWL-Conversion", link: "https://github.com/sanjjiiev/Ember-to-OWL-Conversion" },
  { name: "Precision Line-Guided Robot", link: "https://github.com/sanjjiiev/Precision-Line-Guided-Autonomous-Robot" },
  { name: "Dynamic Route Optimization", link: "https://github.com/sanjjiiev/Dynamic-Route-Optimization-System" },
  { name: "E-Commerce Website", link: "https://github.com/sanjjiiev/E-commerce-Website" },
  { name: "Cannon Clash: Tank Wars", link: "https://github.com/sanjjiiev/Cannon-Clash-Tank-Wars" },
  { name: "Short Film – LOOPBACK", link: "" },
];

function Projects() {
  return (
    <section className="glass-card p-4 my-5">
      <h2 className="text-center mb-4">Projects</h2>
      <div className="projects-grid">
        {projectLinks.map((proj, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h5>{proj.name}</h5>
              </div>
              <div className="flip-card-back">
                {proj.link ? (
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
                    View Project
                  </a>
                ) : (
                  <p>Coming Soon</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
