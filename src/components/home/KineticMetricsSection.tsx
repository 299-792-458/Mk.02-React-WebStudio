'use client';

import { kineticMetrics } from '@/lib/homeContent';
import ViewportReveal from '../ViewportReveal';

export default function KineticMetricsSection() {
  return (
    <section className="py-5 py-lg-6 position-relative overflow-hidden">
      <div className="studio-container position-relative">
        <div className="floating-orb orb-1" style={{ left: '14%', top: '18%', opacity: 0.22 }} />
        <div className="floating-orb orb-2" style={{ right: '10%', top: '24%', opacity: 0.28 }} />
        <ViewportReveal className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3 mb-4">
          <div>
            <span className="badge-pill bg-opacity-10 bg-primary text-primary">Live metrics</span>
            <h2 className="display-6 fw-bold text-white mt-3" style={{ fontFamily: 'var(--font-display)' }}>
              Kinetic dashboard of proof
            </h2>
            <p className="text-muted mb-0">
              Performance, accessibility, and content velocity visualized with motion-safe gauges.
            </p>
          </div>
          <div className="text-muted small text-uppercase letter-spacing-1">Always-on</div>
        </ViewportReveal>

        <div className="row g-3 g-lg-4">
          {kineticMetrics.map((metric, idx) => (
            <div key={metric.label} className="col-6 col-lg-4">
              <ViewportReveal delay={idx * 60} className="glass-card p-3 p-lg-4 h-100 kinetic-card">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <span className="text-muted small text-uppercase letter-spacing-1">{metric.label}</span>
                  <span className="dot-accent" />
                </div>
                <div className="d-flex align-items-baseline gap-1 text-white fw-bold display-6">
                  <span>{metric.value}</span>
                  <span className="fs-5 text-muted">{metric.suffix}</span>
                </div>
                <div className="text-muted small">{metric.caption}</div>
                <div className="kinetic-meter mt-3">
                  <div className="kinetic-meter-fill" style={{ width: `${Math.min(metric.value, 100)}%` }} />
                </div>
              </ViewportReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
