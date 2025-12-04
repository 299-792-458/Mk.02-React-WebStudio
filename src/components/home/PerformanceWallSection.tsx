'use client';

import { performanceWall, engineeringPillars } from '@/lib/homeContent';
import ViewportReveal from '@/components/ViewportReveal';

export default function PerformanceWallSection() {
  return (
    <section className="py-5">
      <div className="studio-container">
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3 mb-4">
          <div>
            <span className="badge-pill bg-opacity-10 bg-primary text-primary">Engineering Proof</span>
            <h2 className="display-6 fw-bold text-white mt-3" style={{ fontFamily: 'var(--font-display)' }}>
              Built to big-tech standards
            </h2>
            <p className="text-muted mb-0" style={{ maxWidth: '620px' }}>
              Performance budgets, accessibility, observability, and release governance wired into every build.
            </p>
          </div>
          <span className="text-muted small text-uppercase letter-spacing-1">Guardrails on by default</span>
        </div>
        <div className="row g-4">
          {performanceWall.map((item, idx) => (
            <div key={item.label} className="col-md-4">
              <ViewportReveal variant={idx % 2 === 0 ? 'slide-left' : 'slide-right'} delay={idx * 70}>
                <div className="performance-tile glass-card h-100 p-4 p-lg-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="badge rounded-pill bg-opacity-10 bg-primary text-primary">{item.label}</span>
                    <span className="text-muted small letter-spacing-1">{item.value}</span>
                  </div>
                  <p className="text-muted mb-0">{item.detail}</p>
                  <div className="performance-meter">
                    <div className="performance-meter-fill" />
                  </div>
                </div>
              </ViewportReveal>
            </div>
          ))}
        </div>
        <div className="glass-card p-4 p-lg-5 d-grid gap-3 mt-4">
          <span className="badge rounded-pill bg-opacity-10 bg-light text-light w-auto text-uppercase letter-spacing-1">Platform practice</span>
          <div className="d-grid gap-2 engineering-grid">
            {engineeringPillars.map((pillar, idx) => (
              <ViewportReveal key={pillar} delay={idx * 40} variant="lift">
                <div className="d-flex align-items-start gap-3">
                  <span className="dot-accent mt-1" />
                  <span className="text-muted">{pillar}</span>
                </div>
              </ViewportReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
