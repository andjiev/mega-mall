import React from 'react';
import styled from 'styled-components';

import { Box } from '@material-ui/core';

const StyledBox = styled(Box)`
  color: ${props => props.theme.palette.primary.main};
  cursor: pointer;
  transition: 0.3s;
  display: inline-block;

  &:hover {
    color: ${props => props.theme.palette.secondary.main};
  }
`;

export { StyledBox };
