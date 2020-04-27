import React from 'react';

import { StyledHoverLink } from './styled-link.styles';
import { LinkProps } from '@material-ui/core';

const StyledLink = (props: LinkProps) => {
  return <StyledHoverLink {...props}>{props.children}</StyledHoverLink>;
};

StyledLink.defaultProps = {
  underline: 'none'
};
export default StyledLink;
