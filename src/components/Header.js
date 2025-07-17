import React from 'react';

function Header() {
  return (
    <header className="bg-dark text-white text-center p-4 rounded mb-4">
      <h1>Sanjjiiev S</h1>
      <p>Computer Science Engineering Student</p>
      <p>
        <a href="mailto:sanjjiiev005@gmail.com" className="text-white">sanjjiiev005@gmail.com</a> | +91 9843065552
      </p>
      <p>Coimbatore, Tamil Nadu, India</p>
      <a className="btn btn-outline-light mt-2" href="https://github.com/sanjjiiev" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
    </header>
  );
}

export default Header;
