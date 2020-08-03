import styled from 'styled-components';

import { Box, Grid } from '@material-ui/core';
import { mainbanner } from './main-banner.data';

interface IMainBanner {
  imgSource?: string;
  bgColor?: string;
}
const MainBannerImage = styled(Box)`
  background-color: ${(props: IMainBanner) => props.bgColor};
  background-image: url(${(props: IMainBanner) => props.imgSource});
  background-repeat: no-repeat;
  background-size: contain;
  height: 35vh;
  width: 100%;
  height: 335px;

  ${props => props.theme.breakpoints.down('md')} {
    height: 200px;
  }
`;

export { MainBannerImage };
