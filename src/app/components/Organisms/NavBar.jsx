import React from 'react'
import NavBrand from './NavBrand';
import NavLink from '../Molecules/NavLinks';

import NavUser from '../Molecules/NavUser';

const NavBar = () => {
  return (
    <header className="w-full bg-white shadow-md py-3 px-6 flex items-center justify-between mb-6">
      <nav className="flex items-center justify-between w-full">
      <NavBrand />
      <NavLink />
      <NavUser />
      </nav>
    </header>
  );
};

export default NavBar