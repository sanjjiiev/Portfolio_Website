import React from 'react';
import { about } from '../data';

function About() {
  return (
    <section className="mb-4">
      <h2 className="mb-3" data-text={about.title}>{about.title}</h2>
      <p>
        {about.description}
      </p>
    </section>
  );
}

export default About;
