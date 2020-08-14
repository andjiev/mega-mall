import { Typography, ExpansionPanelDetails, Button, Box, Grid } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const StyledBox = styled(Box)`
  margin: 0 auto;
`;
const StyledGrid = styled(Grid)`
  margin: 0 auto;
`;
const StyledButton = styled(Button)`
  width: inherit;
  background-color: #193364;
  color: white;
`;

const StyledDetails = styled(ExpansionPanelDetails)`
  background-color: #ecedf0;
`;

export { StyledBox, StyledDetails, StyledGrid, StyledButton };
