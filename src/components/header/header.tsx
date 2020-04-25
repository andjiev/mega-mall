import React from 'react';

import { StyledHeader } from './header.styles';
import { TopBar } from './components/top-bar';
import { Menu } from './components/menu';

const Header = () => {
  return (
    <>
      <StyledHeader>
        <TopBar />
        <Menu />
      </StyledHeader>
    </>
  );
};

export default Header;
