import React from 'react';
import styled from 'styled-components';

import { Link } from '@material-ui/core';

interface IStyledHoverLink {
  placeToRender?: string;
}
const StyledHoverLink = styled(Link)`
  height: 15px;
  width: 92px;
  font-size: 14px;
  color: ${(props: IStyledHoverLink) => (props.placeToRender === 'footer' ? '#ffffff' : props.placeToRender === 'menu' ? '#355c7c' : '#355c7c')};

  &:hover {
    color: ${props => props.theme.palette.secondary.main};
  }
  &:active {
    border-bottom: 2px solid #355c7c;
  }
`;
// TODO i added in line 12 at the end else #E1E1E1 just to try we can change later cuz its incorect :) we only need footer style white and manu style main color :D
export { StyledHoverLink };
