'use client';

import { ReactLenis } from '@studio-freight/react-lenis';

interface SmoothScrollingProps {
  children: React.ReactNode;
}

export default function SmoothScrolling({ children }: SmoothScrollingProps) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <>{children}</>
    </ReactLenis>
  );
}
