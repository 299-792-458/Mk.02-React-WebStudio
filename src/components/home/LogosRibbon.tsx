'use client';

const logos = ['Northwind', 'Meridian', 'Fieldguide', 'Aster', 'Nocturne', 'Heliotrope'];

export default function LogosRibbon() {
  return (
    <section className="py-4 border-top border-bottom border-opacity-10 logos-ribbon">
      <div className="studio-container">
        <div className="overflow-hidden">
          <div className="logos-track text-muted text-uppercase letter-spacing-1 small">
            {[...logos, ...logos].map((logo, idx) => (
              <span key={`${logo}-${idx}`} className="me-4 me-lg-5">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
