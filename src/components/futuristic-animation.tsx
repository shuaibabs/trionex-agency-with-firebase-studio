
'use client';

import { motion } from 'framer-motion';
import React from 'react';

// Define SVG icons as React components
const IconReact = () => (
  <svg viewBox="-11.5 -10.23 23 20.46" fill="none" className="w-full h-full">
    <circle cx="0" cy="0" r="2.05" fill="currentColor"></circle>
    <g stroke="currentColor" strokeWidth="1">
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
      fill="currentColor"
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

const IconNextJs = () => (
  <svg viewBox="0 0 128 128" fill="none" className="w-full h-full">
    <path fillRule="evenodd" clipRule="evenodd" d="M64 128C99.3462 128 128 99.3462 128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128ZM70.2747 61.7618V103.858H82.5278V74.887L108.831 24.1421H95.96L76.3999 61.7618H70.2747Z" fill="currentColor"/>
    <path d="M82.5278 24.1421H70.2747V45.1852L82.5278 24.1421Z" fill="currentColor"/>
  </svg>
);

const IconTailwind = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <path d="M16 4C9.37 4 4 9.37 4 16C4 22.63 9.37 28 16 28C22.63 28 28 22.63 28 16C28 9.37 22.63 4 16 4ZM19.5 17.5C18.67 17.5 18 18.17 18 19V22H14V12H21C22.66 12 24 13.34 24 15C24 16.66 22.66 18 21 18H19.5V17.5ZM12.5 10.5C13.33 10.5 14 9.83 14 9C14 8.17 13.33 7.5 12.5 7.5C11.67 7.5 11 8.17 11 9C11 9.83 11.67 10.5 12.5 10.5Z" fill="currentColor"/>
    <path d="M19.5 13.5H18V16.5H19.5C20.33 16.5 21 15.83 21 15C21 14.17 20.33 13.5 19.5 13.5Z" fill="currentColor"/>
  </svg>
);

const IconFirebase = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <path d="M5.33013 19.33L18.6601 3.5L14.7301 2L4.00013 8.35L5.33013 19.33Z" fill="currentColor" fillOpacity="0.8"/>
    <path d="M15.42 22L18.65 3.5L14.73 2L4 8.35L15.42 22Z" fill="currentColor"/>
    <path d="M10.2299 21.14L5.32992 19.33L4.00992 8.36L8.43992 10.84L10.2299 21.14Z" fill="currentColor" fillOpacity="0.5"/>
  </svg>
);

const IconFigma = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <path d="M15.43 5.43H8.57C7.7 5.43 7 6.13 7 7V8.57C7 9.44 7.7 10.14 8.57 10.14H15.43C16.3 10.14 17 9.44 17 8.57V7C17 6.13 16.3 5.43 15.43 5.43Z" fill="#F24E1E"/>
    <path d="M7 11.86H15.43C16.3 11.86 17 12.56 17 13.43V15C17 15.87 16.3 16.57 15.43 16.57H7V11.86Z" fill="#FF7262"/>
    <path d="M7 18.57C7 17.7 7.7 17 8.57 17H15.43C16.3 17 17 17.7 17 18.57C17 19.44 16.3 20.14 15.43 20.14H8.57C7.7 20.14 7 19.44 7 18.57Z" fill="#A259FF"/>
    <path d="M7 3.86C7 3 7.7 2.29 8.57 2.29H15.43C16.3 2.29 17 3 17 3.86V5.43H7V3.86Z" fill="#1ABCFE"/>
    <path d="M7 10.14H8.57C9.44 10.14 10.14 9.44 10.14 8.57V7H7V10.14Z" fill="#0ACF83"/>
  </svg>
);

const IconTS = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full">
    <path fill="#3178C6" d="M0 0h48v48H0z"/>
    <path fill="#FFF" d="M28.3 20.3h-4.4v13.4h4.4c5 0 8-2.6 8-7.2 0-3.9-2-6.2-8-6.2zm-1.8 10.2v-7h1.8c2.4 0 3.8 1.1 3.8 3.5s-1.3 3.5-3.8 3.5h-1.8zM14.7 20.3h6.6v3.2h-2.4v10.2h-4.3v-10.2h-2.4l2.5-3.2z"/>
  </svg>
);

const IconJS = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full">
    <path fill="#F7DF1E" d="M0 0h48v48H0z"/>
    <path d="M32 32.5c.7 1.4 1.7 2.6 3.2 3.1 1.5.5 3.2.2 4.1-1.2s.9-3.2-.2-4.1-3-1.4-4.1-2.5-1-2.9.2-3.8 2.6-1 4.1- .2 2.9-1.2 3.8-2.5 1.4-4.1.2-3.2-1.2-4.1.2-2.9 1.2-3.8zM20 32.5c.7 1.4 1.7 2.6 3.2 3.1 1.5.5 3.2.2 4.1-1.2s.9-3.2-.2-4.1-3-1.4-4.1-2.5-1-2.9.2-3.8 2.6-1 4.1- .2 2.9-1.2 3.8-2.5 1.4-4.1.2-3.2-1.2-4.1.2-2.9 1.2-3.8z"/>
  </svg>
);


