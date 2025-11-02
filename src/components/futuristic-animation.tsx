
'use client';

import { motion } from 'framer-motion';
import React from 'react';

// --- SVG Icon Components for Planets ---

const ReactIcon = () => (
  <svg width="32" height="32" viewBox="-11.5 -10.23 23 20.46" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB"></circle>
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"></ellipse>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse>
    </g>
  </svg>
);

const NodeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.71 6.34C11.39 5.54 10.5 5 9.5 5H4C2.9 5 2 5.9 2 7V17C2 18.1 2.9 19 4 19H9.5C10.5 19 11.39 18.46 11.71 17.66L14 12L11.71 6.34Z" fill="#8CC84B"/>
    <path d="M12.29 6.34C12.61 5.54 13.5 5 14.5 5H20C21.1 5 22 5.9 22 7V17C22 18.1 21.1 19 20 19H14.5C13.5 19 12.61 18.46 12.29 17.66L10 12L12.29 6.34Z" fill="#68A063"/>
  </svg>
);

const GoogleIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.35 11.1H12.18V13.83H18.69C18.36 17.64 15.19 19.27 12.19 19.27C8.36 19.27 5 16.25 5 12C5 7.9 8.2 5 12 5C14.5 5 16.09 6.8 16.09 6.8L17.93 5.11C17.93 5.11 15.47 3 12 3C6.38 3 2 7.5 2 12C2 16.5 6.38 21 12 21C17.62 21 22 16.5 22 12C22 11.64 21.35 11.1 21.35 11.1Z" fill="#4285F4"/>
        <path d="M21.35 11.1H12.18V13.83H18.69C18.36 17.64 15.19 19.27 12.19 19.27C8.36 19.27 5 16.25 5 12C5 7.9 8.2 5 12 5C14.5 5 16.09 6.8 16.09 6.8L17.93 5.11C17.93 5.11 15.47 3 12 3C6.38 3 2 7.5 2 12C2 16.5 6.38 21 12 21C17.62 21 22 16.5 22 12C22 11.64 21.35 11.1 21.35 11.1Z" opacity="0.4" fill="#FBBC05"/>
        <path d="M21.35 11.1H12.18V13.83H18.69C18.36 17.64 15.19 19.27 12.19 19.27C8.36 19.27 5 16.25 5 12C5 7.9 8.2 5 12 5C14.5 5 16.09 6.8 16.09 6.8L17.93 5.11C17.93 5.11 15.47 3 12 3C6.38 3 2 7.5 2 12C2 16.5 6.38 21 12 21C17.62 21 22 16.5 22 12C22 11.64 21.35 11.1 21.35 11.1Z" opacity="0.4" fill="#EA4335"/>
        <path d="M21.35 11.1H12.18V13.83H18.69C18.36 17.64 15.19 19.27 12.19 19.27C8.36 19.27 5 16.25 5 12C5 7.9 8.2 5 12 5C14.5 5 16.09 6.8 16.09 6.8L17.93 5.11C17.93 5.11 15.47 3 12 3C6.38 3 2 7.5 2 12C2 16.5 6.38 21 12 21C17.62 21 22 16.5 22 12C22 11.64 21.35 11.1 21.35 11.1Z" opacity="0.4" fill="#34A853"/>
    </svg>
);


const MetaIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.02C6.49 2.02 2.02 6.49 2.02 12C2.02 17.51 6.49 21.98 12 21.98C17.51 21.98 21.98 17.51 21.98 12C21.98 6.49 17.51 2.02 12 2.02ZM16.54 16.54C16.33 17.42 15.54 18.02 14.61 18.02H9.39C8.46 18.02 7.67 17.42 7.46 16.54L6.03 10.5H17.97L16.54 16.54Z" fill="url(#meta-gradient)"/>
        <path d="M12 6C9.24 6 7 8.24 7 11V12H17V11C17 8.24 14.76 6 12 6Z" fill="url(#meta-gradient)" opacity="0.7"/>
        <defs>
            <linearGradient id="meta-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0062E0"/>
                <stop offset="1" stopColor="#19AFFF"/>
            </linearGradient>
        </defs>
    </svg>
);

const ExpressIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 16H28" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 7L13 16L9 25" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 7L23 16L19 25" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const HTMLIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 3H20L18 19L12 21L6 19L4 3Z" fill="#E34F26"/>
        <path d="M12 5V19.5L17 18L18.5 5H12Z" fill="#F16529"/>
        <path d="M12 9H9.5L9.25 7H12V9ZM9.4 12L12 12V14H7.5L7.6 15L12 15V17L9.5 16.5L9.4 15.5H7.2L7.5 18L12 19.5V17.5L14.5 16.5" fill="#EBEBEB"/>
        <path d="M12 9V7H16.75L16.5 9H12ZM12 12H16.25L16.1 14H12V12ZM12 15V17.5L14.5 16.5L14.7 15H12Z" fill="white"/>
    </svg>
);

const CSSIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 3H20L18 19L12 21L6 19L4 3Z" fill="#1572B6"/>
        <path d="M12 5V19.5L17 18L18.5 5H12Z" fill="#33A9DC"/>
        <path d="M12 9H9.5L9.25 7H12V9ZM9.4 12H12V14H7.5L7.6 15L12 15V17L9.5 16.5L9.4 15.5H7.2L7.5 18L12 19.5V17.5" fill="white"/>
        <path d="M12 9V7H16.75L16.5 9H12ZM12 12H16.25L16.1 14H12V12ZM12 15V17.5L14.5 16.5L14.7 15H12Z" fill="#EBEBEB"/>
    </svg>
);

const JSIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3H21V21H3V3Z" fill="#F7DF1E"/>
        <path d="M11.53 17.55C11.83 17.94 12.28 18.23 12.82 18.23C13.48 18.23 13.98 17.84 13.98 17.15C13.98 16.57 13.68 16.22 13.02 15.77L12.44 15.32C11.71 14.74 11.37 14.33 11.37 13.61C11.37 12.89 11.89 12.32 12.69 12.32C13.43 12.32 13.92 12.79 14.16 13.4L12.5 14.16C12.38 13.82 12.11 13.62 11.85 13.62C11.59 13.62 11.37 13.79 11.37 14.09C11.37 14.36 11.53 14.55 12.03 14.94L12.59 15.39C13.43 16.07 13.98 16.59 13.98 17.47C13.98 18.52 13.15 19.23 12.03 19.23C10.97 19.23 10.22 18.67 9.87 17.9L11.53 17.55ZM17.13 17.65C17.45 17.97 17.85 18.23 18.39 18.23C19.11 18.23 19.64 17.75 19.64 16.88V12.48H21.2V16.85C21.2 18.49 20.03 19.5 18.42 19.5C17.14 19.5 16.23 18.83 15.79 17.93L17.45 17.65H17.13Z" fill="black"/>
    </svg>
);

const WordpressIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.5 14.65L17.15 15.9L14.7 10.4L12.4 15.85L11.95 14.55L10.25 9.7L8.3 14.8L7.85 13.55L6.5 13.55L8.9 18.15L10.45 12.95L12.05 17.95L14.75 9.15L17.5 14.65Z" fill="#21759B"/>
        <path d="M18.5 8C18.22 8 18 8.22 18 8.5C18 8.78 18.22 9 18.5 9C18.78 9 19 8.78 19 8.5C19 8.22 18.78 8 18.5 8Z" fill="#21759B"/>
    </svg>
);


// --- Planet Component ---
const Planet = ({
  icon,
  orbitRadius,
  duration,
  initialAngle,
  size,
  zIndex,
  scale,
}: {
  icon: React.ReactNode;
  orbitRadius: number;
  duration: number;
  initialAngle: number;
  size: number;
  zIndex: number;
  scale: number;
}) => {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2"
      style={{
        width: size,
        height: size,
        transformStyle: 'preserve-3d',
        zIndex,
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
          scale,
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

const Orbit = ({ radius, duration, angleX, angleY, children, ...props }: { radius: number, duration: number, angleX: number, angleY: number, children?: React.ReactNode }) => (
  <motion.div
    className="absolute top-1/2 left-1/2 border-2 border-dashed border-primary/20 rounded-full"
    style={{
        width: radius * 2,
        height: radius * 2,
        marginLeft: -radius,
        marginTop: -radius,
        transformStyle: 'preserve-3d',
        transform: `rotateX(${angleX}deg) rotateY(${angleY}deg)`,
    }}
    animate={{ rotate: 360 }}
    transition={{ duration: duration, repeat: Infinity, ease: "linear"}}
    {...props}
  >
      {children}
  </motion.div>
);


export default function FuturisticAnimation() {
  const planets = [
    // Inner Orbit
    { id: 'react', icon: <ReactIcon />, orbitRadius: 80, duration: 12, initialAngle: 0, size: 36, scale: 1, zIndex: 10 },
    { id: 'node', icon: <NodeIcon />, orbitRadius: 80, duration: 12, initialAngle: 180, size: 36, scale: 1, zIndex: 10 },
    
    // Middle Orbit
    { id: 'js', icon: <JSIcon />, orbitRadius: 140, duration: 20, initialAngle: 45, size: 36, scale: 1, zIndex: 20 },
    { id: 'html', icon: <HTMLIcon />, orbitRadius: 140, duration: 20, initialAngle: 135, size: 36, scale: 1, zIndex: 20 },
    { id: 'css', icon: <CSSIcon />, orbitRadius: 140, duration: 20, initialAngle: 225, size: 36, scale: 1, zIndex: 20 },
    { id: 'express', icon: <ExpressIcon />, orbitRadius: 140, duration: 20, initialAngle: 315, size: 36, scale: 1, zIndex: 20 },

    // Outer Orbit
    { id: 'google', icon: <GoogleIcon />, orbitRadius: 200, duration: 30, initialAngle: 90, size: 36, scale: 1, zIndex: 30 },
    { id: 'meta', icon: <MetaIcon />, orbitRadius: 200, duration: 30, initialAngle: 270, size: 36, scale: 1, zIndex: 30 },
    { id: 'wordpress', icon: <WordpressIcon />, orbitRadius: 200, duration: 30, initialAngle: 0, size: 36, scale: 1, zIndex: 30 },
  ];

  return (
    <div className="relative flex items-center justify-center w-full h-full scale-75 sm:scale-90 md:scale-100">
      <div className="relative w-[420px] h-[420px]" style={{ perspective: 1000 }}>
        
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
          <Orbit radius={80} duration={12} angleX={60} angleY={20}/>
          <Orbit radius={140} duration={20} angleX={60} angleY={20}/>
          <Orbit radius={200} duration={30} angleX={60} angleY={20}/>

          {planets.map(planet => (
            <Planet key={planet.id} {...planet} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
