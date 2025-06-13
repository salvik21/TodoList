type LinkAtomProps = {
  href: string;
  text: string;
  className?: string;
};

import Link from 'next/link';

export default function LinkAtom({ href, text, className = '' }: LinkAtomProps) {
  return (
    <Link href={href} className={className}>
      {text}
    </Link>
  );
}
