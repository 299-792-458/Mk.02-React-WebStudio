'use client';

import Link from 'next/link';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import { siteConfig } from '@/lib/siteConfig';

const pillars = [
  { title: 'Portfolio spine', detail: 'Cinematic hero, case gallery, social-grade exports' },
  { title: 'Product layer', detail: 'Docs, onboarding, and pricing that ship from the same system' },
  { title: 'Launch kit', detail: 'Campaign drops, press kits, and experiments with analytics baked-in' },
];

const heroStats = [
  { label: 'Deploy footprint', value: 'global edge' },
  { label: 'Performance floor', value: '<1s LCP' },
  { label: 'Design tokens', value: 'multi-brand' },
];

export default function RebootHero() {
  return (
    <section className="reboot-hero" id="home">
      <div className="hero-ambient-grid" />
      <div className="hero-aurora" />
      <div className="studio-container">
        <div className="hero-shell">
          <div className="hero-meta">
            <span className="mono-pill">Flagship studio · Universal web system</span>
            <span className="hero-spark" />
          </div>
          <div className="hero-content">
            <div className="hero-copy">
              <h1>
                Iconic. Minimal.
                <br />
                Engineered to flex for product, portfolio, and launch.
              </h1>
              <p>
                We fuse design systems, performance engineering, and cinematic motion into one adaptable site. Built to
                win enterprise trust, inspire talent, and move faster than the market.
              </p>
              <div className="hero-actions">
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                <Link href={siteConfig.primaryCta.href} className="btn btn-primary hero-btn" aria-label={siteConfig.primaryCta.label}>
                  {siteConfig.primaryCta.label}
                  <FaArrowRight />
                </Link>
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                <Link href="/showreel" className="ghost-btn" aria-label="See live system">
                  <FaPlay />
                  Live system tour
                </Link>
              </div>
              <div className="hero-grid">
                {pillars.map((pillar) => (
                  <div key={pillar.title} className="hero-pillars glass-card">
                    <div className="hero-pillars__title">{pillar.title}</div>
                    <div className="hero-pillars__detail">{pillar.detail}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-right glass-card">
              <div className="hero-right__badge">Live build matrix</div>
              <div className="hero-right__stats">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="stat-line">
                    <span>{stat.label}</span>
                    <span>{stat.value}</span>
                  </div>
                ))}
              </div>
              <div className="hero-right__timeline">
                <div className="timeline-row">
                  <span>Discovery</span>
                  <span>Day 01-05</span>
                </div>
                <div className="timeline-row">
                  <span>System & design</span>
                  <span>Day 06-14</span>
                </div>
                <div className="timeline-row">
                  <span>Build & ship</span>
                  <span>Day 15-30</span>
                </div>
              </div>
              <div className="hero-right__footer">
                <span className="mono-pill">Edge rendered</span>
                <span className="mono-pill">Motion tuned</span>
                <span className="mono-pill">Analytics ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
