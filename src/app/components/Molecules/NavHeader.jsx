import React from 'react'
import {NavTitleText} from '../../../../utils/constants';
import Image from '../atoms/ImageAtom/ImageAtom';

const NavHeader = () => {
  return (
    <div>
      <div>
      <Image src="/favicon-32x32.png" alt="Icon" width={60} height={60} />
    </div>
      <h1 className="text-xl md:text-2xl font-bold tracking-tight text-green-400 dark:text-blue-200">
        {NavTitleText}
      </h1>
    </div>
  );
};

export default NavHeader;


