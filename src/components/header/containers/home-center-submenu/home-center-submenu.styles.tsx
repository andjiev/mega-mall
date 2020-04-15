import React from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import { ListItemText, ListItem, Link } from '@material-ui/core';
import NikeImage from '../../../../assets/images/nike.jpg';

const darkBlue = '#BF1736';
const lightBlue = '#BF1736';
const themePink = '#BF1736';

const StyledContainer = styled(Container)`
  max-width: 100%;
  top: 0;
  max-height: 400px;
  height: 100%;
  background-color: #0a1033;
  padding-bottom: 5%;
  padding-top: 3%;
  //display: none;
`;
const StyledListItem = styled(props => {
  return <ListItem {...props} />;
})`
  color: #ffffff;
`;

const StyledLink = styled(Link)`
  color: #ffffff;
  font-size: 13px;
  font-family: 'Roboto Medium', sans-serif;
  transition: 0.3s;

  &:hover {
    color: ${themePink};
    text-decoration: none;
  }
`;

const StyledListItemText = styled(ListItemText)`
  color: #ffffff;
  font-size: 16px;
  border-bottom: 2px solid #101a50;
  padding-bottom: 3%;
`;

const StyledBannerDiv = styled.div`
  background-image: url(${NikeImage});
  width: 100%;
  max-height: 260px;
  height: 100%;
  background-repeat: no-repeat;
`;

export { StyledContainer, StyledListItemText, StyledListItem, StyledBannerDiv, StyledLink };
