import React from 'react';
import styled from 'styled-components';

import { ListItemText, Box, Tab, ListItem, Tabs } from '@material-ui/core';

const StyledSubMenu = styled(Box)`
  background-color: #f0f5ff;
  width: 100%;
  height: auto;
  overflow: hidden;
  position: absolute;
  z-index: 10;
  border-top: 2px solid #a7b2c4;
`;

const StyledListItemText = styled(ListItemText)`
  color: black;
  font-size: 14px;
  padding-bottom: 3%;
  font-weight: 700;

  span {
    font-family: 'OswaldBold', sans-serif;
  }
`;

const StyledIcons = styled.img`
  width: 25px;
  opacity: 0.9;
`;

const StyledTabs = styled(Tabs)`
  border-right: 2px solid #a7b2c4;
`;

interface IStyledTab {
  theme: any;
  displayBorder: boolean;
  isActive: boolean;
}
const StyledTab = styled(props => {
  const tabProps = { ...props };
  delete tabProps.displayBorer;
  return <Tab {...tabProps} />;
})`
  font-size: 14px;
  border-bottom: ${(props: IStyledTab) => (props.displayBorder ? `2px solid #A7B2C4` : '0px')};
  max-width: 100%;
  color: ${(props: IStyledTab) => (props.isActive ? props.theme.palette.primary.main : 'inherit')};
  font-weight: ${(props: IStyledTab) => (props.isActive ? '700' : 'inherit')};
  transform: ${(props: IStyledTab) => (props.isActive ? 'scale(1.1)' : 'inherit')};
  transition: transform 0.8s;

  &:hover {
    transform: scale(1.1);
    color: ${(props: IStyledTab) => props.theme.palette.primary.main};
    font-weight: 700;
  }
`;

export { StyledSubMenu, StyledListItemText, StyledTabs, StyledTab, StyledIcons };
