import { Typography, ExpansionPanelDetails, Button, Box } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const StyledBox = styled(Box)`
  margin: 0 auto;
`;
const StyledButton = styled(Button)`
  width: 128px;
  height: 32px;
`;

const StyledDetails = styled(ExpansionPanelDetails)`
  background-color: #ecedf0;
`;

export { StyledBox, StyledDetails, StyledButton };
