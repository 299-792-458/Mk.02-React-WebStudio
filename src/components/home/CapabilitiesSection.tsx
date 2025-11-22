'use client';

import { Row, Col } from 'react-bootstrap';
import { capabilityPillars } from '@/lib/homeContent';

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-5">
      <div className="studio-container">
        <div className="text-center mb-5">
          <span className="badge-pill bg-opacity-10 bg-primary text-primary">Capabilities</span>
          <h2 className="display-6 fw-bold text-white mt-3" style={{ fontFamily: 'var(--font-display)' }}>
            Versatile services for modern launches
          </h2>
          <p className="text-muted lead mt-3">
            One studio covering storytelling, systems, and product polish—so your site can flex for campaigns, clients, and updates.
          </p>
        </div>
        <Row className="g-4">
          {capabilityPillars.map((pillar) => (
            <Col key={pillar.title} lg={4}>
              <div className="glass-card h-100 p-4">
                <h3 className="h4 fw-semibold text-white">{pillar.title}</h3>
                <p className="text-muted mt-3">{pillar.description}</p>
                <ul className="text-muted small list-unstyled d-flex flex-column gap-2 mt-4">
                  {pillar.highlights.map((item) => (
                    <li key={item} className="d-flex align-items-center gap-2">
                      <span className="badge rounded-pill bg-opacity-10 bg-primary text-primary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
