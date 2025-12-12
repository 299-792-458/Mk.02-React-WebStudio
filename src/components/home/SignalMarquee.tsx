'use client';

const signals = [
  'Next 15 / React 19',
  'Edge streaming + image CDN',
  'Design tokens with theme lanes',
  'MDX + CMS ready',
  'Accessibility + perf budgets',
  'Launch automations & OG pipelines',
  'Micro-interactions & WebGL ready',
  'Analytics + event schema',
];

export default function SignalMarquee() {
  return (
    <section className="signal-marquee">
      <div className="studio-container">
        <div className="signal-track" aria-label="Capabilities ticker">
          {[...signals, ...signals].map((signal, index) => (
            <div key={`${signal}-${index}`} className="signal-chip">
              <span className="dot" />
              {signal}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
