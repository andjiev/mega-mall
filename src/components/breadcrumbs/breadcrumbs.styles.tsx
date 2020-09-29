import React from 'react';
import styled from 'styled-components';

import { Box, Link } from '@material-ui/core';

const StyledBox = styled(Box)`
  background-color: #ffffff;
  border-top: 1px solid #a7b2c4;
  width: 100%;
  height: 45px;
  z-index: 4;
`;

const StyledLink = styled(Link)`
  cursor: pointer;
`;

export { StyledBox, StyledLink };
