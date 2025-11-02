
'use client';

import { motion } from 'framer-motion';
import React from 'react';

export default function FuturisticAnimation() {
  return (
    <div className="relative flex items-center justify-center w-full h-full scale-75 sm:scale-90 md:scale-100">
      <div className="relative w-[350px] h-[350px]" style={{ perspective: 1000 }}>
        {/* Main 3D container */}
        <motion.div
            className="w-full h-full"
            style={{ transformStyle: 'preserve-3d' }}
            animate={{ rotateY: 360 }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 60 }}
        >
            {/* Outer Dashed Ring */}
            <motion.div
                className="absolute inset-[-40px] rounded-full border border-dashed border-primary/20"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateZ: -360 }}
                transition={{ repeat: Infinity, ease: 'linear', duration: 50 }}
            />
            {/* Inner Dashed Ring */}
            <motion.div
                className="absolute inset-[30px] rounded-full border-2 border-dashed border-primary/30"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateZ: 360 }}
                transition={{ repeat: Infinity, ease: 'linear', duration: 40 }}
            />
            
            {/* Central Orb */}
            <motion.div
              className="absolute top-1/2 left-1/2 w-10 h-10 rounded-full bg-primary/20"
              style={{
                transform: 'translate(-50%, -50%)',
                boxShadow: '0 0 15px hsl(var(--primary)), 0 0 30px hsl(var(--primary) / 0.7)',
                transformStyle: 'preserve-3d',
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
               <div className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-primary" style={{transform: 'translate(-50%, -50%)'}}></div>
            </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
