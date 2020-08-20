import React from 'react';
import { connect } from 'react-redux';

import { AppDispatch } from 'index';
import ApplicationState from 'store/application-store';
import * as HeaderStore from 'store/header-store';

import { TopBar } from './components/top-bar';
import { Menu } from './components/menu';
import { SubMenu } from './components/sub-menu';
import { CategoryTypes } from 'lib/enums';
import MainLogo from './components/logo/logo';
import { Grid, Container, Box } from '@material-ui/core';
import { SearchBarContainer } from './containers/search-bar';
import { StyledLink } from 'components/styled-link';

interface IHeaderProps {
  categoryType?: CategoryTypes;
  isActive: boolean;

  onCategoryChange: (value: CategoryTypes) => void;
  onSubmenuChange: (value: boolean) => void;
  onHideSubmenuChange: () => void;
}

const Header = (props: IHeaderProps) => {
  return (
    <>
      <Container maxWidth={false}>
        <Box mt={1}>
          <TopBar />
        </Box>
        <Grid container spacing={2}>
          <Grid item sm={1}>
            <StyledLink href={'/'}>
              <MainLogo />
            </StyledLink>
          </Grid>
          <Grid item sm={11}>
            <SearchBarContainer />
            <Menu isActive={props.isActive} onCategoryChange={props.onCategoryChange} onHideSubmenuChange={props.onHideSubmenuChange} />
          </Grid>
        </Grid>
      </Container>
      {props.isActive && <SubMenu categoryType={props.categoryType} onSubmenuChange={props.onSubmenuChange} onCategoryChange={props.onCategoryChange} />}
    </>
  );
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  onCategoryChange: (value: CategoryTypes) => {
    dispatch(HeaderStore.setCategoryType(value));
  },
  onSubmenuChange: (value: boolean) => {
    dispatch(HeaderStore.setIsOnSubmenu(value));

    if (!value) {
      dispatch(HeaderStore.setShowSubmenu(false));
    }
  },
  onHideSubmenuChange: () => {
    dispatch(HeaderStore.setShowSubmenu(false));
  }
});

const mapStateToProps = (state: ApplicationState) => {
  return {
    categoryType: state.header.categoryType,
    isActive: state.header.showSubmenu || state.header.isOnSubmenu
  };
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
