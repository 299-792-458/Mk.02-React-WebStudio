'use client';

import { momentumMetrics } from '@/lib/homeContent';

export default function MomentumTicker() {
  return (
    <section className="py-3 border-top border-bottom border-opacity-10">
      <div className="studio-container">
        <div className="ticker-shell">
          <div className="ticker-track">
            {[...momentumMetrics, ...momentumMetrics].map((metric, idx) => (
              <div key={`${metric.label}-${idx}`} className="ticker-pill">
                <span className="text-white fw-semibold">{metric.value}</span>
                <span className="text-muted small text-uppercase letter-spacing-1">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
