'use client';

import { useState } from 'react';
import { faqs } from '@/lib/homeContent';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-5">
      <div className="studio-container">
        <div className="text-center mb-4">
          <span className="badge-pill bg-opacity-10 bg-primary text-primary">FAQ</span>
          <h2 className="display-6 fw-bold text-white mt-3" style={{ fontFamily: 'var(--font-display)' }}>
            How we work with you
          </h2>
          <p className="text-muted mt-3">
            Clear answers to keep decision-making fast. Want specifics? Book a session and we’ll tailor a plan.
          </p>
        </div>
        <div className="d-grid gap-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <button
                key={item.question}
                type="button"
                className="glass-card faq-card text-start p-4 p-lg-5"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <div className="d-flex justify-content-between align-items-center gap-3">
                  <h3 className="h5 text-white mb-0">{item.question}</h3>
                  <span className="badge rounded-pill bg-opacity-10 bg-primary text-primary">
                    {isOpen ? 'Hide' : 'Show'}
                  </span>
                </div>
                {isOpen && <p className="text-muted mb-0 mt-3">{item.answer}</p>}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
