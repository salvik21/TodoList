import React from 'react';
import Link from '../atoms/Link/LinkAtom';
import { NavUserLoginText, NavUserRegisterText } from '../../../../utils/constants';

const NavUser = () => {
  return (
    <div>
      <Link
        href="/user/login"
        text={NavUserLoginText}
        className="font-semibold px-4 py-2 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition"
      />
      <Link
        href="/user/register"
        text={NavUserRegisterText}
        className="font-semibold px-4 py-2 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition"
      />
    </div>
  )
}

export default NavUser