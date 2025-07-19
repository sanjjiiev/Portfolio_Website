import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="contact-section glass-card p-4 my-5">
      <h2 className="text-center mb-4">Contact Me</h2>

      <div className="row">
        {/* Contact Info */}
        <div className="col-md-6 mb-4">
          <ul className="list-unstyled contact-info">
            <li><FaEnvelope className="me-2" /> <a href="mailto:sanjjiiev005@gmail.com">sanjjiiev005@gmail.com</a></li>
            <li><FaPhone className="me-2" /> +91 9843065552</li>
            <li><FaMapMarkerAlt className="me-2" /> Coimbatore, Tamil Nadu, India</li>
            <li><FaGlobe className="me-2" /> Languages: English, Tamil, German (Learning)</li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="col-md-6">
          <form className="contact-form">
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Your Name" required />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Your Email" required />
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows="4" placeholder="Your Message..." required></textarea>
            </div>
            <button type="submit" className="btn btn-primary px-4">Send Message</button>
          </form>
        </div>
      </div>

      {/* Optional: Embed Google Map */}
      <div className="map-container mt-4">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.287837353753!2d76.9348603!3d11.0168448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8595c6e8f08c1%3A0xf91d0aeb79f4cc!2sCoimbatore!5e0!3m2!1sen!2sin!4v1710709697809"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;
