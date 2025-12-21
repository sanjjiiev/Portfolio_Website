import React, { useState } from 'react';
import { skills } from '../data';
import './Skills.css'; // Optional external styles

function Skills() {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleMouseEnter = (category) => {
    setActiveCategory(category);
  };

  const handleMouseLeave = () => {
    setActiveCategory(null);
  };

  return (
    <section className="glass-card p-4 my-5" onMouseLeave={handleMouseLeave}>
      <h2 className="text-center mb-4">Skills</h2>
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="skill-category" onMouseEnter={() => handleMouseEnter(category)}>
          <h5 className="mb-1 skill-category-title">{category}</h5>
          <div className={`skill-items-container ${activeCategory === category ? 'open' : ''}`}>
            <div className="row p-3">
              {items.map((item, idx) => (
                <div key={idx} className="col-md-4 d-flex align-items-center mb-2 skill-item">
                  <span style={{ fontSize: '1.5rem', marginRight: '10px' }}>{item.icon}</span>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
