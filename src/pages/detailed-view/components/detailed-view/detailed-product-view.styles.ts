import styled from 'styled-components';

import { Box, Grid } from '@material-ui/core';

const StyledImage = styled.img`
  width: 100%;
`;
const StyledBox = styled(Box)`
  top: 32%;
  left: 65%;
  height: 500px;
  width: 463px;
  z-index: 99;
  position: fixed;
`;

export { StyledImage, StyledBox };
