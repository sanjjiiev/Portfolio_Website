import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className=" text-Black align-items-center justify-content-center" id="home">
     <div className="text-center" data-aos="fade-up">
      <img 
          src="/profile.jpg" 
          alt="Sanjjiiev S" 
          className="rounded-circle mb-3 profile-img" 
        />
  <p className="lead">Computer Science| Web & AI Developer | Engineer</p>
  <a href="#projects" className="btn btn-outline-light mt-3">View My Work</a>
</div>
    </div>
  );
}

export default Hero;
