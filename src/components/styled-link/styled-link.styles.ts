import styled from 'styled-components';

import { Link } from '@material-ui/core';

const StyledLink = styled(Link)`
  color: #fff;
  transition: 0.3s;

  &:hover {
    color: ${props => props.theme.palette.secondary.main};
  }
`;

export { StyledLink };
