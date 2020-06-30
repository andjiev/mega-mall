import styled from 'styled-components';
import { Grid, Box } from '@material-ui/core';

const StyledImage = styled.img`
  width: 100%;
  max-width: 280px;
  height: 100%;
  max-height: 140px;
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

export { StyledImage, StyledGrid, StyledGridLogo, StyledLogo, StyledLogoBox };
