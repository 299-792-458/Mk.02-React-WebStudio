'use client';

import { opsWallSignals } from '@/lib/homeContent';
import ViewportReveal from '../ViewportReveal';

export default function LiveOpsWallSection() {
  return (
    <section className="py-5 py-lg-6 position-relative overflow-hidden">
      <div className="studio-container position-relative">
        <div className="floating-orb orb-1" style={{ left: '10%', top: '22%', opacity: 0.24 }} />
        <div className="floating-orb orb-2" style={{ right: '12%', top: '14%', opacity: 0.28 }} />
        <ViewportReveal className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3 mb-4">
          <div>
            <span className="badge-pill bg-opacity-10 bg-primary text-primary">Ops wall</span>
            <h2 className="display-6 fw-bold text-white mt-3" style={{ fontFamily: 'var(--font-display)' }}>
              Live system health at a glance
            </h2>
            <p className="text-muted mb-0">Edge parity, performance, motion, accessibility, publishing, and observability signals.</p>
          </div>
          <div className="text-muted small text-uppercase letter-spacing-1">Always-on</div>
        </ViewportReveal>

        <div className="row g-3 g-lg-4">
          {opsWallSignals.map((item, idx) => (
            <div key={item.label} className="col-md-6 col-xl-4">
              <ViewportReveal delay={idx * 50} className="glass-card p-3 p-lg-4 ops-card h-100">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span className="text-muted small text-uppercase letter-spacing-1">{item.label}</span>
                  <span className="ops-status">{item.status}</span>
                </div>
                <div className="text-white fw-semibold">{item.detail}</div>
                <div className="ops-meter mt-3">
                  <div className="ops-meter-fill" style={{ width: `${75 + idx * 4}%` }} />
                </div>
              </ViewportReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
