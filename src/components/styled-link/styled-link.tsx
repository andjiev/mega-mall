import React from 'react';

import { StyledHoverLink } from './styled-link.styles';
import { LinkProps } from '@material-ui/core';

const StyledLink = (props: LinkProps) => {
  return <StyledHoverLink {...props}>{props.children}</StyledHoverLink>;
};

StyledLink.defaultProps = {
  underline: 'none',
  placeToRender: 'menu'
};
/* TODO { React does not recognize the `placeToRender` prop on a DOM element.
 * If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `placetorender` instead.
 * If you accidentally passed it from a parent component, remove it from the DOM element.} -> this error is because of the placeToRender prop that has been added.
 * The unknown-prop warning will fire if you attempt to render a DOM element with a prop that is not recognized by React as a legal DOM attribute/property.
 * You should ensure that your DOM elements do not have spurious props floating around.
 * https://reactjs.org/warnings/unknown-prop.html -> read here.
 */
export default StyledLink;
