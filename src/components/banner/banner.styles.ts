import styled from 'styled-components';

import { Box, Grid } from '@material-ui/core';

interface IMainBanner {
  imgSource?: string;
  bgColor?: string;
}
const XLBannerImage = styled(Box)`
  background-color: ${(props: IMainBanner) => props.bgColor};
  background-image: url(${(props: IMainBanner) => props.imgSource});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 257px;

  ${props => props.theme.breakpoints.down('md')} {
    height: 150px;
  }
`;

const LBannerImage = styled(Box)`
  background-color: ${(props: IMainBanner) => props.bgColor};
  background-image: url(${(props: IMainBanner) => props.imgSource});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 100px;

  ${props => props.theme.breakpoints.down('md')} {
    min-height: 55px;
  }
`;

const MenuBannerImage = styled(Box)`
  background-color: ${(props: IMainBanner) => props.bgColor};
  background-image: url(${(props: IMainBanner) => props.imgSource});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 215px;

  ${props => props.theme.breakpoints.down('md')} {
    min-height: 155px;
  }
`;

export { XLBannerImage, LBannerImage, MenuBannerImage };
