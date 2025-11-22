'use client';

import { launchChecklist } from '@/lib/homeContent';

export default function ChecklistSection() {
  return (
    <section className="py-5">
      <div className="studio-container">
        <div className="glass-card p-4 p-lg-5 d-grid gap-3">
          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3">
            <div>
              <span className="badge-pill bg-opacity-10 bg-primary text-primary">Launch Readiness</span>
              <h2 className="h3 text-white mt-3 mb-0" style={{ fontFamily: 'var(--font-display)' }}>
                Ship with confidence, not surprises
              </h2>
            </div>
            <span className="badge rounded-pill bg-opacity-10 bg-light text-light text-uppercase letter-spacing-1">Checklist</span>
          </div>
          <div className="d-grid gap-2 checklist-grid">
            {launchChecklist.map((item) => (
              <div key={item} className="d-flex align-items-center gap-3 text-muted">
                <span className="dot-accent" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
