import React from 'react'
import Link from '../atoms/Link/LinkAtom'
import { NavLinks } from '../../../../utils/constants';

const NavLink = () => {
  return (
    <div className="flex gap-6 items-center py-4">
      {NavLinks.map((navText) => (
        <Link
          key={navText.href}
          href={navText.href}
          className="font-semibold px-4 py-2 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition"
        >
          {navText.text}
        </Link>
      ))}
    </div>
  );
};


export default NavLink