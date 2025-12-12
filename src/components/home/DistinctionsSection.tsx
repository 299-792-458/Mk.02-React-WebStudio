'use client';

import { distinctions } from '@/lib/homeContent';
import ViewportReveal from '../ViewportReveal';

export default function DistinctionsSection() {
  return (
    <section className="py-5 py-lg-6 position-relative overflow-hidden">
      <div className="studio-container position-relative">
        <div className="floating-orb orb-1" style={{ left: '18%', top: '30%', opacity: 0.28 }} />
        <div className="floating-orb orb-3" style={{ right: '12%', bottom: '10%', opacity: 0.32 }} />
        <ViewportReveal className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3 mb-4">
          <div>
            <span className="badge-pill bg-opacity-10 bg-primary text-primary">Distinctions</span>
            <h2 className="display-6 fw-bold text-white mt-3" style={{ fontFamily: 'var(--font-display)' }}>
              Why this system dominates
            </h2>
            <p className="text-muted mb-0">Technical rigor meets cinematic craft—portable across every surface you run.</p>
          </div>
          <div className="text-muted small text-uppercase letter-spacing-1">Proven patterns</div>
        </ViewportReveal>

        <div className="glass-card p-4 p-lg-5 distinctions-grid">
          {distinctions.map((item, idx) => (
            <ViewportReveal key={item.label} delay={idx * 60} className="d-flex align-items-start gap-3">
              <div className="dot-accent mt-1" />
              <div>
                <div className="text-white fw-semibold">{item.label}</div>
                <div className="text-muted">{item.detail}</div>
              </div>
            </ViewportReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
