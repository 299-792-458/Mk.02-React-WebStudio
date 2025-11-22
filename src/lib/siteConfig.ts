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
  name: 'Hypernova Studio',
  shortName: 'Hypernova',
  tagline: 'Engineering legendary digital experiences for fearless brands.',
  description:
    'Hypernova Studio is a global React and product innovation lab architecting headless platforms, immersive storytelling, and community ecosystems.',
  url: 'https://hypernova.studio',
  keywords: [
    'react studio',
    'next.js agency',
    'digital product strategy',
    'headless cms',
    'content platform',
    'design systems',
  ],
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'Capabilities', href: '/#capabilities' },
    { label: 'Insights', href: '/blog' },
    { label: 'About', href: '/about' },
  ],
  primaryCta: { label: 'Start a project', href: '/contact' },
  secondaryCta: { label: 'View case studies', href: '/#case-studies' },
  socials: [
    { label: 'GitHub', href: 'https://github.com/hypernova-studio' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/hypernova-studio/' },
    { label: 'X (Twitter)', href: 'https://x.com/hypernovastudio' },
    { label: 'YouTube', href: 'https://www.youtube.com/@hypernovastudio' },
  ],
};
