
'use client';

import { motion } from 'framer-motion';

export default function FuturisticAnimation() {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      {/* Base static circle */}
      <div className="absolute w-[250px] h-[250px] rounded-full border border-primary/20" />
      <div className="absolute w-[350px] h-[350px] rounded-full border border-accent/10" />

      {/* Innermost rotating circle */}
      <motion.div
        className="absolute w-[50px] h-[50px] rounded-full border-2 border-primary"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 10,
        }}
      />
      
      {/* Second circle, counter-rotating */}
      <motion.div
        className="absolute w-[150px] h-[150px] rounded-full border border-dashed border-accent/50"
        animate={{ rotate: -360 }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 15,
        }}
      />
      
      {/* Pulsing circle */}
      <motion.div
        className="absolute w-[200px] h-[200px] rounded-full border border-primary/50"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          repeat: Infinity,
          ease: 'easeInOut',
          duration: 4,
        }}
      />
      
       {/* Outer rotating dashed circle */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full border-2 border-dashed border-primary/30"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 25,
        }}
      />

       {/* Fast inner orb */}
       <motion.div
        className="absolute w-2 h-2 rounded-full bg-primary"
        style={{
          originX: '100px',
          originY: '100px'
        }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 5
        }}
      />
    </div>
  );
}
