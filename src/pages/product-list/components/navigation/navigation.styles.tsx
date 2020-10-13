import React from 'react';
import styled from 'styled-components';

import { Box, Button, Typography } from '@material-ui/core';

const StyledNavigation = styled(Box)`
  background-color: #edeef0;
  height: 100%;
  display: flex;
  flex-direction: column;

  ${props => props.theme.breakpoints.up('md')} {
    min-height: 100vh;
  }
`;

interface IStyledTypography {
  isSelected: boolean;
}
const StyledTypography = styled(props => {
  const typographyProps = { ...props };
  delete typographyProps.isSelected; // don't send custom properties to box component
  return <Typography {...typographyProps} />;
})`
  ${(props: IStyledTypography) => (props.isSelected ? `font-weight: bold;` : '')}
`;

export { StyledNavigation, StyledTypography };
