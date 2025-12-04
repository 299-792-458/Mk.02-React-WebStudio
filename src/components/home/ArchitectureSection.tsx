'use client';

import { architectureLayers } from '@/lib/homeContent';
import ViewportReveal from '@/components/ViewportReveal';

export default function ArchitectureSection() {
  return (
    <section className="py-5">
      <div className="studio-container">
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3 mb-4">
          <div>
            <span className="badge-pill bg-opacity-10 bg-primary text-primary">System Architecture</span>
            <h2 className="display-6 fw-bold text-white mt-3" style={{ fontFamily: 'var(--font-display)' }}>
              One stack, layered for scale
            </h2>
            <p className="text-muted mb-0" style={{ maxWidth: '640px' }}>
              Experience, content, and delivery layers built as a single system so portfolio, product, and launch flows stay in sync.
            </p>
          </div>
          <span className="text-muted small text-uppercase letter-spacing-1">Edge-ready foundation</span>
        </div>
        <div className="stack-layers">
          {architectureLayers.map((layer, idx) => (
            <ViewportReveal key={layer.name} delay={idx * 90} variant="lift">
              <div className="stack-card glass-card">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="badge rounded-pill bg-opacity-10 bg-primary text-primary">{layer.name}</span>
                  <span className="text-muted small letter-spacing-1">Layer {idx + 1}</span>
                </div>
                <p className="text-muted mb-3">{layer.description}</p>
                <div className="d-flex flex-wrap gap-2">
                  {layer.tech.map((item) => (
                    <span key={item} className="badge bg-opacity-10 bg-light text-light text-uppercase letter-spacing-1">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </ViewportReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
