'use client';

import { runwayMoments } from '@/lib/homeContent';
import ViewportReveal from '../ViewportReveal';

export default function ParallaxRunwaySection() {
  return (
    <section className="py-5 py-lg-6">
      <div className="studio-container">
        <ViewportReveal className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3 mb-4">
          <div>
            <span className="badge-pill bg-opacity-10 bg-primary text-primary">Parallax runway</span>
            <h2 className="display-6 fw-bold text-white mt-3" style={{ fontFamily: 'var(--font-display)' }}>
              Cinematic journey to launch
            </h2>
            <p className="text-muted mb-0">Layered timeline with hover-tilt cards showing each milestone.</p>
          </div>
          <div className="text-muted small text-uppercase letter-spacing-1">Guided arc</div>
        </ViewportReveal>

        <div className="row g-3 g-lg-4">
          {runwayMoments.map((moment, idx) => (
            <div key={moment.title} className="col-md-6 col-xl-3">
              <ViewportReveal delay={idx * 70} className="h-100">
                <article className="glass-card p-3 p-lg-4 runway-card h-100">
                  <div className="text-uppercase small letter-spacing-1 text-primary mb-2">{moment.metric}</div>
                  <h3 className="h5 text-white">{moment.title}</h3>
                  <p className="text-muted mb-0">{moment.description}</p>
                </article>
              </ViewportReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
