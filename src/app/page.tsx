import dynamic from 'next/dynamic';
import RebootHero from '@/components/home/RebootHero';

const SignalMarquee = dynamic(() => import('@/components/home/SignalMarquee'));
const RealtimeDashboard = dynamic(() => import('@/components/home/RealtimeDashboard'));
const SystemBlueprint = dynamic(() => import('@/components/home/SystemBlueprint'));

// ...

export default function Home() {
  return (
    <main>
      <RebootHero />
      <SignalMarquee />
      <RealtimeDashboard />
      <SystemBlueprint />
      <WorkShowcases />
      <CapabilityMatrix />
      <FinalCta />
    </main>
  );
}
