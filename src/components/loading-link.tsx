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

// This component wraps Next.js's Link. The loading state is
// now handled globally by the NavigationEvents component.
export default function LoadingLink({ children, onClick, ...props }: LoadingLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
