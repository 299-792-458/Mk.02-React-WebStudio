'use client';

import { useMemo, useState } from 'react';
import { omniDeckModes } from '@/lib/homeContent';
import ViewportReveal from '../ViewportReveal';

type Mode = (typeof omniDeckModes)[number];

export default function OmniDeckSection() {
  const [activeId, setActiveId] = useState<Mode['id']>('flagship');

  const active = useMemo(() => omniDeckModes.find((mode) => mode.id === activeId) ?? omniDeckModes[0], [activeId]);

  return (
    <section className="py-5 py-lg-6 position-relative overflow-hidden">
      <div className="studio-container position-relative">
        <div className="floating-orb orb-1" style={{ left: '10%', top: '25%', opacity: 0.4 }} />
        <div className="floating-orb orb-2" style={{ right: '12%', top: '18%', opacity: 0.4 }} />
        <ViewportReveal className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3 mb-4">
          <div>
            <span className="badge-pill bg-opacity-10 bg-primary text-primary">Omni deck</span>
            <h2 className="display-6 fw-bold text-white mt-3" style={{ fontFamily: 'var(--font-display)' }}>
              Command center for every mode
            </h2>
            <p className="text-muted mb-0">
              Swap between flagship, product, launch, and ops lenses without changing stacks. Each mode keeps the same
              tokens, motion ramps, and performance rails.
            </p>
          </div>
          <div className="text-muted small text-uppercase letter-spacing-1">Mode switcher</div>
        </ViewportReveal>

        <div className="d-grid omni-grid gap-3 align-items-start">
          <div className="glass-card p-3 p-lg-4 d-flex flex-wrap gap-2 justify-content-between">
            {omniDeckModes.map((mode) => (
              <button
                key={mode.id}
                type="button"
                className={`omni-tab ${activeId === mode.id ? 'is-active' : ''}`}
                onClick={() => setActiveId(mode.id)}
              >
                <span className="small text-uppercase letter-spacing-1 text-muted">{mode.label}</span>
                <span className="fw-semibold text-white">{mode.metric}</span>
              </button>
            ))}
          </div>

          <ViewportReveal className="glass-card p-4 p-lg-5 omni-panel" variant="slide-right">
            <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-4">
              <div className="flex-grow-1">
                <div className="d-inline-flex align-items-center gap-2 small text-uppercase letter-spacing-1 text-primary">
                  <span className="dot-accent" />
                  {active.label}
                </div>
                <h3 className="h3 text-white mt-3" style={{ fontFamily: 'var(--font-display)' }}>
                  {active.title}
                </h3>
                <p className="text-muted">{active.summary}</p>
                <div className="d-grid gap-2">
                  {active.actions.map((action) => (
                    <div key={action} className="d-flex align-items-start gap-3 rounded-3 p-3 bg-opacity-10 bg-light">
                      <span className="dot-accent mt-1" />
                      <span className="text-white">{action}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="omni-visual position-relative">
                <div className="omni-visual-grid" aria-hidden>
                  {Array.from({ length: 12 }).map((_, index) => (
                    <span key={index} className="omni-cell" />
                  ))}
                  <div className="omni-hero" />
                  <div className="omni-case" />
                  <div className="omni-product" />
                  <div className="omni-launch" />
                </div>
                <div className="small text-muted text-center mt-2">One kit, four modes, endless permutations.</div>
              </div>
            </div>
          </ViewportReveal>
        </div>
      </div>
    </section>
  );
}
