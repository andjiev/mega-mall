import styled from 'styled-components';

import { Box } from '@material-ui/core';

const StyledBox = styled(Box)`
  border-bottom: 2px solid transparent;
  transition: 0.3s;

  &:hover {
    border-bottom: 2px solid ${props => props.theme.palette.secondary.main};
  }
  &:active {
    border-bottom: 2px solid ${props => props.theme.palette.secondary.main};
  }
`;

export { StyledBox };