const icons = [
  // Inner ring
  { icon: <IconReact />, position: 0, size: 10, distance: 100 },
  { icon: <IconNode />, position: 120, size: 10, distance: 100 },
  { icon: <IconNextJs />, position: 240, size: 10, distance: 100 },
  
  // Middle ring
  { icon: <IconTailwind />, position: 30, size: 9, distance: 160 },
  { icon: <IconGoogle />, position: 90, size: 9, distance: 160 },
  { icon: <IconFirebase />, position: 150, size: 9, distance: 160 },
  { icon: <IconFigma />, position: 210, size: 9, distance: 160 },
  { icon: <IconDatabase />, position: 270, size: 9, distance: 160 },
  { icon: <IconTS />, position: 330, size: 9, distance: 160 },
];

const outerIcons = [
    // Outer ring
  { icon: <IconJS />, position: 0, size: 8, distance: 220 },
  { icon: <IconReact />, position: 45, size: 8, distance: 220 },
  { icon: <IconNode />, position: 90, size: 8, distance: 220 },
  { icon: <IconGoogle />, position: 135, size: 8, distance: 220 },
  { icon: <IconNextJs />, position: 180, size: 8, distance: 220 },
  { icon: <IconTailwind />, position: 225, size: 8, distance: 220 },
  { icon: <IconFirebase />, position: 270, size: 8, distance: 220 },
  { icon: <IconFigma />, position: 315, size: 8, distance: 220 },
]

export default function FuturisticAnimation() {
  return (
    <div className="relative flex items-center justify-center w-full h-full scale-75 sm:scale-90 md:scale-100">
      <div className="relative w-[350px] h-[350px]" style={{ perspective: 1000 }}>
        {/* Main 3D container */}
        <motion.div
            className="w-full h-full"
            style={{ transformStyle: 'preserve-3d' }}
        >
            {/* Dashed Rings */}
            <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateZ: 360 }}
                transition={{ repeat: Infinity, ease: 'linear', duration: 40 }}
            />
             <motion.div
                className="absolute inset-[-40px] rounded-full border border-dashed border-primary/20"
                style={{ transformStyle: 'preserve-d' }}
                animate={{ rotateZ: -360 }}
                transition={{ repeat: Infinity, ease: 'linear', duration: 50 }}
            />
            
            {/* Tilted Solid Rings */}
            <motion.div
                className="absolute inset-0 rounded-full border border-accent/50"
                style={{ transformStyle: 'preserve-3d', rotateX: '60deg' }}
                animate={{ rotateY: 360 }}
                transition={{ repeat: Infinity, ease: 'linear', duration: 30 }}
            />
             <motion.div
                className="absolute inset-[30px] rounded-full border border-accent/30"
                style={{ transformStyle: 'preserve-3d', rotateX: '80deg' }}
                animate={{ rotateY: -360 }}
                transition={{ repeat: Infinity, ease: 'linear', duration: 28 }}
            />


            {/* Icons orbital path - Middle Ring */}
            <motion.div
                className="absolute top-1/2 left-1/2 w-0 h-0"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: -360 }}
                transition={{ repeat: Infinity, ease: 'linear', duration: 25 }}
            >
                {icons.map(({ icon, position, size, distance }, index) => (
                    <motion.div
                        key={`mid-${index}`}
                        className="absolute top-0 left-0 p-1 bg-background/80 backdrop-blur-sm rounded-full border border-primary/20 shadow-lg"
                        style={{
                            width: `${size*4}px`,
                            height: `${size*4}px`,
                            transformStyle: 'preserve-3d',
                            transform: `rotateY(${position}deg) translateZ(${distance}px) rotateY(-${position}deg)`,
                            marginTop: `-${size*2}px`,
                            marginLeft: `-${size*2}px`,
                        }}
                        initial={{ rotateY: 0 }}
                        animate={{ rotateY: 360 }}
                        transition={{ repeat: Infinity, ease: 'linear', duration: 25 }}
                    >
                      <div className="text-primary/70">
                        {icon}
                      </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Icons orbital path - Outer Ring */}
            <motion.div
                className="absolute top-1/2 left-1/2 w-0 h-0"
                style={{ transformStyle: 'preserve-3d', rotateX: '15deg' }}
                animate={{ rotateY: 360 }}
                transition={{ repeat: Infinity, ease: 'linear', duration: 35 }}
            >
                {outerIcons.map(({ icon, position, size, distance }, index) => (
                    <motion.div
                        key={`outer-${index}`}
                        className="absolute top-0 left-0 p-1 bg-background/60 backdrop-blur-sm rounded-full border border-primary/10 shadow-md"
                        style={{
                            width: `${size*4}px`,
                            height: `${size*4}px`,
                            transformStyle: 'preserve-3d',
                            transform: `rotateY(${position}deg) translateZ(${distance}px) rotateY(-${position}deg)`,
                            marginTop: `-${size*2}px`,
                            marginLeft: `-${size*2}px`,
                        }}
                        initial={{ rotateY: 0 }}
                        animate={{ rotateY: -360 }}
                        transition={{ repeat: Infinity, ease: 'linear', duration: 35 }}
                    >
                      <div className="text-primary/60">
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

