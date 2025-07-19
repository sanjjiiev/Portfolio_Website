// Let's proceed step-by-step

// 1. AWARDS SECTION (Flip Card Style)
// File: components/Awards.js
import React from 'react';
import './Awards.css';
import { FaAward, FaTrophy } from 'react-icons/fa';

const awards = [
  {
    title: 'Finalist – Uyir Hackathon',
    desc: 'Selected as finalist for developing an AI-powered SOS System for autonomous vehicles.',
    year: '2024',
    icon: <FaTrophy />,
    link: 'https://github.com/sanjjiiev/Smart-Sheild'
  },
  {
    title: 'Swachhata Hi Seva',
    desc: 'Recognized for active participation in the National Service Scheme (NSS) camp.',
    year: '2023',
    icon: <FaAward />,
    link: 'https://github.com/sanjjiiev/Awards/blob/main/swachhata_hi_seva.pdf'
  }
];

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
