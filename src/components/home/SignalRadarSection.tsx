'use client';

import { signalRadar } from '@/lib/homeContent';
import ViewportReveal from '../ViewportReveal';

export default function SignalRadarSection() {
  return (
    <section className="py-5 py-lg-6 position-relative overflow-hidden">
      <div className="studio-container position-relative">
        <div className="floating-orb orb-1" style={{ left: '12%', top: '28%', opacity: 0.25 }} />
        <div className="floating-orb orb-2" style={{ right: '10%', top: '12%', opacity: 0.25 }} />
        <ViewportReveal className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3 mb-4">
          <div>
            <span className="badge-pill bg-opacity-10 bg-primary text-primary">Signal radar</span>
            <h2 className="display-6 fw-bold text-white mt-3" style={{ fontFamily: 'var(--font-display)' }}>
              Live telemetry, cinematic presentation
            </h2>
            <p className="text-muted mb-0">Signals from performance, motion, accessibility, content ops, and governance.</p>
          </div>
          <div className="text-muted small text-uppercase letter-spacing-1">Always watching</div>
        </ViewportReveal>

        <div className="row g-3 g-lg-4">
          {signalRadar.map((item, idx) => (
            <div key={item.label} className="col-6 col-lg-4">
              <ViewportReveal delay={idx * 70} className="glass-card p-3 p-lg-4 radar-card h-100">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <span className="text-muted small text-uppercase letter-spacing-1">{item.label}</span>
                  <span className="radar-pip" />
                </div>
                <div className="radar-shell">
                  <div className="radar-ring" />
                  <div className="radar-ring ring-2" />
                  <div className="radar-dot" style={{ inset: `${30 + idx * 4}% ${20 + (idx % 3) * 10}% auto auto` }} />
                  <div className="radar-needle" style={{ transform: `rotate(${item.value * 1.8}deg)` }} />
                </div>
                <div className="d-flex align-items-baseline gap-1 text-white fw-bold fs-2 mt-3">
                  <span>{item.value}</span>
                  <span className="fs-6 text-muted">/100</span>
                </div>
                <div className="text-muted">{item.detail}</div>
              </ViewportReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
