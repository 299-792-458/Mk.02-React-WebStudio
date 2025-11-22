'use client';

const logos = ['Northwind', 'Meridian', 'Fieldguide', 'Aster', 'Nocturne', 'Heliotrope'];

export default function LogosRibbon() {
  return (
    <section className="py-4 border-top border-bottom border-opacity-10">
      <div className="studio-container">
        <div className="d-flex flex-wrap justify-content-center gap-4 gap-lg-5 text-muted text-uppercase letter-spacing-1 small">
          {logos.map((logo) => (
            <span key={logo}>{logo}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
