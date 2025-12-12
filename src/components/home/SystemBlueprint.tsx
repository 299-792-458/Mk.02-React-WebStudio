'use client';

const lanes = [
  {
    title: 'Narrative layer',
    description: 'Voice, narrative, and launch blocks that keep the story consistent across pages.',
    points: ['Hero + social exports', 'Case study OS', 'Launch drop templates'],
  },
  {
    title: 'Product layer',
    description: 'Product storytelling with pricing, onboarding, docs, and service menus on-brand.',
    points: ['Interactive pricing', 'Docs + onboarding', 'Support + status'],
  },
  {
    title: 'System layer',
    description: 'Design tokens, accessibility, analytics, and performance guardrails baked-in.',
    points: ['Multi-brand tokens', 'Perf + a11y budget', 'Analytics + experiments'],
  },
];

const modules = [
  { label: 'Edge-rendered hero', value: 'Streaming, parallax, CTA instrumentation' },
  { label: 'Atomic library', value: 'Composable blocks for product + editorial' },
  { label: 'Motion library', value: 'Orbits, physics, and scroll choreography' },
  { label: 'Launch grid', value: 'Campaign kits, press hubs, and realtime stats' },
];

export default function SystemBlueprint() {
  return (
    <section className="system-blueprint" id="system">
      <div className="studio-container">
        <div className="section-headline">
          <p className="mono-pill">System spine</p>
          <h2>One design-engineering system that flexes between modes.</h2>
          <p className="section-copy">
            We architect universal-grade foundations—tokens, patterns, instrumentation—so portfolio, product, and launch all
            stay in lockstep.
          </p>
        </div>
        <div className="blueprint-grid">
          <div className="blueprint-lanes glass-card">
            {lanes.map((lane) => (
              <div key={lane.title} className="lane">
                <div className="lane-title">{lane.title}</div>
                <div className="lane-description">{lane.description}</div>
                <div className="lane-points">
                  {lane.points.map((point) => (
                    <span key={point} className="mono-pill">
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="blueprint-modules">
            {modules.map((module) => (
              <div key={module.label} className="module-card glass-card">
                <div className="module-label">{module.label}</div>
                <div className="module-value">{module.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
