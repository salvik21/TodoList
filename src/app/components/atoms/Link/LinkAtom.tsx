type LinkAtomProps = {
  href: string;
  text: string;
  className?: string;
};

import Link from 'next/link';

const LinkAtom = ({ href, text, className = '' }: LinkAtomProps) => {
  return (
    <Link href={href} className={className}>
      {text}
    </Link>
  );
}

export default LinkAtom;
