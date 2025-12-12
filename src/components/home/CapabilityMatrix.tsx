'use client';

const capabilityColumns = [
  {
    title: 'Design engineering',
    items: ['System architecture', 'Design tokens + theming', 'Interaction + motion design', 'Accessibility + QA'],
  },
  {
    title: 'Product storytelling',
    items: ['Narrative + IA', 'Interactive pricing + menus', 'Launch kits + press hubs', 'Demo + onboarding flows'],
  },
  {
    title: 'Growth + ops',
    items: ['Analytics schema + dashboards', 'CMS + MDX authoring', 'SEO + OG automation', 'Experiment scaffolding'],
  },
];

const tracks = [
  { label: 'Signal', detail: 'Strategy + IA + motion concepts', duration: '1-2 weeks' },
  { label: 'System', detail: 'Design tokens + component library + CMS', duration: '2-3 weeks' },
  { label: 'Shipping', detail: 'Build + instrument + launch with QA', duration: '2-4 weeks' },
];

export default function CapabilityMatrix() {
  return (
    <section className="capability-matrix" id="capabilities">
      <div className="studio-container">
        <div className="section-headline">
          <p className="mono-pill">Service stack</p>
          <h2>Designers, engineers, and launch ops moving as one.</h2>
          <p className="section-copy">We ship aligned squads—concept to code, instrumented and production-ready.</p>
        </div>
        <div className="matrix-grid glass-card">
          {capabilityColumns.map((column) => (
            <div key={column.title} className="matrix-column">
              <div className="matrix-title">{column.title}</div>
              <div className="matrix-items">
                {column.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="track-grid">
          {tracks.map((track) => (
            <div key={track.label} className="track-card glass-card">
              <div className="track-head">
                <span className="mono-pill">{track.duration}</span>
                <span className="track-label">{track.label}</span>
              </div>
              <p className="track-detail">{track.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
