
'use client';

import Link, { type LinkProps } from 'next/link';
import React from 'react';

type LoadingLinkProps = LinkProps & {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  'aria-label'?: string;
};

// This component is now a simple wrapper around Next.js's Link.
// The loading state is handled globally by NavigationEvents.
export default function LoadingLink({ children, ...props }: LoadingLinkProps) {
  return (
    <Link {...props}>
      {children}
    </Link>
  );
}
