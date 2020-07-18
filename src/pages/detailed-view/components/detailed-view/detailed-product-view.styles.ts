import styled from 'styled-components';

import { Box, Grid, CardContent } from '@material-ui/core';

const StyledImage = styled.img`
  width: 100%;
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
  z-index: 999;
`;
const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const StyledBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export { StyledImage, StyledGridContainer, StyledStickyGridItem, StyledCardContent, StyledBox };
