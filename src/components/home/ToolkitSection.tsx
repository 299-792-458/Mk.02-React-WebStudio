'use client';

import { toolkit } from '@/lib/homeContent';

export default function ToolkitSection() {
  return (
    <section className="py-5">
      <div className="studio-container">
        <div className="text-center mb-5">
          <span className="badge-pill bg-opacity-10 bg-primary text-primary">Toolkit</span>
          <h2 className="display-6 fw-bold text-white mt-3" style={{ fontFamily: 'var(--font-display)' }}>
            A universal stack, tailored to you
          </h2>
          <p className="text-muted mt-3">
            Narrative rails, publishing ops, and growth instrumentation prewired into a kit you can run without us.
          </p>
        </div>
        <div className="d-grid gap-3 toolkit-grid">
          {toolkit.map((item) => (
            <div key={item.label} className="glass-card p-4 d-flex flex-column gap-2 toolkit-card">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="h6 text-white mb-0">{item.label}</h3>
                <span className="badge bg-opacity-10 bg-light text-light text-uppercase letter-spacing-1">Included</span>
              </div>
              <p className="text-muted mb-0">{item.detail}</p>
              <div className="progress-shell mt-2">
                <div className="progress-fill" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
