'use client';

import { launchScheduler } from '@/lib/homeContent';
import ViewportReveal from '../ViewportReveal';

export default function LaunchSchedulerSection() {
  return (
    <section className="py-5 py-lg-6">
      <div className="studio-container">
        <ViewportReveal className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3 mb-4">
          <div>
            <span className="badge-pill bg-opacity-10 bg-primary text-primary">Launch scheduler</span>
            <h2 className="display-6 fw-bold text-white mt-3" style={{ fontFamily: 'var(--font-display)' }}>
              Orchestration from kickoff to launch
            </h2>
            <p className="text-muted mb-0">
              A cadence with motion gates, performance guards, and publishing ops wired in every sprint.
            </p>
          </div>
          <div className="text-muted small text-uppercase letter-spacing-1">6-week runway</div>
        </ViewportReveal>

        <div className="glass-card p-3 p-lg-4 scheduler-grid">
          {launchScheduler.map((step, idx) => (
            <ViewportReveal key={step.label} delay={idx * 60} className="scheduler-row">
              <div className="d-flex align-items-center justify-content-between gap-3 w-100">
                <div className="scheduler-time badge-pill bg-opacity-10 bg-primary text-primary">{step.time}</div>
                <div className="flex-grow-1">
                  <div className="text-white fw-semibold">{step.label}</div>
                  <div className="text-muted">{step.detail}</div>
                  <div className="scheduler-bar mt-2">
                    <div className="scheduler-fill" style={{ width: `${60 + idx * 8}%` }} />
                  </div>
                </div>
              </div>
            </ViewportReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
