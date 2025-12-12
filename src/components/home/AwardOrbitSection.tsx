'use client';

import { awardTimeline } from '@/lib/homeContent';
import ViewportReveal from '../ViewportReveal';

export default function AwardOrbitSection() {
  return (
    <section className="py-5 py-lg-6">
      <div className="studio-container">
        <ViewportReveal className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3 mb-4">
          <div>
            <span className="badge-pill bg-opacity-10 bg-primary text-primary">Orbit</span>
            <h2 className="display-6 fw-bold text-white mt-3" style={{ fontFamily: 'var(--font-display)' }}>
              Proven track through the years
            </h2>
            <p className="text-muted mb-0">Recognition across systems, motion, publishing, and performance craft.</p>
          </div>
          <div className="text-muted small text-uppercase letter-spacing-1">Trajectory</div>
        </ViewportReveal>

        <div className="glass-card p-4 p-lg-5 award-grid">
          {awardTimeline.map((item, idx) => (
            <ViewportReveal key={item.year} delay={idx * 80} className="award-item">
              <div className="award-year text-primary">{item.year}</div>
              <div>
                <div className="text-white fw-semibold">{item.title}</div>
                <div className="text-muted">{item.detail}</div>
              </div>
            </ViewportReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
