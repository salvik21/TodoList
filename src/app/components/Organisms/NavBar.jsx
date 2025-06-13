import React from 'react'
import NavBrand from './NavBrand';
import NavLinks from '../Molecules/NavLinks';

import NavUser from '../Molecules/NavUser';

const NavBar = () => {
  return (
    <header className="w-full bg-white shadow-md py-3 px-6 flex items-center justify-between mb-6">
      <NavBrand />
      <NavLinks />
      <NavUser />

    </header>
  );
};

export default NavBar