import styled from 'styled-components';
import { Nav, NavLink, NavItem } from 'reactstrap';
import HomeCenterSubmenu from '../home-center-submenu/home-center-submenu';
import { StyledContainer } from '../home-center-submenu/home-center-submenu.styles';

const themePink = '#BF1736';

const CenterMenuWrapper = styled.div`
  max-width: 1029px;
  width: 100%;
  margin: 0 auto;
  display: block;
`;

const CenterMenuContainer = styled.div`
  width: 100%;
  top: 0;
  background-color: #0d1440;
  box-shadow: rgba(0, 0, 0, 0.46);
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  font-size: 14px;
`;

const StyledNav = styled(Nav)`
  justify-content: space-between;
`;

const StyledLink = styled(NavLink)`
  color: #ffffff;
  padding: 20px 0px;
  width: 100%;
  transition: 0.3s;

  &:hover {
    color: ${themePink};
  }
`;

const StyledNavItem = styled(NavItem)`
  border-bottom: 2px solid transparent;
  transition: 0.3s;
  &:hover {
    border-bottom: 2px solid ${themePink};
  }
  &:hover ${StyledContainer} {
    display: inline-block;
  }
  &:active {
    border-bottom: 2px solid ${themePink};
  }
`;

export { CenterMenuContainer, CenterMenuWrapper, StyledNav, StyledLink, StyledNavItem };
