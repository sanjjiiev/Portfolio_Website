
import React from 'react';
import './Awards.css';
import { awards } from '../data';

function Awards({ darkMode }) {
  return (
    <section className="glass-card p-4 my-5">
      <h2 className="text-center mb-4">Awards</h2>
      <div className="row">
        {awards.map((award, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front text-center p-3">
                  <h3>{award.icon}</h3>
                  <h4>{award.title}</h4>
                </div>
                <div className="flip-card-back p-3">
                  <p>{award.desc}</p>
                  <p><strong>{award.year}</strong></p>
                  <a
                    href={award.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={darkMode ? 'text-info' : 'text-primary'}
                  >
                    View →
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Awards;
