import React from 'react';
import { CenterMenuContainer, CenterMenuWrapper, StyledNav, StyledLink, StyledNavItem } from './home-center-menu.styles';
import { NavItem } from 'reactstrap';
import { HomeCenterSubmenu } from '../home-center-submenu';

interface HomeMenuProps {}

const HomeCenterMenu = (props: HomeMenuProps) => {
  const menuItems = [
    {
      id: 1,
      title: 'ТЕХНОЛОГИЈА'
    },
    {
      id: 2,
      title: 'СПОРТ'
    },
    {
      id: 3,
      title: 'МОДА'
    },
    {
      id: 4,
      title: 'УБАВИНА И ЗДРАВЈЕ'
    },
    {
      id: 5,
      title: 'ДОМАЌИНСТВО'
    },
    {
      id: 6,
      title: 'УСЛУГИ'
    }
  ];
  return (
    <CenterMenuContainer>
      <CenterMenuWrapper>
        <StyledNav>
          {menuItems.map(item => (
            <StyledNavItem key={item.id}>
              <StyledLink href="#">{item.title}</StyledLink>
            </StyledNavItem>
          ))}
        </StyledNav>
      </CenterMenuWrapper>
      <HomeCenterSubmenu />
    </CenterMenuContainer>
  );
};

export default HomeCenterMenu;
