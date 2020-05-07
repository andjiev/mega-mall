import styled from 'styled-components';

import { Box, Grid } from '@material-ui/core';
import { mainbanner } from './main-banner.data';

interface IMainBanner {
  url: string;
}
const MainBannerImage = styled(Box)`
  background-image: url(${(props: IMainBanner) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  height: 350px;
  width: 100%;

  ${props => props.theme.breakpoints.down('md')} {
    height: 200px;
  }
`;

export { MainBannerImage };
