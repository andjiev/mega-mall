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
  }
`;

const StyledGrid = styled(Grid)`
  min-height: 140px;

  @media (max-width: 768px) {
    min-height: 170px;
  }
`;

export { StyledImage, StyledLogo, StyledGrid };
