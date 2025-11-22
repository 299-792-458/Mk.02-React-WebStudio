export default function AboutPage() {
  const pillars = [
    {
      title: 'Full-stack squads',
      description:
        'Every engagement is led by product strategists, design leaders, and senior engineers working as one autonomous unit.',
    },
    {
      title: 'Systems over stunts',
      description:
        'We build enduring platforms with clear governance models, automated testing, and knowledge transfer baked in.',
    },
    {
      title: 'Transparent momentum',
      description:
        'Dashboards, weekly demos, and shared roadmaps keep teams aligned from discovery through scale-up.',
    },
  ];

  return (
    <main className="py-5">
      <div className="hypernova-container">
        <header className="text-center mb-5">
          <span className="badge-pill bg-opacity-10 bg-primary text-primary">About Hypernova Studio</span>
          <h1 className="display-5 fw-bold text-white mt-3" style={{ fontFamily: 'var(--font-display)' }}>
            We are the product strike team for ambitious brands
          </h1>
          <p className="text-muted lead mt-3" style={{ maxWidth: '780px', marginInline: 'auto' }}>
            Hypernova Studio assembles multidisciplinary squads that architect and launch legendary digital experiences.
            From composable marketing ecosystems to enterprise-grade React platforms, we build products that scale.
          </p>
        </header>

        <section className="glass-card p-4 p-lg-5 mb-5">
          <h2 className="h3 text-white">How we partner</h2>
          <p className="text-muted mb-4">
            We embed with your internal teams to accelerate discovery, ship the first release, and leave behind a self-sustaining
            system. Engagements typically run across three horizons: strategy alignment, platform implementation, and growth
            acceleration.
          </p>
          <div className="d-grid gap-4 gap-lg-5">
            {pillars.map((pillar) => (
              <div key={pillar.title}>
                <h3 className="h5 text-white">{pillar.title}</h3>
                <p className="text-muted mb-0">{pillar.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="glass-card p-4 p-lg-5">
          <h2 className="h3 text-white">Leadership snapshots</h2>
          <div className="d-grid gap-3 mt-4">
            <div>
              <h3 className="h5 text-white mb-1">Avery Han — Partner, Strategy</h3>
              <p className="text-muted mb-0">Former head of product at three unicorn startups, leads discovery and product-market fit missions.</p>
            </div>
            <div>
              <h3 className="h5 text-white mb-1">Marcel Ortiz — Partner, Engineering</h3>
              <p className="text-muted mb-0">Architected multi-tenant React platforms serving millions. Obsessed with performance and automation.</p>
            </div>
            <div>
              <h3 className="h5 text-white mb-1">Riya Desai — Partner, Design</h3>
              <p className="text-muted mb-0">Drives brand systems, interaction design, and story craft for mission-critical launches.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
