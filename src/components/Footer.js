import React from 'react';
import { personalData } from '../data';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-center py-4">
      <div className="container">
        <div className="mb-3">
          {personalData.socials.map((social, index) => (
            <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="mx-2 fs-4">
              {social.icon}
            </a>
          ))}
        </div>
        <p>
          <a href={`mailto:${personalData.contact.email}`}>{personalData.contact.email}</a> | {personalData.contact.phone}
        </p>
        <p>{personalData.contact.address}</p>
        <p className="mt-3">© {currentYear} {personalData.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
