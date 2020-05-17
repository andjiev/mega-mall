import styled from 'styled-components';

import { Box } from '@material-ui/core';

const StyledFilter = styled(Box)`
  background-color: ${props => props.theme.palette.grey[300]};
  height: 100%;
  display: flex;
  flex-direction: column;

  ${props => props.theme.breakpoints.up('md')} {
    min-height: 100vh;
  }
`;

export { StyledFilter };
