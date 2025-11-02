
'use client';

import { useLoading } from '@/hooks/use-loading-store';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function LoadingBar() {
  const { isLoading, stopLoading } = useLoading();
  const pathname = usePathname();

  useEffect(() => {
    stopLoading();
  }, [pathname, stopLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed top-0 left-0 w-full h-1 bg-primary z-50"
          initial={{ x: '-100%' }}
          animate={{ x: '0%' }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.75, ease: 'easeInOut' }}
        />
      )}
    </AnimatePresence>
  );
}
