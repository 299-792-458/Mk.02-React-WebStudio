'use client';

import { useState } from 'react';
import { serviceModes } from '@/lib/homeContent';

export default function ModesSection() {
  const [active, setActive] = useState(serviceModes[0].label);
  const current = serviceModes.find((mode) => mode.label === active) ?? serviceModes[0];

  return (
    <section className="py-5">
      <div className="studio-container">
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3 mb-4">
          <div>
            <span className="badge-pill bg-opacity-10 bg-primary text-primary">Service Modes</span>
            <h2 className="display-6 fw-bold text-white mt-3" style={{ fontFamily: 'var(--font-display)' }}>
              Pick the starting mode, keep one system
            </h2>
            <p className="text-muted mb-0">
              We tune the engagement to universal flagship, portfolio capsule, or product layer while keeping the same system and governance underneath.
            </p>
          </div>
          <div className="d-flex flex-wrap gap-2">
            {serviceModes.map((mode) => (
              <button
                key={mode.label}
                type="button"
                className={`btn btn-sm ${mode.label === active ? 'btn-primary btn-animated' : 'btn-outline-light text-white-50'}`}
                onClick={() => setActive(mode.label)}
              >
                {mode.label}
              </button>
            ))}
          </div>
        </div>
        <div className="glass-card p-4 p-lg-5 d-grid gap-3">
          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3">
            <h3 className="h4 text-white mb-0">{current.headline}</h3>
            <span className="badge rounded-pill bg-opacity-10 bg-primary text-primary px-3 py-2">Active</span>
          </div>
          <div className="d-flex flex-wrap gap-2">
            {current.details.map((detail) => (
              <span key={detail} className="badge bg-opacity-10 bg-light text-light text-uppercase letter-spacing-1">
                {detail}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
