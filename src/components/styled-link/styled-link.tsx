import React from 'react';

import { StyledLink } from './styled-link.styles';
import { LinkProps } from '@material-ui/core';

const _StyledLink = (props: LinkProps) => {
  return <StyledLink {...props}>{props.children}</StyledLink>;
};

export default _StyledLink;
