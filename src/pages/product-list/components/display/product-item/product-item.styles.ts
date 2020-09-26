import styled from 'styled-components';
import { Grid, Box } from '@material-ui/core';

const StyledImage = styled.img`
  max-width: 217px;
  width: 100%;
  max-height: 190px;

  @media (max-width: 768px) {
    max-width: 71px;
    width: 100%;
  }
`;

const StyledLogo = styled.img`
  max-width: 120px;
  width: 100%;
  max-height: 40px;
  bottom: 15px;
  right: 0;
  border: 1px solid #d3d3d3;
  position: absolute;

  @media (max-width: 768px) {
    max-width: 98px;
    max-height: 30px;
    width: 100%;
    position: initial;
    float: right;
  }
`;

const StyledGrid = styled(Grid)`
  min-height: 170px;

  @media (max-width: 768px) {
    min-height: 140px;
  }
`;

const StyledPriceBox = styled.div`
  background-image: url('/assets/images/common/red-strike.png');
  background-position: left center;
  width: 146px;
  height: 138px;
  background-size: contain;
  position: absolute;
  background-repeat: no-repeat;
  margin-top: -10px;
`;

const MobileStyledPriceBox = styled.div`
  background-image: url('/assets/images/common/red-strike.png');
  background-position: left center;
  width: 100px;
  height: 125px;
  background-size: contain;
  position: absolute;
  background-repeat: no-repeat;
  margin-top: -25px;
`;

export { StyledImage, StyledLogo, StyledGrid, StyledPriceBox, MobileStyledPriceBox };
