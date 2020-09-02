import React from 'react';
import { connect } from 'react-redux';

import { AppDispatch } from 'index';
import ApplicationState from 'store/application-state';
import * as HeaderStore from 'store/header-store';

import { Grid, Container, Box, Hidden } from '@material-ui/core';

import { TopBar } from './components/top-bar';
import { Menu } from './components/menu';
import { SubMenu } from './components/sub-menu';
import MainLogo from './components/logo/logo';
import { SearchBarContainer } from './containers/search-bar';
import { StyledLink } from 'components/styled-link';
import { MobileTopBar } from './components/mobile-top-bar';
import { MenuItem } from 'lib/data';

interface IHeaderProps {
  menuItems: MenuItem[];
  isActive: boolean;

  onSubmenuChange: (value: boolean) => void;
  onShowSubmenuChange: () => void;
  onHideSubmenuChange: () => void;
}

const Header = (props: IHeaderProps) => {
  return (
    <>
      <Container maxWidth={false}>
        <Hidden xsDown>
          <Box mt={1}>
            <TopBar />
          </Box>
        </Hidden>
        <Hidden smUp>
          <Box mt={2} mb={1}>
            <MobileTopBar />
          </Box>
        </Hidden>
        <Grid container spacing={2}>
          <Hidden xsDown>
            <Grid item sm={1}>
              <StyledLink href={'/'}>
                <MainLogo />
              </StyledLink>
            </Grid>
          </Hidden>
          <Grid item sm={11} xs={12}>
            <Hidden smUp>
              <Box mb={2}>
                <SearchBarContainer />
              </Box>
            </Hidden>
            <Hidden xsDown>
              <SearchBarContainer />
              <Menu menuItems={props.menuItems} isActive={props.isActive} onShowSubmenuChange={props.onShowSubmenuChange} onHideSubmenuChange={props.onHideSubmenuChange} />
            </Hidden>
          </Grid>
        </Grid>
      </Container>
      {props.isActive && <SubMenu menuItems={props.menuItems} onSubmenuChange={props.onSubmenuChange} />}
    </>
  );
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  onSubmenuChange: (value: boolean) => {
    dispatch(HeaderStore.setIsOnSubmenu(value));

    if (!value) {
      dispatch(HeaderStore.setShowSubmenu(false));
    }
  },
  onShowSubmenuChange: () => {
    dispatch(HeaderStore.setShowSubmenu(true));
  },
  onHideSubmenuChange: () => {
    dispatch(HeaderStore.setShowSubmenu(false));
  }
});

const mapStateToProps = (state: ApplicationState) => {
  return {
    isActive: state.header.showSubmenu || state.header.isOnSubmenu,
    menuItems: state.shared.menuItems
  };
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
