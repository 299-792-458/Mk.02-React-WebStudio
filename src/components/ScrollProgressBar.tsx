'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      const value = scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0;
      setProgress(value);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div className="scroll-progress-shell" aria-hidden="true">
      <div className="scroll-progress-fill" style={{ width: `${progress * 100}%` }} />
    </div>
  );
}
