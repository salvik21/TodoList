import React from 'react'
import NavHeader from '../Molecules/NavHeader';
import NavIcon from '../Molecules/NavIcon';
import Link from '../atoms/Link/LinkAtom';


const NavBrand = () => {
  return (
    <div>
      <Link href="/"
      className="inline-flex items-center gap-3"
      text={
        <>
          <NavIcon />
          <NavHeader />
        </>     
      } />
    </div>
  )
}

export default NavBrand