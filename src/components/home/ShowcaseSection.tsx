'use client';

import { Row, Col } from 'react-bootstrap';
import { showcaseProjects } from '@/lib/homeContent';

export default function ShowcaseSection() {
  return (
    <section className="py-5">
      <div className="studio-container">
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3 mb-4">
          <div>
            <span className="badge-pill bg-opacity-10 bg-primary text-primary">Showcase</span>
            <h2 className="display-6 fw-bold text-white mt-3" style={{ fontFamily: 'var(--font-display)' }}>
              Universal builds in the wild
            </h2>
            <p className="text-muted mb-0">
              Portfolio proof, product education, or launch drops—the same system holds up under each mode.
            </p>
          </div>
          <div className="text-muted small text-uppercase letter-spacing-1">Recent builds</div>
        </div>
        <Row className="g-4">
          {showcaseProjects.map((project) => (
            <Col md={4} key={project.title}>
              <article className="glass-card h-100 p-4 p-lg-5 showcase-card">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="badge bg-opacity-10 bg-primary text-primary">{project.category}</span>
                  <span className="text-muted small letter-spacing-1">Featured</span>
                </div>
                <h3 className="h4 text-white">{project.title}</h3>
                <p className="text-muted mt-2">{project.summary}</p>
                <ul className="list-unstyled d-flex flex-column gap-2 mt-3 mb-0">
                  {project.stats.map((stat) => (
                    <li key={stat} className="d-flex align-items-center gap-2 text-muted">
                      <span className="dot-accent" />
                      <span>{stat}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
