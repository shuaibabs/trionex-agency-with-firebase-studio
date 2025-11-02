
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

        {/* Logo at the Core */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
           animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            repeat: Infinity,
            ease: 'easeInOut',
            duration: 5,
          }}
        >
            <Logo className="h-12 w-auto" />
        </motion.div>
        
        {/* Fast inner orb */}
        <motion.div
            className="absolute w-3 h-3 rounded-full bg-primary/80 shadow-[0_0_8px_hsl(var(--primary))]"
            style={{
                originX: '175px',
                originY: '175px',
                transformStyle: 'preserve-3d',
                rotateY: 45
            }}
            animate={{ rotate: 360 }}
            transition={{
                repeat: Infinity,
                ease: 'linear',
                duration: 5
            }}
        />
      </motion.div>
    </div>
  );
}
