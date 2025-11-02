
'use client';

import Link, { type LinkProps } from 'next/link';
import { useLoading } from '@/hooks/use-loading-store';
import React from 'react';

type LoadingLinkProps = LinkProps & {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  'aria-label'?: string;
};

export default function LoadingLink({ children, onClick, ...props }: LoadingLinkProps) {
  const { startLoading } = useLoading();

  const handleClick = () => {
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
