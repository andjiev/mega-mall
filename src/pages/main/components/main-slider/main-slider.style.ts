import styled from 'styled-components';

import { Box, Button, Container, Grid, Typography } from '@material-ui/core';

interface IBox {
  src: string;
}
const StyledImage = styled(Box)`
  background-image: url(${(props: IBox) => props.src});
  background-size: cover;
  width: 100%;
  height: calc(80vh - 140px);
`;

const StyledButton = styled(Button)`
  height: 54px;
`;

const StyledContainer = styled(Container)`
  text-align: left;
`;

const StyledGrid = styled(Grid)`
  height: 100%;
`;

const StyledTypography = styled(Typography)`
  white-space: pre-line;
`;

export { StyledGrid, StyledImage, StyledContainer, StyledButton, StyledTypography };
