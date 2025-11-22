'use client';

import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import { siteConfig } from '@/lib/siteConfig';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-5 mt-auto border-top border-1 border-opacity-10 border-white-50">
      <Container className="studio-container">
        <Row className="gy-4">
          <Col md={5}>
            <div className="badge-pill bg-opacity-10 bg-primary text-primary mb-3">{siteConfig.shortName}</div>
            <h5 className="text-light-emphasis mb-3">{siteConfig.tagline}</h5>
            <p className="mb-0 text-muted">{siteConfig.description}</p>
          </Col>
          <Col md={4} sm={6}>
            <h6 className="text-uppercase text-muted fw-semibold mb-3">Navigate</h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-decoration-none text-muted">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
          <Col md={3} sm={6}>
            <h6 className="text-uppercase text-muted fw-semibold mb-3">Connect</h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              {siteConfig.socials.map((social) => (
                <li key={social.href}>
                  <a href={social.href} target="_blank" rel="noreferrer" className="text-decoration-none text-muted">
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
        <Row className="pt-4 mt-4 border-top border-opacity-10">
          <Col className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
            <small className="text-muted">© {year} {siteConfig.name}. All rights reserved.</small>
            <div className="d-flex gap-3">
              <Link href="/privacy" className="text-decoration-none text-muted small">
                Privacy
              </Link>
              <Link href="/terms" className="text-decoration-none text-muted small">
                Terms
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
