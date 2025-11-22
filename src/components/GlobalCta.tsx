import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';

export default function GlobalCta() {
  return (
    <section className="py-5">
      <div className="hypernova-container">
        <div className="glass-card p-4 p-lg-5 d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-4">
          <div>
            <span className="badge-pill bg-opacity-10 bg-primary text-primary">Partner with us</span>
            <h2 className="h2 text-white mt-3" style={{ fontFamily: 'var(--font-display)' }}>
              Ready to orchestrate your next flagship?
            </h2>
            <p className="text-muted mb-0" style={{ maxWidth: '520px' }}>
              We embed a full-stack squad across strategy, design, and engineering to launch the platforms your audience deserves.
            </p>
          </div>
          <div className="d-flex flex-column flex-sm-row gap-3">
            <Link href={siteConfig.primaryCta.href} className="btn btn-primary btn-lg fw-semibold">
              {siteConfig.primaryCta.label}
            </Link>
            <Link href="/about" className="btn btn-outline-light btn-lg">
              Meet the team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
