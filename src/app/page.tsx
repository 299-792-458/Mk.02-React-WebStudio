import RebootHero from '@/components/home/RebootHero';
import SignalMarquee from '@/components/home/SignalMarquee';
import SystemBlueprint from '@/components/home/SystemBlueprint';
import WorkShowcases from '@/components/home/WorkShowcases';
import CapabilityMatrix from '@/components/home/CapabilityMatrix';
import FinalCta from '@/components/home/FinalCta';

export default function Home() {
  return (
    <main>
      <RebootHero />
      <SignalMarquee />
      <SystemBlueprint />
      <WorkShowcases />
      <CapabilityMatrix />
      <FinalCta />
    </main>
  );
}
