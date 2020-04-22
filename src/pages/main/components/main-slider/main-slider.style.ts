import styled from 'styled-components';

import HeroImage from '../../../../assets/images/slider-image.jpg';
import { Box } from '@material-ui/core';

const StyledBanner = styled(Box)`
  background-size: 100% auto;
`;

const StyledCaption = styled(Box)`
  text-align: initial;
  font-family: Oswald Bold;
  font-weight: bold;
  padding-bottom: 178px;
`;

const StyledHeading = styled.h1`
  text-align: initial;
  font-family: 'OswaldBold', sans-serif;
  font-weight: bold;
  font-size: 50px;
`;

const StyledImage = styled.img`
  background-image: url(${HeroImage});
  background-size: cover;
  width: 100%;
  height: 700px;
`;

export { StyledBanner, StyledImage, StyledCaption, StyledHeading };
