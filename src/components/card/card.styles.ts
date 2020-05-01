import styled from 'styled-components';

import { Box, Grid } from '@material-ui/core';

interface IStyledImage {
  url: string;
}
const StyledImage = styled(Box)`
  background-image: url(${(props: IStyledImage) => props.url});
  background-size: cover;
  width: 100%;
  height: 550px;

  ${props => props.theme.breakpoints.down('md')} {
    height: 350px;
  }
`;

const StyledGrid = styled(Grid)`
  height: 100%;
`;

export { StyledImage, StyledGrid };
