
'use client';

import { motion } from 'framer-motion';
import React from 'react';

// --- SVG Icon Components for Planets ---

const ReactIcon = () => (
  <svg width="24" height="24" viewBox="-11.5 -10.23 23 20.46" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB"></circle>
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"></ellipse>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse>
    </g>
  </svg>
);

const NodeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.71 6.34C11.39 5.54 10.5 5 9.5 5H4C2.9 5 2 5.9 2 7V17C2 18.1 2.9 19 4 19H9.5C10.5 19 11.39 18.46 11.71 17.66L14 12L11.71 6.34Z" fill="#8CC84B"/>
    <path d="M12.29 6.34C12.61 5.54 13.5 5 14.5 5H20C21.1 5 22 5.9 22 7V17C22 18.1 21.1 19 20 19H14.5C13.5 19 12.61 18.46 12.29 17.66L10 12L12.29 6.34Z" fill="#68A063"/>
  </svg>
);

const GoogleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,5 12,5C14.5,5 16.09,6.8 16.09,6.8L17.93,5.11C17.93,5.11 15.47,3 12,3C6.38,3 2,7.5 2,12C2,16.5 6.38,21 12,21C17.62,21 22,16.5 22,12C22,11.64 21.35,11.1 21.35,11.1Z" fill="#4285F4"/>
    <path d="M3.27,12.19L5.09,13.62C5.09,13.62 5,12.86 5,12C5,11.14 5.09,10.38 5.09,10.38L3.27,8.95C3.27,8.95 2.73,10.38 2.73,12C2.73,13.62 3.27,15.05 3.27,15.05" fill="#FBBC05"/>
    <path d="M12,5C14.5,5 16.09,6.8 16.09,6.8L17.93,5.11C17.93,5.11 15.47,3 12,3C9.27,3 6.91,4.36 5.09,6.38L6.91,7.81C7.82,6.55 9.73,5 12,5Z" fill="#EA4335"/>
    <path d="M12,19C9.27,19 6.91,17.64 5.09,15.62L3.27,17.05C3.27,17.05 5.73,21 12,21C15.47,21 17.93,18.89 17.93,18.89L16.09,17.2C16.09,17.2 14.5,19 12,19Z" fill="#34A853"/>
  </svg>
);

const MetaIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z" fill="url(#meta-gradient)"/>
        <path d="M12.03 8.2c-1.89 0-3.43 1.55-3.43 3.44s1.54 3.44 3.43 3.44c1.65 0 3.03-1.18 3.34-2.75h-3.34V10.8h5.83c.05.3.08.62.08 1.05 0 3.53-2.4 6.15-5.91 6.15-3.36 0-6.08-2.7-6.08-6.08S8.67 5.84 12.03 5.84c1.7 0 3.03.7 4.02 1.63l-1.9 1.83c-.56-.53-1.3-.9-2.12-.9z" fill="url(#meta-gradient)"/>
        <defs>
            <linearGradient id="meta-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0062E0"/>
                <stop offset="1" stopColor="#19AFFF"/>
            </linearGradient>
        </defs>
    </svg>
);

// --- Star Component ---
const Star = ({ size, x, y, duration }: { size: number; x: number; y: number; duration: number; }) => (
  <motion.div
    className="absolute rounded-full bg-white"
    style={{
      width: size,
      height: size,
      left: `${x}%`,
      top: `${y}%`,
    }}
    animate={{
      opacity: [0.2, 1, 0.2],
      scale: [0.8, 1.2, 0.8],
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);

// --- Planet Component ---
const Planet = ({
  icon,
  orbitRadius,
  duration,
  initialAngle,
  size,
}: {
  icon: React.ReactNode;
  orbitRadius: number;
  duration: number;
  initialAngle: number;
  size: number;
}) => {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2"
      style={{
        width: size,
        height: size,
        transformStyle: 'preserve-3d',
      }}
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <motion.div
        className="absolute flex items-center justify-center"
        style={{
          width: size,
          height: size,
          left: '50%',
          top: '50%',
          marginLeft: -size / 2,
          marginTop: -size / 2,
          transform: `translateX(${orbitRadius}px) rotate(${initialAngle}deg)`,
          transformOrigin: `-${orbitRadius}px center`,
        }}
      >
        <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: duration, repeat: Infinity, ease: 'linear' }}
        >
            {icon}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};


export default function FuturisticAnimation() {
  const stars = React.useMemo(() => 
    Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 0.5,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 3 + 2,
    })),
  []);

  const planets = [
    { id: 'react', icon: <ReactIcon />, orbitRadius: 60, duration: 10, initialAngle: 0, size: 28 },
    { id: 'node', icon: <NodeIcon />, orbitRadius: 100, duration: 15, initialAngle: 180, size: 28 },
    { id: 'google', icon: <GoogleIcon />, orbitRadius: 140, duration: 20, initialAngle: 90, size: 32 },
    { id: 'meta', icon: <MetaIcon />, orbitRadius: 180, duration: 25, initialAngle: 270, size: 32 },
  ];

  return (
    <div className="relative flex items-center justify-center w-full h-full scale-75 sm:scale-90 md:scale-100">
      <div className="relative w-[380px] h-[380px]" style={{ perspective: 1000 }}>
        {/* Stars background */}
        <div className="absolute inset-0">
          {stars.map(star => <Star key={star.id} {...star} />)}
        </div>

        {/* Central Glowing Orb */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-8 h-8 rounded-full bg-primary/30"
          style={{
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--primary) / 0.7)',
          }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Main 3D container for orbits */}
        <motion.div
          className="w-full h-full"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateY: 20, rotateX: 10 }}
          transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 20,
              ease: "easeInOut",
          }}
        >
          {planets.map(planet => (
            <Planet key={planet.id} {...planet} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

    