import styled from 'styled-components';
import { Box, Link } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

const StyledBox = styled(Box)`
  width: 100%;

  &:hover {
    text-decoration: none;
  }
`;

const StyledPagination = styled(Pagination)`
  & ul {
    justify-content: center;
  }
`;

const StyledLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;

export { StyledBox, StyledPagination, StyledLink };
