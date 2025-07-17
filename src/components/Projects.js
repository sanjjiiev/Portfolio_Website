import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FaGithub, FaFilm } from 'react-icons/fa';

function Projects() {
  const projectLinks = [
    { name: "AI-powered SOS System", link: "https://github.com/sanjjiiev/Smart-Sheild" },
    { name: "Ember-to-OWL-Conversion", link: "https://github.com/sanjjiiev/Ember-to-OWL-Conversion" },
    { name: "Precision Line-Guided Robot", link: "https://github.com/sanjjiiev/Precision-Line-Guided-Autonomous-Robot" },
    { name: "Dynamic Route Optimization", link: "https://github.com/sanjjiiev/Dynamic-Route-Optimization-System" },
    { name: "E-Commerce Website", link: "https://github.com/sanjjiiev/E-commerce-Website" },
    { name: "Cannon Clash: Tank Wars", link: "https://github.com/sanjjiiev/Cannon-Clash-Tank-Wars" },
    { name: "Short Film – LOOPBACK", link: "", icon: <FaFilm /> },
  ];

  return (
    <section className="mb-4">
      <h2 className="mb-3">Projects</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {projectLinks.map((proj, idx) => (
          <Col key={idx}>
            <Card className="h-100 shadow-sm text-white bg-dark">
              <Card.Body>
                <Card.Title className="d-flex align-items-center gap-2">
                  {proj.icon || <FaGithub />} {proj.name}
                </Card.Title>
                <Card.Text>
                  {proj.link ? (
                    <a href={proj.link} target="_blank" rel="noopener noreferrer">
                      View on GitHub →
                    </a>
                  ) : (
                    <span></span>
                  )}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default Projects;
