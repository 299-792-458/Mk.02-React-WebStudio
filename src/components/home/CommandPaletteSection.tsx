'use client';

import { useState } from 'react';
import { commandPaletteShortcuts } from '@/lib/homeContent';
import ViewportReveal from '../ViewportReveal';

export default function CommandPaletteSection() {
  const [active, setActive] = useState(commandPaletteShortcuts[0]);

  return (
    <section className="py-5 py-lg-6 position-relative overflow-hidden">
      <div className="studio-container position-relative">
        <div className="floating-orb orb-1" style={{ left: '6%', top: '20%', opacity: 0.3 }} />
        <div className="floating-orb orb-2" style={{ right: '8%', top: '12%', opacity: 0.25 }} />
        <ViewportReveal className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3 mb-4">
          <div>
            <span className="badge-pill bg-opacity-10 bg-primary text-primary">Command palette</span>
            <h2 className="display-6 fw-bold text-white mt-3" style={{ fontFamily: 'var(--font-display)' }}>
              Type once, ship everywhere
            </h2>
            <p className="text-muted mb-0">
              A universal command surface to spawn cases, docs, press packs, or experiments with guardrails already baked in.
            </p>
          </div>
          <div className="text-muted small text-uppercase letter-spacing-1">Keyboard-first</div>
        </ViewportReveal>

        <div className="row g-4 align-items-stretch">
          <div className="col-lg-6">
            <div className="glass-card p-3 p-lg-4 d-grid gap-2 command-palette">
              {commandPaletteShortcuts.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`command-row ${active.id === item.id ? 'is-active' : ''}`}
                  onClick={() => setActive(item)}
                >
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="d-flex flex-column align-items-start">
                      <span className="text-white fw-semibold">{item.label}</span>
                      <span className="text-muted small">{item.signal}</span>
                    </div>
                    <span className="kbd-pill">{item.action}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="col-lg-6">
            <ViewportReveal className="glass-card h-100 p-4 p-lg-5 command-terminal" variant="slide-right">
              <div className="d-flex align-items-center gap-2 small text-uppercase letter-spacing-1 text-primary">
                <span className="dot-accent" />
                {active.action}
              </div>
              <h3 className="h4 text-white mt-3 mb-3">{active.label}</h3>
              <p className="text-muted">{active.description}</p>
              <div className="terminal-shell mt-4">
                <div className="terminal-header d-flex align-items-center gap-2 text-muted small">
                  <span className="terminal-dot" />
                  <span className="terminal-dot" />
                  <span className="terminal-dot" />
                  <span className="text-uppercase letter-spacing-1">universal-cli</span>
                </div>
                <div className="terminal-body">
                  <pre className="mb-0 text-white">
{`$ universal ${active.id} --speed turbo --a11y on --motion safe
> Tokens synced across hero, case, and product surfaces
> OG + social variants rendered
> Events + dashboards wired
> Status: ready to ship`}
                  </pre>
                </div>
              </div>
            </ViewportReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
