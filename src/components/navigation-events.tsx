
'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useLoading } from '@/hooks/use-loading-store';

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    // When the pathname or searchParams change, the new page has finished loading.
    stopLoading();
  }, [pathname, searchParams, stopLoading]);
  
  // The startLoading is now handled by the LoadingLink component's onClick
  // to provide immediate feedback. This component ensures the loading
  // indicator is stopped correctly when the page content is ready.

  return null;
}
