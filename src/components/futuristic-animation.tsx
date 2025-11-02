
'use client';

import { motion } from 'framer-motion';
import Logo from './icons/logo';

export default function FuturisticAnimation() {
  return (
    <div className="relative flex items-center justify-center w-full h-full scale-75 sm:scale-90 md:scale-100">
      <motion.div
        className="w-[350px] h-[350px]"
        style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
      >
        {/* Outermost ring, rotating on Y-axis */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateY: 360 }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 25,
          }}
        />
        
        {/* Middle ring, rotating on X-axis */}
        <motion.div
          className="absolute inset-0 rounded-full border border-accent/50"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateX: 360 }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 20,
          }}
        />

        {/* Inner ring, rotating on Y-axis but faster */}
         <motion.div
          className="absolute top-[50px] left-[50px] w-[250px] h-[250px] rounded-full border border-primary/20"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateY: -360 }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 18,
          }}
        />

        {/* Logo at the Core with futuristic animation */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
           animate={{
            scale: [1, 1.1, 1],
            filter: [
              'drop-shadow(0 0 2px hsl(var(--primary) / 0.5))',
              'drop-shadow(0 0 8px hsl(var(--primary) / 0.8))',
              'drop-shadow(0 0 2px hsl(var(--primary) / 0.5))',
            ],
          }}
          transition={{
            repeat: Infinity,
            ease: 'easeInOut',
            duration: 4,
          }}
        >
            <Logo className="h-12 w-auto" />
        </motion.div>
        
      </motion.div>
    </div>
  );
}
