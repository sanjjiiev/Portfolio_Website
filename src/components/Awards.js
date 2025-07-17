import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FaAward, FaTrophy } from 'react-icons/fa';

function Awards({ darkMode }) {
  const awards = [
    {
      title: "Finalist – Uyir Hackathon",
      desc: "Selected as finalist for developing an AI-powered SOS System for autonomous vehicles.",
      link: "https://github.com/sanjjiiev/Smart-Sheild",
      icon: <FaTrophy />
    },
    {
      title: "Swachhata Hi Seva",
      desc: "Recognized for active participation in the National Service Scheme (NSS) camp.",
      link: "https://github.com/sanjjiiev/Awards/blob/main/swachhata_hi_seva.pdf",
      icon: <FaAward />
    },
  ];

  return (
    <section className="mb-4">
      <h2 className="mb-3">Awards</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {awards.map((award, idx) => (
          <Col key={idx}>
            <Card className="h-100 shadow-sm text-white bg-dark">
              <Card.Body>
                <Card.Title className="d-flex align-items-center gap-2">
                  {award.icon} {award.title}
                </Card.Title>
                <Card.Text>{award.desc}</Card.Text>
                <a
                  href={award.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={darkMode ? 'text-info' : 'text-primary'}
                >
                  View Award →
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default Awards;
