import styled from 'styled-components';

import { Link } from '@material-ui/core';

const StyledHoverLink = styled(Link)`
  color: #355c7c;
  transition: 0.3s;

  &:hover {
    color: ${props => props.theme.palette.secondary.main};
  }

  &:active {
    border-bottom: 2px solid #355c7c;
  }
`;

export { StyledHoverLink };
