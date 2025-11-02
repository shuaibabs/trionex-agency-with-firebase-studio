'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Star = ({
  x,
  y,
  size,
  duration,
  delay,
  isMoving,
}: {
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  isMoving: boolean;
}) => {
  if (isMoving) {
    return (
      <motion.div
        className="absolute rounded-full bg-white"
        style={{
          left: `${x}%`,
          top: `${y}%`,
          width: size,
          height: size,
          boxShadow: '0 0 4px #fff, 0 0 8px #fff',
        }}
        animate={{
          x: [0, Math.random() * 200 - 100, 0],
          y: [0, Math.random() * 200 - 100, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
          delay,
        }}
      />
    );
  }

  return (
    <motion.div
      className="absolute rounded-full bg-white"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        boxShadow: '0 0 2px #fff, 0 0 4px #fff',
      }}
      animate={{
        opacity: [0.2, 1, 0.2],
        scale: [0.8, 1.2, 0.8],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
        delay,
      }}
    />
  );
};

export function Starfield({
  starCount = 200,
  movingStarCount = 20,
  className,
}: {
  starCount?: number;
  movingStarCount?: number;
  className?: string;
}) {
  const [stars, setStars] = useState<any[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < starCount + movingStarCount; i++) {
        const isMoving = i < movingStarCount;
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * (isMoving ? 2.5 : 1.5) + 1,
          duration: isMoving
            ? Math.random() * 20 + 20
            : Math.random() * 5 + 3,
          delay: Math.random() * 5,
          isMoving,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, [starCount, movingStarCount]);

  return (
    <div
      className={cn(
        'absolute inset-0 -z-10 h-full w-full overflow-hidden',
        className
      )}
    >
      {stars.map((star) => (
        <Star key={star.id} {...star} />
      ))}
    </div>
  );
}
