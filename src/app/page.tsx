import dynamic from 'next/dynamic';
import RebootHero from '@/components/home/RebootHero';

const SignalMarquee = dynamic(() => import('@/components/home/SignalMarquee'));
const RealtimeDashboard = dynamic(() => import('@/components/home/RealtimeDashboard'));
const SystemBlueprint = dynamic(() => import('@/components/home/SystemBlueprint'));
const WorkShowcases = dynamic(() => import('@/components/home/WorkShowcases'));
const CapabilityMatrix = dynamic(() => import('@/components/home/CapabilityMatrix'));
const FinalCta = dynamic(() => import('@/components/home/FinalCta'));

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
