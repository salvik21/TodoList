import Link from 'next/link';
import React from 'react';

type LinkAtomProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const LinkAtom = ({ href, children, className = '' }: LinkAtomProps) => {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default LinkAtom;
