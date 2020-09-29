import styled from 'styled-components';

import { Box, Grid, CardContent } from '@material-ui/core';

const StyledImage = styled.img`
  width: 100%;
  min-width: 450px;
  max-width: 450px;
  height: 100%;
`;

const StyledGridContainer = styled(Grid)`
  & container {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }
`;
const StyledStickyGridItem = styled(Grid)`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  height: 100%;
  z-index: 4;
  ${props => props.theme.breakpoints.down('sm')} {
    padding: 0 !important;
  }
`;
const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    h4 {
      font-size: 21px;
    }
    h3 {
      font-size: 24px;
    }
  }
`;
const StyledBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledLogo = styled.img`
  max-width: 120px;
  width: 100%;
  @media (max-width: 768px) {
    max-width: 100px;
    width: 100%;
  }
`;

export { StyledImage, StyledGridContainer, StyledStickyGridItem, StyledCardContent, StyledBox, StyledLogo };
