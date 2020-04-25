import React, { useRef, useState, useEffect, createRef } from 'react';
import { CenterMenuContainer, CenterMenuWrapper, StyledNav, StyledLink, StyledNavItem } from './home-center-menu.styles';
import { HomeCenterSubmenu } from '../home-center-submenu';
import { translate } from 'lib/translate';

interface HomeMenuProps {}

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
    title: translate('EasyFind_Header_Services', 'УСЛУГИ')
  }
];

const HomeCenterMenu = (props: HomeMenuProps) => {
  const ref = createRef();

  const [hovered, setHovered] = useState(false);

  const enter = () => setHovered(true);
  const leave = () => setHovered(false);

  const StyledNavItemRef = React.forwardRef((props: any, ref) => <StyledNavItem key={props.key}>{props.children}</StyledNavItem>);

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.addEventListener('mouseenter', enter);
      ref.current.addEventListener('mouseleave', leave);
    }
  }, [ref]);

  return (
    <CenterMenuContainer>
      <CenterMenuWrapper>
        <StyledNav>
          {menuItems.map(item => (
            <StyledNavItemRef ref={ref} key={item.id}>
              <StyledLink href="#">{item.title}</StyledLink>
            </StyledNavItemRef>
          ))}
        </StyledNav>
      </CenterMenuWrapper>
      {/* <HomeCenterSubmenu /> */}

    </CenterMenuContainer>
  );
};

export default HomeCenterMenu;
