'use client';

import { Row, Col } from 'react-bootstrap';
import { universalLayers, systemSignals } from '@/lib/homeContent';

export default function UniversalSystemSection() {
  return (
    <section id="system" className="py-5">
      <div className="studio-container">
        <div className="glass-card p-4 p-lg-5 position-relative overflow-hidden system-card">
          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3 mb-4">
            <div>
              <span className="badge-pill bg-opacity-10 bg-primary text-primary">Universal system</span>
              <h2 className="display-6 fw-bold text-white mt-3" style={{ fontFamily: 'var(--font-display)' }}>
                The operating system for portfolio, product, and launch
              </h2>
              <p className="text-muted mb-0" style={{ maxWidth: '640px' }}>
                One content model, component kit, and governance layer so your site can switch contexts without losing
                speed or consistency.
              </p>
            </div>
            <div className="d-flex flex-wrap gap-2">
              {systemSignals.map((signal) => (
                <span key={signal.label} className="badge bg-opacity-10 bg-light text-light text-uppercase letter-spacing-1">
                  {signal.value}
                </span>
              ))}
            </div>
          </div>
          <Row className="g-3 g-lg-4">
            {universalLayers.map((layer) => (
              <Col key={layer.title} md={4}>
                <div className="system-tile h-100 p-3 p-lg-4">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="badge rounded-pill bg-opacity-10 bg-primary text-primary">{layer.tag}</span>
                    <span className="text-muted small letter-spacing-1">Layer</span>
                  </div>
                  <h3 className="h5 text-white">{layer.title}</h3>
                  <p className="text-muted small mb-3">{layer.description}</p>
                  <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                    {layer.signals.map((signal) => (
                      <li key={signal} className="d-flex align-items-center gap-2 text-muted small">
                        <span className="dot-accent" />
                        <span>{signal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </section>
  );
}
