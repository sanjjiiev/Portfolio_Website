import React from 'react';
import { personalData } from '../data';

function Education() {
  return (
    <section className="mb-4">
      <h2 className="mb-3" data-text="Education">Education</h2>
      {personalData.education.map((edu, index) => (
        <div key={index}>
          <h5>{edu.school}</h5>
          <p>{edu.degree}</p>
          <p>{edu.timeline} | {edu.location}</p>
          <p>{edu.cgpa}</p>
        </div>
      ))}
    </section>
  );
}

export default Education;
