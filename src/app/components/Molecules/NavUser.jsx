import React from 'react';
import Link from '../atoms/Link/LinkAtom';
import { navUserLinks } from '../../../../utils/constants';

const NavUser = () => {
  return (
    <div>
      {navUserLinks.map(( userText ) => (
        <Link
          key={userText.href}
          href={userText.href}
          className="font-semibold px-4 py-2 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition"
        >
          {userText.text}
        </Link>
      ))}
    </div>
  );
};

export default NavUser