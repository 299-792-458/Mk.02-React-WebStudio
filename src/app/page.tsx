import Hero from '@/components/Hero';
import LatestPosts from '@/components/LatestPosts';
import CapabilitiesSection from '@/components/home/CapabilitiesSection';
import CaseStudiesSection from '@/components/home/CaseStudiesSection';
import PlaybookSection from '@/components/home/PlaybookSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import LogosRibbon from '@/components/home/LogosRibbon';
import GlobalCta from '@/components/GlobalCta';

export default function Home() {
  return (
    <main>
      <Hero />
      <LogosRibbon />
      <CapabilitiesSection />
      <CaseStudiesSection />
      <PlaybookSection />
      <TestimonialsSection />
      <GlobalCta />
      <LatestPosts />
    </main>
  );
}