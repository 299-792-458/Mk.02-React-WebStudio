'use client';

import { testimonials } from '@/lib/homeContent';
import { FaQuoteLeft } from 'react-icons/fa';

export default function TestimonialsSection() {
  return (
    <section className="py-5">
      <div className="studio-container">
        <div className="text-center mb-5">
          <span className="badge-pill bg-opacity-10 bg-primary text-primary">Signals</span>
          <h2 className="display-6 fw-bold text-white mt-3" style={{ fontFamily: 'var(--font-display)' }}>
            Momentum our partners feel
          </h2>
        </div>
        <div className="row g-4">
          {testimonials.map((item) => (
            <div key={item.author} className="col-md-6">
              <figure className="glass-card h-100 p-4 p-lg-5">
                <FaQuoteLeft className="text-primary opacity-75 mb-4" size={32} />
                <blockquote className="blockquote text-white fs-5">“{item.quote}”</blockquote>
                <figcaption className="blockquote-footer text-muted mt-3">
                  {item.author}
                  <cite className="d-block text-muted">{item.title}</cite>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
