
'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useLoading } from '@/hooks/use-loading-store';

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { startLoading, stopLoading } = useLoading();
  const [previousPath, setPreviousPath] = useState(pathname + searchParams.toString());

  useEffect(() => {
    const currentPath = pathname + searchParams.toString();
    
    if (currentPath !== previousPath) {
      // Start loading when the path changes
      startLoading();
      setPreviousPath(currentPath);
    }

    // The loading stops when the new page's content is rendered and this effect runs again.
    // However, we need to ensure it stops on the *initial* load as well.
    const timer = setTimeout(() => {
        stopLoading();
    }, 100); // A small delay to ensure rendering is complete.

    return () => clearTimeout(timer);

  }, [pathname, searchParams, startLoading, stopLoading, previousPath]);
  
  return null;
}
