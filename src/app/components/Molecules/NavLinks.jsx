import React from 'react'
import Link from '../atoms/Link/LinkAtom'
import { NavLinkText, NavLinkText2, NavLinkText3 } from '../../../../utils/constants';

const NavLinks = () => {
  return (
    <nav className="flex gap-6 items-center py-4">
      <Link
        href="/"
        text={NavLinkText}
        className="font-semibold px-4 py-2 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition"
      />
      <Link
        href="/about"
        text={NavLinkText2}
        className="font-semibold px-4 py-2 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition"
      />
      <Link
        href="/contact"
        text={NavLinkText3}
        className="font-semibold px-4 py-2 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition"
      />
    </nav>
  );
};


export default NavLinks