import React from 'react'
import NavHeader from '../Molecules/NavHeader';

import Link from '../atoms/Link/LinkAtom';
import Image from '../atoms/ImageAtom/ImageAtom';


const NavBrand = () => {
  return (
    <div>
      <Link href="/" className="inline-flex items-center gap-3" text={
        <>
          <NavHeader />
        </>     
      } />
    </div>
  )
}

export default NavBrand