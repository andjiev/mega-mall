import React from 'react';
import { CenterMenuContainer, CenterMenuWrapper, StyledNav, StyledLink } from './home-center-menu.styles';
import { NavItem } from 'reactstrap';
import { HomeCenterSubmenu } from '../home-center-submenu';

interface HomeMenuProps {}

const HomeCenterMenu = (props: HomeMenuProps) => {
  return (
    <CenterMenuContainer>
      <CenterMenuWrapper>
        <StyledNav>
          <NavItem>
            <StyledLink href="#">ТЕХНОЛОГИЈА</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink href="#">СПОРТ</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink href="#">МОДА</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink href="#">УБАВИНА И ЗДРАВЈЕ</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink href="#">ДОМАЌИНСТВО</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink href="#">УСЛУГИ</StyledLink>
          </NavItem>
        </StyledNav>
      </CenterMenuWrapper>
      <HomeCenterSubmenu />
    </CenterMenuContainer>
  );
};

export default HomeCenterMenu;
