'use client';

import { playbook } from '@/lib/homeContent';

export default function PlaybookSection() {
  return (
    <section className="py-5">
      <div className="hypernova-container">
        <div className="text-center mb-5">
          <span className="badge-pill bg-opacity-10 bg-primary text-primary">Playbook</span>
          <h2 className="display-6 fw-bold text-white mt-3" style={{ fontFamily: 'var(--font-display)' }}>
            Velocity without sacrificing craft
          </h2>
          <p className="text-muted mt-3">
            We integrate with your team as product co-founders, aligning strategy, execution, and instrumentation.
          </p>
        </div>
        <div className="d-grid gap-4 gap-lg-5">
          {playbook.map((step, index) => (
            <div key={step.name} className="d-flex flex-column flex-lg-row gap-4 gap-lg-5 align-items-start">
              <div className="badge rounded-pill bg-opacity-10 bg-light text-light fs-6 fw-semibold px-3 py-2">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div>
                <h3 className="h4 text-white">{step.name}</h3>
                <p className="text-muted mb-0">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
