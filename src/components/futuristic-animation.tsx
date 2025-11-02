
'use client';

import { motion } from 'framer-motion';
import React from 'react';

// Define SVG icons as React components
const IconReact = () => (
  <svg viewBox="-11.5 -10.23 23 20.46" fill="none" className="w-full h-full">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB"></circle>
    <g stroke="#61DAFB" strokeWidth="1">
      <ellipse rx="11" ry="4.2"></ellipse>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse>
    </g>
  </svg>
);

const IconNode = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <path
      d="M11.77 2.16c-1.06-.01-2.1.25-3.05.75-.94.5-1.74 1.2-2.35 2.06-1.07 1.5-1.7 3.2-1.84 5l-.23 3.5c-.06.88.16 1.75.64 2.5s1.17 1.34 2 1.73c2.72 1.28 5.92.93 8.3-1l.33-.26c.9-.72 1.62-1.63 2.1-2.67.48-1.04.7-2.18.65-3.32l-.24-4.57c-.08-1.5-.6-2.94-1.48-4.13-.5-.65-1.1-1.2-1.78-1.6-1.1-.64-2.34-.96-3.6-.9z"
      fill="#8CC84B"
    ></path>
  </svg>
);

const IconGoogle = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
    </svg>
);

const IconDatabase = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M12 6C16.4183 6 20 7.34315 20 9C20 10.6569 16.4183 12 12 12C7.58172 12 4 10.6569 4 9C4 7.34315 7.58172 6 12 6Z" stroke="currentColor" strokeWidth="2"></path>
        <path d="M12 12C16.4183 12 20 13.3431 20 15C20 16.6569 16.4183 18 12 18C7.58172 18 4 16.6569 4 15C4 13.3431 7.58172 12 12 12Z" stroke="currentColor" strokeWidth="2"></path>
        <path d="M4 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
        <path d="M20 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
    </svg>
);

const icons = [
  { icon: <IconReact />, position: 0 },
  { icon: <IconNode />, position: 60 },
  { icon: <IconGoogle />, position: 120 },
  { icon: <IconDatabase />, position: 180 },
  { icon: <IconReact />, position: 240 },
  { icon: <IconNode />, position: 300 },
];

export default function FuturisticAnimation() {
  return (
    <div className="relative flex items-center justify-center w-full h-full scale-75 sm:scale-90 md:scale-100">
      <div className="relative w-[350px] h-[350px]" style={{ perspective: 1000 }}>
        {/* Main 3D container */}
        <motion.div
            className="w-full h-full"
            style={{ transformStyle: 'preserve-3d' }}
        >
            {/* Outermost dashed ring */}
            <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: 360 }}
                transition={{
                    repeat: Infinity,
                    ease: 'linear',
                    duration: 40,
                }}
            />
            
            {/* Tilted solid ring */}
            <motion.div
                className="absolute inset-0 rounded-full border border-accent/50"
                style={{ transformStyle: 'preserve-3d', rotateX: '60deg' }}
                animate={{ rotateZ: 360 }}
                transition={{
                    repeat: Infinity,
                    ease: 'linear',
                    duration: 30,
                }}
            />

            {/* Inner smaller ring */}
            <motion.div
                className="absolute top-[50px] left-[50px] w-[250px] h-[250px] rounded-full border border-primary/20"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: -360 }}
                transition={{
                    repeat: Infinity,
                    ease: 'linear',
                    duration: 35,
                }}
            />

            {/* Icons orbital path */}
            <motion.div
                className="absolute top-[25px] left-[25px] w-[300px] h-[300px] rounded-full"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: -360 }}
                transition={{
                    repeat: Infinity,
                    ease: 'linear',
                    duration: 25,
                }}
            >
                {icons.map(({ icon, position }, index) => (
                    <motion.div
                        key={index}
                        className="absolute top-1/2 left-1/2 w-10 h-10 p-1 bg-background/80 backdrop-blur-sm rounded-full border border-primary/20 shadow-lg"
                        style={{
                            transformStyle: 'preserve-3d',
                            transform: `rotateY(${position}deg) translateZ(150px) rotateY(-${position}deg)`,
                        }}
                        // Counter-rotate the icon itself to face the camera
                        initial={{ rotateY: 0 }}
                        animate={{ rotateY: 360 }}
                        transition={{
                            repeat: Infinity,
                            ease: 'linear',
                            duration: 25,
                        }}
                    >
                      <div className="text-primary/70">
                        {icon}
                      </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
