'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Navbar, Nav, Container } from 'react-bootstrap';
import ThemeToggleButton from './ThemeToggleButton';
import { siteConfig } from '@/lib/siteConfig';

export default function AppNavbar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    const [base] = href.split('#');
    if (!base) {
      return pathname === '/';
    }
    return pathname === base;
  };

  return (
    <Navbar expand="lg" sticky="top" className="py-3 nav-glass" bg="body">
      <Container className="studio-container">
        <Navbar.Brand as={Link} href="/" className="fw-bold text-uppercase letter-spacing-1">
          {siteConfig.shortName}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="studio-navbar" />
        <Navbar.Collapse id="studio-navbar" className="justify-content-end">
          <Nav className="align-items-lg-center">
            {siteConfig.navLinks.map((item) => (
              <Nav.Link
                as={Link}
                key={item.href}
                href={item.href}
                className="px-lg-3 d-lg-none"
                active={isActive(item.href)}
              >
                {item.label}
              </Nav.Link>
            ))}
            <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0 ms-lg-3">
              <ThemeToggleButton />
              <Link 
                href={siteConfig.primaryCta.href} 
                className="btn btn-primary btn-sm fw-semibold"
              >
                {siteConfig.primaryCta.label}
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
