'use client';

import Link from 'next/link';
import { Button, Row, Col } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import { siteConfig } from '@/lib/siteConfig';

const heroHighlights = [
  'Flagship sites with purposeful motion and relentless performance budgets',
  'Portfolio storytelling built from modular, MDX-powered case studies',
  'Product surfaces that onboard, educate, and keep teams aligned',
];

const heroStats = [
  { label: 'Launches delivered', value: '58' },
  { label: 'Average LCP', value: '0.9s' },
  { label: 'Client NPS', value: '72' },
];

export default function Hero() {
  return (
    <section className="hero-section position-relative overflow-hidden">
      <div className="floating-orb orb-1" style={{ left: '65%', top: '30%' }} />
      <div className="floating-orb orb-2" />
      <div className="floating-orb orb-3" />
      <div className="position-absolute top-0 start-50 translate-middle-x w-100 h-100" style={{ pointerEvents: 'none' }}>
        <div
          className="w-75 h-75 mx-auto"
          style={{
            background: 'radial-gradient(circle at 20% 20%, rgba(var(--accent-glow), 0.25), transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
      </div>
      <div className="studio-container position-relative">
        <Row className="align-items-center gy-5">
          <Col lg={7}>
            <span className="badge-pill bg-opacity-10 bg-primary text-primary">{siteConfig.tagline}</span>
            <h1 className="display-4 fw-bold text-white mt-3" style={{ fontFamily: 'var(--font-display)' }}>
              Web systems that feel bespoke, stay fast, and tell a sharper story.
            </h1>
            <p className="lead text-muted mt-4">{siteConfig.description}</p>
            <ul className="list-unstyled d-flex flex-column gap-2 text-muted mt-4">
              {heroHighlights.map((item) => (
                <li key={item} className="d-flex align-items-center gap-3">
                  <span
                    className="d-inline-flex align-items-center justify-content-center rounded-circle"
                    style={{ width: '10px', height: '10px', background: 'var(--accent-secondary)' }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-3 mt-4">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <Button as={Link as any} href={siteConfig.primaryCta.href} size="lg" variant="primary" className="d-inline-flex align-items-center gap-2 btn-animated">
                {siteConfig.primaryCta.label}
                <FaArrowRight />
              </Button>
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <Button as={Link as any} href={siteConfig.secondaryCta.href} size="lg" variant="outline-light" className="text-white-50">
                {siteConfig.secondaryCta.label}
              </Button>
            </div>
          </Col>
          <Col lg={5}>
            <div className="glass-card p-4 p-lg-5 h-100">
              <div className="d-flex flex-column gap-4">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="d-flex justify-content-between align-items-center">
                    <span className="text-muted text-uppercase small letter-spacing-1">{stat.label}</span>
                    <span className="fs-3 fw-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-5">
                <p className="text-muted small mb-2 text-uppercase letter-spacing-1">Trusted by teams shipping at scale</p>
                <div className="d-flex flex-wrap gap-3">
                  {['Northwind', 'Meridian', 'Aster', 'Fieldguide'].map((brand) => (
                    <span key={brand} className="badge bg-opacity-10 bg-light text-light text-uppercase letter-spacing-1">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
