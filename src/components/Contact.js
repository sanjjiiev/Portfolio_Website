import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';
import { personalData } from '../data';

function Contact() {
  return (
    <section id="contact" className="contact-section glass-card p-4 my-5">
      <h2 className="text-center mb-4">Contact Me</h2>

      <div className="row justify-content-center">
        {/* Contact Info */}
        <div className="col-md-8 text-center">
          <ul className="list-unstyled contact-info d-inline-block text-start p-4">
            <li className="mb-3 fs-5"><FaEnvelope className="me-3" /> <a href={`mailto:${personalData.contact.email}`}>{personalData.contact.email}</a></li>
            <li className="mb-3 fs-5"><FaPhone className="me-3" /> {personalData.contact.phone}</li>
            <li className="mb-3 fs-5"><FaMapMarkerAlt className="me-3" /> {personalData.contact.address}</li>
            <li className="fs-5"><FaGlobe className="me-3" /> Languages: {personalData.contact.languages}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
