import styled from 'styled-components';

import { Container, Typography } from '@material-ui/core';

const StyledContainer = styled(Container)`
  max-width: 1530px;
`;
const StyledImage = styled.img`
  width: 135px;
  height: 47px;
`;
const StyledTypography = styled(Typography)`
  color: white;
`;

export { StyledContainer, StyledImage, StyledTypography };
