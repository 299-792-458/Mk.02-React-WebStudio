import Hero from '@/components/Hero';
import LatestPosts from '@/components/LatestPosts';
import CapabilitiesSection from '@/components/home/CapabilitiesSection';
import CaseStudiesSection from '@/components/home/CaseStudiesSection';
import PlaybookSection from '@/components/home/PlaybookSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import LogosRibbon from '@/components/home/LogosRibbon';
import GlobalCta from '@/components/GlobalCta';
import ShowcaseSection from '@/components/home/ShowcaseSection';
import ToolkitSection from '@/components/home/ToolkitSection';
import FaqSection from '@/components/home/FaqSection';
import ModesSection from '@/components/home/ModesSection';
import ChecklistSection from '@/components/home/ChecklistSection';
import MomentumTicker from '@/components/home/MomentumTicker';
import UniversalSystemSection from '@/components/home/UniversalSystemSection';
import ScrollScenesSection from '@/components/home/ScrollScenesSection';
import InnovationStackSection from '@/components/home/InnovationStackSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <LogosRibbon />
      <MomentumTicker />
      <UniversalSystemSection />
      <ScrollScenesSection />
      <InnovationStackSection />
      <ShowcaseSection />
      <ModesSection />
      <CapabilitiesSection />
      <ToolkitSection />
      <ChecklistSection />
      <CaseStudiesSection />
      <PlaybookSection />
      <TestimonialsSection />
      <FaqSection />
      <GlobalCta />
      <LatestPosts />
    </main>
  );
}
