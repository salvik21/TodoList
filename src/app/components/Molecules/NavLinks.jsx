import React from 'react'
import Link from '../atoms/Link/LinkAtom'

const NavLinks = () => {
  return (
    <nav className="flex gap-6 items-center py-4">
      <Link
        href="/"
        text="Home"
        className="font-semibold px-4 py-2 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition"
      />
      <Link
        href="/about"
        text="About"
        className="font-semibold px-4 py-2 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition"
      />
      <Link
        href="/contact"
        text="Contact"
        className="font-semibold px-4 py-2 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition"
      />
    </nav>
  );
};


export default NavLinks