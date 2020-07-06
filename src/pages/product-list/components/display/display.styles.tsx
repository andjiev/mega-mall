import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

const StyledBox = styled(Box)`
  width: 100%;
`;
const StyledPagination = styled(Pagination)`
  & ul {
    justify-content: center;
  }
`;
export { StyledBox, StyledPagination };
