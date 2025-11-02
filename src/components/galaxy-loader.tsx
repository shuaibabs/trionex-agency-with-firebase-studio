
'use client';

import { motion } from 'framer-motion';
import Logo from './icons/logo';

const containerVariants = {
  start: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const circleVariants = {
  start: {
    y: '50%',
  },
  end: {
    y: '150%',
  },
};

const circleTransition = {
  duration: 0.5,
  repeat: Infinity,
  repeatType: 'reverse' as const,
  ease: 'easeInOut',
};

export default function GalaxyLoader() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-background">
      <div className="relative flex flex-col items-center justify-center">
        <Logo className="h-10 mb-8" />
        <div className="flex h-24 w-24 items-center justify-center">
            <motion.div
                className="absolute h-16 w-16 rounded-full border-2 border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
                className="absolute h-24 w-24 rounded-full border-2 border-primary/40"
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            />
             <motion.div
                className="absolute h-20 w-20 rounded-full border-t-2 border-b-2 border-primary"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />
        </div>
        <p className="mt-8 text-lg text-muted-foreground animate-pulse">Loading Universe...</p>
      </div>
    </div>
  );
}
