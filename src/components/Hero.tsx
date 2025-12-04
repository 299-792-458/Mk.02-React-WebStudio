'use client';

import Link from 'next/link';
import { Button, Row, Col } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import { siteConfig } from '@/lib/siteConfig';

const heroHighlights = [
  'One IA and design system that flexes between portfolio, product, and launch drops',
  'Motion with performance guardrails—<1s LCP targets and accessibility baked in',
  'Publishing OS with MDX + CMS, OG automation, and analytics instrumentation',
];

const heroStats = [
  { label: 'Universal builds', value: '58' },
  { label: 'Reusable modules', value: '120+' },
  { label: 'Update to live', value: '<20m' },
];

const heroModes = [
  { title: 'Portfolio OS', description: 'Cinematic hero, case-study library, social-ready exports' },
  { title: 'Product Layer', description: 'Onboarding, docs, and service menus that stay on-brand' },
  { title: 'Launch Kit', description: 'Campaign landers, press packs, and experiment hooks' },
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
              One universal-grade site for portfolio, product, and launch.
            </h1>
            <p className="lead text-muted mt-4">
              We architect a flagship system that can sell, teach, and launch without swapping stacks—keeping craft, speed,
              and governance intact as you evolve.
            </p>
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
            <div className="d-flex flex-wrap gap-2 align-items-center mt-4 text-muted small">
              <span className="badge rounded-pill bg-opacity-10 bg-light text-light text-uppercase letter-spacing-1">Portfolio</span>
              <span className="badge rounded-pill bg-opacity-10 bg-light text-light text-uppercase letter-spacing-1">Product</span>
              <span className="badge rounded-pill bg-opacity-10 bg-primary text-primary text-uppercase letter-spacing-1">Launch</span>
              <span className="text-muted">Built as one system.</span>
            </div>
          </Col>
          <Col lg={5}>
            <div className="glass-card p-4 p-lg-5 h-100 d-grid gap-4">
              <div className="d-flex flex-column gap-3">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="d-flex justify-content-between align-items-center">
                    <span className="text-muted text-uppercase small letter-spacing-1">{stat.label}</span>
                    <span className="fs-3 fw-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-top border-opacity-25 pt-3">
                <p className="text-muted small mb-3 text-uppercase letter-spacing-1">System lanes</p>
                <div className="d-grid gap-2">
                  {heroModes.map((mode) => (
                    <div key={mode.title} className="d-flex align-items-start gap-3 rounded-3 p-3 bg-opacity-10 bg-light">
                      <span className="dot-accent mt-1" />
                      <div>
                        <div className="text-white fw-semibold">{mode.title}</div>
                        <div className="text-muted small">{mode.description}</div>
                      </div>
                    </div>
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
