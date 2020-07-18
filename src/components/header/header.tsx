import React from 'react';
import { connect } from 'react-redux';

import { AppDispatch } from 'index';
import ApplicationState from 'store/application-store';
import * as HeaderStore from 'store/header-store';

import { StyledHeader } from './header.styles';
import { TopBar } from './components/top-bar';
import { Menu } from './components/menu';
import { SubMenu } from './components/sub-menu';
import { CategoryTypes } from 'lib/enums';

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
      <StyledHeader>
        <TopBar />
        <Menu isActive={props.isActive} onCategoryChange={props.onCategoryChange} onHideSubmenuChange={props.onHideSubmenuChange} />
      </StyledHeader>
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
  },
  onHideSubmenuChange: () => {
    dispatch(HeaderStore.setShowSubmenu(false));
  }
});

const mapStateToProps = (state: ApplicationState) => {
  return {
    categoryType: state.headerStore.categoryType,
    isActive: state.headerStore.showSubmenu || state.headerStore.isOnSubmenu
  };
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
