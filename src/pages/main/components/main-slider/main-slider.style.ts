import styled from 'styled-components';

import { Box, Button, Container, Grid, Typography } from '@material-ui/core';

interface IBox {
  src: string;
}
const StyledImage = styled(Box)`
  background-image: url(${(props: IBox) => props.src});
  background-size: cover;
  width: 100%;
  height: 60vh;

  ${props => props.theme.breakpoints.down('sm')} {
    height: 45vh;
  }
`;

const StyledButton = styled(Button)`
  height: 50px;
  color: white;
  background-color: #193364;

  &:hover {
    background-color: #0d1440;
  }
`;

const StyledContainer = styled(Container)`
  text-align: left;
`;

const StyledGrid = styled(Grid)`
  height: 100%;
`;

const StyledTypography = styled(Typography)`
  white-space: pre-line;
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export { StyledGrid, StyledImage, StyledContainer, StyledButton, StyledTypography };
