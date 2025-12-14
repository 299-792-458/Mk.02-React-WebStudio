'use client';

import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';

export default function FinalCta() {
  return (
    <section className="final-cta">
      <div className="studio-container">
        <div className="final-shell glass-card">
          <div>
            <p className="mono-pill">Let&apos;s build the flagship</p>
            <h3>Show investors, partners, and recruits what you can really ship.</h3>
            <p className="section-copy">
              We&apos;ll align on narrative, design system, and launch roadmap—then ship a site that looks iconic, loads fast,
              and proves your technical edge.
            </p>
          </div>

          <Link href={siteConfig.primaryCta.href} className="btn btn-primary hero-btn" aria-label={siteConfig.primaryCta.label}>
            {siteConfig.primaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
