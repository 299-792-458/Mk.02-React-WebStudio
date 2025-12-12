'use client';

import { labBursts } from '@/lib/homeContent';
import ViewportReveal from '../ViewportReveal';

export default function LabBurstSection() {
  return (
    <section className="py-5 py-lg-6">
      <div className="studio-container">
        <ViewportReveal className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3 mb-4">
          <div>
            <span className="badge-pill bg-opacity-10 bg-primary text-primary">Lab sprints</span>
            <h2 className="display-6 fw-bold text-white mt-3" style={{ fontFamily: 'var(--font-display)' }}>
              Rapid bursts that feel like magic
            </h2>
            <p className="text-muted mb-0">
              Micro-programs focused on cinematic UX, performance, publishing automation, and growth instrumentation.
            </p>
          </div>
          <div className="text-muted small text-uppercase letter-spacing-1">Impact in days</div>
        </ViewportReveal>

        <div className="row g-4">
          {labBursts.map((burst, idx) => (
            <div key={burst.title} className="col-md-6 col-xl-3">
              <ViewportReveal delay={idx * 80} variant="lift" className="h-100">
                <article className="glass-card h-100 p-4 d-grid gap-3 lab-card">
                  <div className="d-inline-flex align-items-center gap-2 text-uppercase small letter-spacing-1 text-primary">
                    <span className="dot-accent" />
                    {burst.tag}
                  </div>
                  <h3 className="h4 text-white">{burst.title}</h3>
                  <p className="text-muted mb-0">{burst.description}</p>
                  <div className="lab-metric text-white fw-semibold">{burst.metric}</div>
                </article>
              </ViewportReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
