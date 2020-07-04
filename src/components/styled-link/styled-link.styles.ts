import styled from 'styled-components';

import { Link } from '@material-ui/core';

const StyledHoverLink = styled(Link)`
  transition: 0.3s;
  color: #ffffff;
  &:hover {
    color: ${props => props.theme.palette.secondary.main};
  }
`;

export { StyledHoverLink };
