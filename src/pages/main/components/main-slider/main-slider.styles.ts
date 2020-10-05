import styled from 'styled-components';

import { Box, Button, Container, Grid, Typography } from '@material-ui/core';

interface IBox {
  src: string;
}
const StyledImage = styled(Box)`
  background-image: url(${(props: IBox) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 330px;
  height: 100%;
  background-position: center;

  ${props => props.theme.breakpoints.down('sm')} {
    height: 45vh;
  }
`;

const StyledButton = styled(Button)`
  height: 50px;
  color: white;
  background-color: #193364;
  float: left;
  &:hover {
    background-color: #0d1440;
  }
`;

const StyledTypography = styled(Typography)`
  white-space: pre-line;
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const StyledOverlay = styled(Box)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;

export { StyledImage, StyledButton, StyledTypography, StyledOverlay };
