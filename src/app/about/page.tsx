import { siteConfig } from '@/lib/siteConfig';

export default function AboutPage() {
  const pillars = [
    {
      title: 'Small, senior crews',
      description:
        'Every engagement is run by strategists, designers, and engineers who can switch contexts from brand to build without losing the plot.',
    },
    {
      title: 'Systems with taste',
      description:
        'We balance expressive art direction with reusable foundations—tokens, libraries, and publishing flows you can keep using.',
    },
    {
      title: 'Transparent momentum',
      description:
        'Weekly demos, shared roadmaps, and instrumentation keep decisions visible from kickoff through the first iterations after launch.',
    },
  ];

  return (
    <main className="py-5">
      <div className="hypernova-container">
        <header className="text-center mb-5">
          <span className="badge-pill bg-opacity-10 bg-primary text-primary">About {siteConfig.name}</span>
          <h1 className="display-5 fw-bold text-white mt-3" style={{ fontFamily: 'var(--font-display)' }}>
            A studio for teams who want their site to feel intentional
          </h1>
          <p className="text-muted lead mt-3" style={{ maxWidth: '780px', marginInline: 'auto' }}>
            {siteConfig.name} blends story craft, product thinking, and engineering rigor. From portfolios to product surfaces,
            we build experiences that stay fast, feel premium, and are simple to update.
          </p>
        </header>

        <section className="glass-card p-4 p-lg-5 mb-5">
          <h2 className="h3 text-white">How we partner</h2>
          <p className="text-muted mb-4">
            We embed with teams to clarify the narrative, design the system, and launch fast. You keep the toolkit: component
            libraries, publishing guide, and instrumentation that makes every new release calmer.
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
              <p className="text-muted mb-0">Guides discovery, messaging, and IA. Former product lead across B2B and creator tools.</p>
            </div>
            <div>
              <h3 className="h5 text-white mb-1">Marcel Ortiz — Partner, Engineering</h3>
              <p className="text-muted mb-0">Architects resilient React platforms and observability pipelines. Obsessed with polish and performance.</p>
            </div>
            <div>
              <h3 className="h5 text-white mb-1">Riya Desai — Partner, Design</h3>
              <p className="text-muted mb-0">Leads visual language, interaction pacing, and editorial tone so every screen tells the same story.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
