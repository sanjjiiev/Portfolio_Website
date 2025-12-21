import React from 'react';
import { skills } from '../data';
import './Skills.css'; // Optional external styles

function Skills() {
  return (
    <section className="glass-card p-4 my-5">
      <h2 className="text-center mb-4">Skills</h2>
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="mb-4">
          <h5 className="mb-3 text-primary">{category}</h5>
          <div className="row">
            {items.map((item, idx) => (
              <div key={idx} className="col-md-4 d-flex align-items-center mb-2 skill-item">
                <span style={{ fontSize: '1.5rem', marginRight: '10px' }}>{item.icon}</span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
