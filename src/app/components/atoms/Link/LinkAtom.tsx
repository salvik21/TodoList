import Link from 'next/link';
import React from 'react';

type LinkAtomProps = {
  href: string;
  text: string;
  className?: string;
};

const LinkAtom = ({ href, text, className = '' }: LinkAtomProps) => {
  return (
    <Link href={href} className={className}>
      {text}
    </Link>
  );
}

export default LinkAtom;
