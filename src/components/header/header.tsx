import React from 'react';

import { SearchBarContainer } from './containers';
import { HomeCenterMenu } from './containers/home-center-menu';

const Header = () => {
  return (
    <>
      <SearchBarContainer />
      <HomeCenterMenu />
    </>
  );
};

export default Header;
