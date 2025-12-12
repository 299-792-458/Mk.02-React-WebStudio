export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon?: string;
};

export type SiteConfig = {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  keywords: string[];
  navLinks: NavLink[];
  primaryCta: NavLink;
  secondaryCta: NavLink;
  socials: SocialLink[];
};

export const siteConfig: SiteConfig = {
  name: 'Commonline Studio',
  shortName: 'Commonline',
  tagline: 'Iconic, minimal, and engineered to flex for product, portfolio, and launch.',
  description:
    'Commonline Studio ships universal-grade web systems with cinematic motion, performance guardrails, and launch ops built in—so you can sell, teach, and ship from one flagship.',
  url: 'https://commonline.studio',
  keywords: [
    'web studio',
    'next.js',
    'portfolio website',
    'design engineering',
    'product storytelling',
    'brand systems',
    'universal website',
    'portfolio os',
    'launch kit',
  ],
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'System', href: '/#system' },
    { label: 'Work', href: '/#case-studies' },
    { label: 'Services', href: '/#capabilities' },
    { label: 'Insights', href: '/blog' },
    { label: 'About', href: '/about' },
  ],
  primaryCta: { label: 'Start a build sprint', href: '/contact' },
  secondaryCta: { label: 'See the system', href: '/#system' },
  socials: [
    { label: 'GitHub', href: 'https://github.com/commonline-studio' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/commonline-studio/' },
    { label: 'X (Twitter)', href: 'https://x.com/commonlinestudio' },
    { label: 'YouTube', href: 'https://www.youtube.com/@commonlinestudio' },
  ],
};
