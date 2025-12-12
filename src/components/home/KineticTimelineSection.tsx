'use client';

import { kineticTimeline } from '@/lib/homeContent';
import ViewportReveal from '../ViewportReveal';

export default function KineticTimelineSection() {
  return (
    <section className="py-5 py-lg-6 position-relative overflow-hidden">
      <div className="studio-container position-relative">
        <div className="floating-orb orb-1" style={{ left: '16%', top: '18%', opacity: 0.22 }} />
        <div className="floating-orb orb-2" style={{ right: '10%', top: '26%', opacity: 0.24 }} />
        <ViewportReveal className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3 mb-4">
          <div>
            <span className="badge-pill bg-opacity-10 bg-primary text-primary">Kinetic timeline</span>
            <h2 className="display-6 fw-bold text-white mt-3" style={{ fontFamily: 'var(--font-display)' }}>
              Motion + ops pulses over time
            </h2>
            <p className="text-muted mb-0">Animated bars showing how each discipline stays in the green.</p>
          </div>
          <div className="text-muted small text-uppercase letter-spacing-1">Pulsing proof</div>
        </ViewportReveal>

        <div className="glass-card p-4 p-lg-5 timeline-grid">
          {kineticTimeline.map((item, idx) => (
            <ViewportReveal key={item.label} delay={idx * 60} className="timeline-row">
              <div>
                <div className="text-white fw-semibold">{item.label}</div>
                <div className="text-muted">{item.caption}</div>
              </div>
              <div className="timeline-bar">
                <div className="timeline-fill" style={{ width: `${item.value}%` }} />
              </div>
              <div className="text-white fw-bold">{item.value}%</div>
            </ViewportReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
