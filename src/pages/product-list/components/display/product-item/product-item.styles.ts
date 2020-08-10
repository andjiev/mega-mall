import styled from 'styled-components';
import { Grid, Box } from '@material-ui/core';

const StyledImage = styled.img`
  max-width: 218px;
  max-height: 190px;
`;

const StyledGrid = styled(Grid)`
  height: 100%;
`;

const StyledGridLogo = styled(Grid)`
  height: 100%;
  align-self: flex-end;
  align-content: end;
`;

const StyledLogo = styled.img`
  display: block;
  width: 100%;
  max-width: 120px;
  height: 100%;
  max-height: 40px;
`;

const StyledLogoBox = styled(Box)`
  display: flex;
  justify-content: flex-end;
`;

const StyledFlexGrid = styled(Grid)`
  height: 100%;
  min-height: 140px;
  max-height: 140%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export { StyledImage, StyledGrid, StyledGridLogo, StyledLogo, StyledLogoBox, StyledFlexGrid };
