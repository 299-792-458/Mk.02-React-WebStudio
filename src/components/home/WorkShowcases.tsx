'use client';

const showcases = [
  {
    title: 'Bio/AI platform',
    summary: 'End-to-end brand + product site with live pricing, gated labs, and launch drops.',
    metric: 'Lift: +38% demo intent',
  },
  {
    title: 'Infra intelligence',
    summary: 'System rewrite for speed, accessibility, and modular marketing at enterprise scale.',
    metric: 'TTFB: 38ms edge',
  },
  {
    title: 'Consumer fintech',
    summary: 'Portfolio-to-product experience with motion-led hero, docs, and support surfaces.',
    metric: 'CSAT: +22 pts',
  },
];

export default function WorkShowcases() {
  return (
    <section className="work-showcases" id="case-studies">
      <div className="studio-container">
        <div className="section-headline">
          <p className="mono-pill">Selected systems</p>
          <h2>Modern, minimal, and built to impress investors, partners, and talent.</h2>
        </div>
        <div className="showcase-grid">
          {showcases.map((item) => (
            <div key={item.title} className="showcase-card glass-card">
              <div className="showcase-ring" aria-hidden />
              <div className="showcase-top">
                <span className="mono-pill">{item.metric}</span>
                <span className="showcase-title">{item.title}</span>
              </div>
              <p className="showcase-summary">{item.summary}</p>
              <div className="showcase-footer">Full case study →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
