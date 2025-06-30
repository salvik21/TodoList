import React from 'react'
import NavHeader from '@molecules/NavHeader';
import Link from '@atoms/Link/LinkAtom';



const NavBrand = () => {
  return (
    <div>
      <Link href="/" className="inline-flex items-center gap-3">
        <NavHeader />
      </Link>
    </div>
  )
}

export default NavBrand