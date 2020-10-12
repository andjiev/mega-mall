import styled from 'styled-components';

import { Box } from '@material-ui/core';

const StyledNavigation = styled(Box)`
  background-color: #edeef0;
  height: 100%;
  display: flex;
  flex-direction: column;

  ${props => props.theme.breakpoints.up('md')} {
    min-height: 100vh;
  }
`;

export { StyledNavigation };
