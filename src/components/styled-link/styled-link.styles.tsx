import React from 'react';
import styled from 'styled-components';
import { Link } from '@material-ui/core';

interface IStyledHoverLink {
  theme: any;
  placeToRender?: string;
}
const StyledHoverLink = styled(props => {
  const linkProps = { ...props };
  delete linkProps.placeToRender;
  return <Link {...linkProps} />;
})`
  height: 15px;
  width: 92px;
  color: ${(props: IStyledHoverLink) => (props.placeToRender === 'footer' ? '#ffffff' : props.placeToRender === 'menu' ? '#355c7c' : '#ffffff')};
  border-bottom: ${(props: IStyledHoverLink) => (props.placeToRender === 'card' ? '2px solid #ffffff' : '0px')};
  padding-bottom: ${(props: IStyledHoverLink) => (props.placeToRender === 'card' ? '5px' : '0px')};

  &:hover {
    color: ${(props: IStyledHoverLink) => (props.placeToRender === 'card' ? '#ffffff' : props.theme.palette.main)};
    border-bottom: ${(props: IStyledHoverLink) => (props.placeToRender === 'card' ? '1px solid yellow' : '0px')};
  }
`;

// TODO i added in line 12 at the end else #E1E1E1 just to try we can change later cuz its incorect :) we only need footer style white and manu style main color :D
export { StyledHoverLink };
