'use client';

import { caseStudies } from '@/lib/homeContent';

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-5">
      <div className="hypernova-container">
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end mb-4 gap-3">
          <div>
            <span className="badge-pill bg-opacity-10 bg-primary text-primary">Case Studies</span>
            <h2 className="display-6 fw-bold text-white mt-3" style={{ fontFamily: 'var(--font-display)' }}>
              Proof in production
            </h2>
          </div>
          <p className="text-muted mb-0" style={{ maxWidth: '520px' }}>
            Every engagement is measured against growth KPIs. Here’s how Hypernova Studio reimagined customer journeys for
            ambitious teams.
          </p>
        </div>
        <div className="d-grid gap-4">
          {caseStudies.map((item) => (
            <article key={item.client} className="glass-card p-4 p-lg-5">
              <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-4">
                <div>
                  <h3 className="h4 text-white mb-2">{item.client}</h3>
                  <p className="text-muted mb-0">{item.summary}</p>
                </div>
                <div className="text-lg-end">
                  <span className="badge rounded-pill bg-opacity-10 bg-primary text-primary px-3 py-2 fw-semibold">
                    {item.result}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}