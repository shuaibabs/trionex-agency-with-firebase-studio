'use client';

import Link, { type LinkProps } from 'next/link';
import React from 'react';
import { useLoading } from '@/hooks/use-loading-store';

type LoadingLinkProps = LinkProps & {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  'aria-label'?: string;
};

// This component wraps Next.js's Link to trigger the global loading
// bar on click, providing immediate feedback to the user.
export default function LoadingLink({ children, onClick, ...props }: LoadingLinkProps) {
  const { startLoading } = useLoading();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    startLoading();
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link {...props} onClick={handleClick}>
      {children}
    </Link>
  );
}
