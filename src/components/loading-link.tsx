'use client';

import Link, { type LinkProps } from 'next/link';
import React from 'react';
import { useLoading } from '@/hooks/use-loading-store';
import { usePathname } from 'next/navigation';

type LoadingLinkProps = LinkProps & {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  'aria-label'?: string;
};

// This component wraps Next.js's Link.
// It triggers the global loading bar on click.
export default function LoadingLink({ children, onClick, ...props }: LoadingLinkProps) {
  const { startLoading } = useLoading();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only start loading if the route is different
    if (props.href !== pathname) {
      startLoading();
    }
    // We can still allow custom onClick handlers to run if passed.
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
