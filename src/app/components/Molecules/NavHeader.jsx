import React from 'react'
import {NavTitleText} from '../../../../utils/constants';

const NavHeader = () => {
  return (
    <div>
      <h1 className="text-xl md:text-2xl font-bold tracking-tight text-green-400 dark:text-blue-200">
        {NavTitleText}
      </h1>
    </div>
  );
};

export default NavHeader;


