'use client';

import { designForge } from '@/lib/homeContent';
import ViewportReveal from '../ViewportReveal';

export default function DesignForgeSection() {
  return (
    <section className="py-5 py-lg-6 position-relative overflow-hidden">
      <div className="studio-container position-relative">
        <div className="floating-orb orb-1" style={{ left: '8%', top: '28%', opacity: 0.22 }} />
        <div className="floating-orb orb-2" style={{ right: '10%', top: '18%', opacity: 0.28 }} />
        <ViewportReveal className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3 mb-4">
          <div>
            <span className="badge-pill bg-opacity-10 bg-primary text-primary">Design forge</span>
            <h2 className="display-6 fw-bold text-white mt-3" style={{ fontFamily: 'var(--font-display)' }}>
              Where design systems and engineering fuse
            </h2>
            <p className="text-muted mb-0">A production-grade forge for tokens, components, content ops, QA, and growth.</p>
          </div>
          <div className="text-muted small text-uppercase letter-spacing-1">System studio</div>
        </ViewportReveal>

        <div className="glass-card p-4 p-lg-5 forge-grid">
          {designForge.map((item, idx) => (
            <ViewportReveal key={item.label} delay={idx * 70} className="forge-row">
              <div className="dot-accent" />
              <div>
                <div className="text-white fw-semibold">{item.label}</div>
                <div className="text-muted">{item.description}</div>
              </div>
              <div className="forge-meter">
                <div className="forge-meter-fill" style={{ width: `${65 + idx * 6}%` }} />
              </div>
            </ViewportReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
