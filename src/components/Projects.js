// src/components/Projects.js
import React from 'react';
import './Projects.css';
import { projects } from '../data';

function Projects() {
  return (
    <section className="glass-card p-4 my-5">
      <h2 className="text-center mb-4" data-text="Projects">Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
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
