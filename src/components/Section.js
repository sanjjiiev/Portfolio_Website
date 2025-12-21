import React from 'react';

const Section = ({ id, bgImage, aosAnimation, children }) => {
  return (
    <section
      id={id}
      className="section-bg"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}${bgImage})`
      }}
    >
      <div className="section-content" data-aos={aosAnimation}>
        {children}
      </div>
    </section>
  );
};

export default Section;