import React from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import { ListItemText, ListItem, Link } from '@material-ui/core';

const StyledContainer = styled(Container)`
  padding: 0;
  max-width: 100%;
  top: 0;
  left: 0;
  right: 0;
  max-height: 400px;
  height: 100%;
  background-color: #0a1033;
  margin: 0px;
`;
const StyledListItem = styled(props => {
  return <ListItem {...props} />;
})`
  color: #ffffff;
`;

const StyledLink = styled(Link)`
  color: #ffffff;
`;

const StyledListItemText = styled(ListItemText)`
  color: #ffffff;
  border-bottom: 2px solid #101a50;
  line-height: 120%;
`;

const StyledBannerDiv = styled.div`
  background-image: url('./../../../../assets/images/nike.jpg');
  width: 100%;
  height: 260px;
  border: 1px solid #ffffff;
`;

export { StyledContainer, StyledListItemText, StyledListItem, StyledBannerDiv, StyledLink };
