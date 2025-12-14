'use client';

import { ElementType, ReactNode, useEffect, useRef, useState } from 'react';

type Variant = 'lift' | 'slide-left' | 'slide-right' | 'zoom';

type Props = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  delay?: number;
  variant?: Variant;
  threshold?: number;
};

export default function ViewportReveal({
  as: Tag = 'div',
  className,
  children,
  delay = 0,
  variant = 'lift',
  threshold = 0.3,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -10% 0px',
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = Tag as any;

  return (
    <Component
      ref={ref}      className={[
        'reveal-base',
        `reveal-${variant}`,
        visible ? 'reveal-visible' : '',
        className ?? '',
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}
