import styled from 'styled-components';

import { Link } from '@material-ui/core';

const StyledHoverLink = styled(Link)`
  height: 15px;
  width: 92px;
  color: #355c7c;
  font-size: 14px;

  &:hover {
    color: ${props => props.theme.palette.secondary.main};
  }

  &:active {
    border-bottom: 2px solid #355c7c;
  }
`;

export { StyledHoverLink };
