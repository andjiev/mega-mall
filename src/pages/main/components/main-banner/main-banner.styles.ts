import styled from 'styled-components';

import { Box, Grid } from '@material-ui/core';

interface IGiftCardImage {
  url: string;
}
const MainBannerImage = styled(Box)`
  background-image: url(${(props: IGiftCardImage) => props.url});
  background-size: cover;
  width: 100%;
  height: 320px;

  ${props => props.theme.breakpoints.down('md')} {
    height: 200px;
  }
`;

export { MainBannerImage };
