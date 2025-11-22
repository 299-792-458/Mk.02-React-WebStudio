'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams?.toString();
    const url = query ? `${pathname}?${query}` : pathname;

    // Stub: replace with your analytics provider (Segment, RudderStack, etc.)
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('commonline:page_view', {
          detail: {
            url,
            timestamp: Date.now(),
          },
        })
      );
    }
  }, [pathname, searchParams]);

  return null;
}
