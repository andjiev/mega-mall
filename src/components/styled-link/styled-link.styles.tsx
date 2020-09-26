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
  color: ${(props: IStyledHoverLink) =>
    props.placeToRender === 'footer' ? `${props.theme.palette.primary.contrastText}` : props.placeToRender === 'menu' ? `${props.theme.palette.primary.light}` : `${props.theme.palette.primary.contrastText}`};
  border-bottom: ${(props: IStyledHoverLink) => (props.placeToRender === 'card' ? `2px solid ${props.theme.palette.primary.contrastText}` : props.placeToRender === 'footer-link' ? `1px solid transparent` : '0px')};
  padding-bottom: ${(props: IStyledHoverLink) => (props.placeToRender === 'card' ? '5px' : '0px')};
  font-family: ${(props: IStyledHoverLink) => (props.placeToRender === 'footer' ? 'OswaldRegular, sans-serif' : '')};
  transition: 0.3s;

  &:hover {
    color: ${(props: IStyledHoverLink) =>
      props.placeToRender === 'card'
        ? `${props.theme.palette.primary.contrastText}`
        : props.placeToRender === 'footer'
        ? `${props.theme.palette.primary.contrastText}`
        : props.placeToRender === 'footer-link'
        ? `${props.theme.palette.primary.contrastText}`
        : `${props.theme.palette.primary.main}`};
    border-bottom: ${(props: IStyledHoverLink) =>
      props.placeToRender === 'card' ? `2px solid ${props.theme.palette.secondary.main}` : props.placeToRender === 'footer-link' ? `1px solid ${props.theme.palette.primary.contrastText}` : '0px'};
  }
`;

// TODO i added in line 12 at the end else #E1E1E1 just to try we can change later cuz its incorect :) we only need footer style white and manu style main color :D
export { StyledHoverLink };
