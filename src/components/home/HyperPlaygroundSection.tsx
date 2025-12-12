'use client';

import { useState } from 'react';
import { playgroundModes } from '@/lib/homeContent';
import ViewportReveal from '../ViewportReveal';

type Mode = (typeof playgroundModes)[number];

export default function HyperPlaygroundSection() {
  const [active, setActive] = useState<Mode>(playgroundModes[0]);

  return (
    <section className="py-5 py-lg-6 position-relative overflow-hidden">
      <div className="studio-container position-relative">
        <div className="floating-orb orb-1" style={{ left: '6%', top: '18%', opacity: 0.26 }} />
        <div className="floating-orb orb-2" style={{ right: '6%', top: '30%', opacity: 0.3 }} />
        <ViewportReveal className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3 mb-4">
          <div>
            <span className="badge-pill bg-opacity-10 bg-primary text-primary">Hyper playground</span>
            <h2 className="display-6 fw-bold text-white mt-3" style={{ fontFamily: 'var(--font-display)' }}>
              Swap surface modes instantly
            </h2>
            <p className="text-muted mb-0">
              Preview how the universal system behaves as portfolio, product, launch, or docs without changing stacks.
            </p>
          </div>
          <div className="text-muted small text-uppercase letter-spacing-1">Live preview</div>
        </ViewportReveal>

        <div className="row g-4">
          <div className="col-lg-5">
            <div className="glass-card p-3 p-lg-4 d-grid gap-2 playground-tabs">
              {playgroundModes.map((mode) => (
                <button
                  key={mode.id}
                  type="button"
                  className={`playground-tab ${active.id === mode.id ? 'is-active' : ''}`}
                  onClick={() => setActive(mode)}
                >
                  <div className="d-flex flex-column align-items-start">
                    <span className="text-white fw-semibold">{mode.label}</span>
                    <span className="text-muted small">{mode.headline}</span>
                  </div>
                  <span className="chevron">→</span>
                </button>
              ))}
            </div>
          </div>

          <div className="col-lg-7">
            <ViewportReveal className="glass-card p-4 p-lg-5 playground-panel h-100" variant="slide-right">
              <div className="d-flex align-items-center gap-2 small text-uppercase letter-spacing-1 text-primary mb-2">
                <span className="dot-accent" />
                {active.label}
              </div>
              <h3 className="h4 text-white">{active.headline}</h3>
              <p className="text-muted">{active.description}</p>
              <div className="d-grid gap-2 mt-3">
                {active.signals.map((signal) => (
                  <div key={signal} className="d-flex align-items-start gap-2 rounded-3 p-3 bg-opacity-10 bg-light">
                    <span className="dot-accent mt-1" />
                    <span className="text-white">{signal}</span>
                  </div>
                ))}
              </div>
              <div className="playground-visual mt-4" aria-hidden>
                <div className="playground-grid">
                  <div className="playground-hero" />
                  <div className="playground-rail" />
                  <div className="playground-rail rail-2" />
                  <div className="playground-chip chip-1" />
                  <div className="playground-chip chip-2" />
                  <div className="playground-chip chip-3" />
                </div>
              </div>
            </ViewportReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
