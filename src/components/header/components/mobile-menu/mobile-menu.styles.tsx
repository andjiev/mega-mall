import React from 'react';
import styled from 'styled-components';

import { Drawer, ListItem } from '@material-ui/core';

const StyledDrawer = styled(Drawer)`
  background-color: #f0f5ff;
`;

const StyledListItem = styled(props => {
  return <ListItem {...props} />;
})`
  border-bottom: 2px solid ${props => props.theme.palette.grey[400]};
`;

export { StyledDrawer, StyledListItem };
