import styled from 'styled-components';
import { Nav, NavLink } from 'reactstrap';

const CenterMenuWrapper = styled.div`
  max-width: 1029px;
  width: 100%;
  margin: 0 auto;
  display: block;
`;

const CenterMenuContainer = styled.div`
  width: 100%;
  top: 0;
  background-color: #0a1033;
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
  padding: 25px 0px;
`;

export { CenterMenuContainer, CenterMenuWrapper, StyledNav, StyledLink };
